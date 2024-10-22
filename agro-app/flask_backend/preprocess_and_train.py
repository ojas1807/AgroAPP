import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pickle

# Load the dataset
data = pd.read_csv('crop_data.csv')  # Ensure the dataset name is correct

# Encode categorical columns (Soil_color, Crop, Season)
le_soil = LabelEncoder()
le_crop = LabelEncoder()
le_season = LabelEncoder()

data['Soil_color'] = le_soil.fit_transform(data['Soil_color'])
data['Crop'] = le_crop.fit_transform(data['Crop'])
data['Season'] = le_season.fit_transform(data['Season'])  # Will include 'Rabi' now

# Split the data into features (X) and target (y)
X = data[['Nitrogen', 'Phosphorus', 'Potassium', 'Season', 'Soil_color', 'Rainfall']]
y = data['Crop']

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest Classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Model Accuracy: {accuracy * 100:.2f}%')

# Save the model and label encoders
with open('encoders/crop_recommendation_model.pkl', 'wb') as f:
    pickle.dump(model, f)
with open('encoders/soil_color_encoder.pkl', 'wb') as f:
    pickle.dump(le_soil, f)
with open('encoders/season_encoder.pkl', 'wb') as f:
    pickle.dump(le_season, f)
with open('encoders/crop_encoder.pkl', 'wb') as f:
    pickle.dump(le_crop, f)

print("Model and encoders saved successfully.")
