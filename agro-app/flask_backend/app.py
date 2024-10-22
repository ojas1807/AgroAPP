# from flask import Flask, request, jsonify
# import pickle
# import numpy as np
# from flask_cors import CORS  # Import CORS

# app = Flask(__name__)  # Corrected __name__
# CORS(app)  # Enable CORS for all routes

# # Load the trained model and encoders
# with open('encoders/crop_recommendation_model.pkl', 'rb') as f:
#     model = pickle.load(f)
# with open('encoders/soil_color_encoder.pkl', 'rb') as f:
#     soil_encoder = pickle.load(f)
# with open('encoders/season_encoder.pkl', 'rb') as f:
#     season_encoder = pickle.load(f)
# with open('encoders/crop_encoder.pkl', 'rb') as f:
#     crop_encoder = pickle.load(f)

# @app.route('/predict', methods=['POST'])
# def predict_crop():
#     data = request.get_json()

#     nitrogen = data['Nitrogen']
#     phosphorus = data['Phosphorus']
#     potassium = data['Potassium']

#     # Check for unseen labels in Season
#     if data['Season'] not in season_encoder.classes_:
#         return jsonify({"error": "Unseen season label provided."}), 400

#     season = season_encoder.transform([data['Season']])[0]  # Encode the season
#     soil_color = soil_encoder.transform([data['Soil_color']])[0]  # Encode the soil color
#     rainfall = data['Rainfall']

#     # Prepare input for model
#     input_data = np.array([[nitrogen, phosphorus, potassium, season, soil_color, rainfall]])

#     # Predict crop (get top 10 probabilities)
#     probabilities = model.predict_proba(input_data)[0]
#     top_indices = np.argsort(probabilities)[-10:][::-1]  # Get top 10 crops

#     # Get crop names
#     top_crops = crop_encoder.inverse_transform(top_indices)

#     # Filter out None or NaN values
#     top_crops = [crop for crop in top_crops if crop is not None and isinstance(crop, str) and crop != 'NaN']

#     # Log the probabilities and indices for debugging
#     print("Probabilities:", probabilities)
#     print("Top Indices:", top_indices)
#     print("Recommended Crops:", top_crops)

#     return jsonify({"recommended_crops": top_crops})


# @app.route('/get_season_labels', methods=['GET'])
# def get_season_labels():
#     # Return a list of valid season labels
#     valid_seasons = season_encoder.classes_.tolist()
#     return jsonify({"valid_seasons": valid_seasons})


# if __name__ == '__main__':  # Corrected __main__
#     app.run(debug=True, host='0.0.0.0')  # Listen on all interfaces
import os 
from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS  # Import CORS

app = Flask(__name__)  # Initialize Flask app
CORS(app)  # Enable CORS for all routes

# Load the trained model and encoders
with open('encoders/crop_recommendation_model.pkl', 'rb') as f:
    model = pickle.load(f)
with open('encoders/soil_color_encoder.pkl', 'rb') as f:
    soil_encoder = pickle.load(f)
with open('encoders/season_encoder.pkl', 'rb') as f:
    season_encoder = pickle.load(f)
with open('encoders/crop_encoder.pkl', 'rb') as f:
    crop_encoder = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict_crop():
    data = request.get_json()

    # Extract data from request
    nitrogen = data.get('Nitrogen')
    phosphorus = data.get('Phosphorus')
    potassium = data.get('Potassium')
    rainfall = data.get('Rainfall')

    # Handle unseen Season label
    season = data.get('Season', 'Unknown')
    if season not in season_encoder.classes_:
        return jsonify({"error": "Unseen season label provided."}), 400
    season_encoded = season_encoder.transform([season])[0]

    # Handle unseen Soil_color label
    soil_color = data.get('Soil_color', 'Unknown')
    if soil_color not in soil_encoder.classes_:
        return jsonify({"error": "Unseen soil color label provided."}), 400
    soil_color_encoded = soil_encoder.transform([soil_color])[0]

    # Prepare input for the model
    input_data = np.array([[nitrogen, phosphorus, potassium, season_encoded, soil_color_encoded, rainfall]])

    # Predict crop (get top 10 probabilities)
    probabilities = model.predict_proba(input_data)[0]
    top_indices = np.argsort(probabilities)[-10:][::-1]  # Get top 10 crops

    # Get crop names
    top_crops = crop_encoder.inverse_transform(top_indices)

    # Filter out None or NaN values
    top_crops = [crop for crop in top_crops if crop is not None and isinstance(crop, str) and crop != 'NaN']

    # Log the probabilities and indices for debugging
    print("Probabilities:", probabilities)
    print("Top Indices:", top_indices)
    print("Recommended Crops:", top_crops)

    return jsonify({"recommended_crops": top_crops})


@app.route('/get_season_labels', methods=['GET'])
def get_season_labels():
    # Return a list of valid season labels
    valid_seasons = season_encoder.classes_.tolist()
    return jsonify({"valid_seasons": valid_seasons})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)  # Listen on all interfaces
