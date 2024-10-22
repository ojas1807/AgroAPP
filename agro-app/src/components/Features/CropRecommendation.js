// import axios from 'axios';
// import React, { useState } from 'react';
// import './Recommendation.css';  // Importing the custom CSS for styling

// const Recommendation = () => {
//   const [formData, setFormData] = useState({
//     Nitrogen: '',
//     Phosphorus: '',
//     Potassium: '',
//     Season: '',
//     Soil_color: '',
//     Rainfall: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const getRecommendedCrops = (e) => {
//     e.preventDefault();
    
//     axios.post('http://localhost:5001/predict', formData)
//       .then((response) => {
//         console.log('Crop Recommendation:', response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the recommendation!', error);
//       });
//   };

//   return (
//     <div className="recommendation-container">
//       <h1 className="title">Smart Crop Recommendation</h1>
//       <p className="description">Enter the soil and environmental details to get the best crop recommendations for your farm.</p>
      
//       <form onSubmit={getRecommendedCrops} className="recommendation-form">
//         <div className="form-group">
//           <label>Nitrogen (N)</label>
//           <input type="number" name="Nitrogen" value={formData.Nitrogen} onChange={handleChange} required placeholder="Enter Nitrogen level" />
//         </div>

//         <div className="form-group">
//           <label>Phosphorus (P)</label>
//           <input type="number" name="Phosphorus" value={formData.Phosphorus} onChange={handleChange} required placeholder="Enter Phosphorus level" />
//         </div>

//         <div className="form-group">
//           <label>Potassium (K)</label>
//           <input type="number" name="Potassium" value={formData.Potassium} onChange={handleChange} required placeholder="Enter Potassium level" />
//         </div>

//         <div className="form-group">
//           <label>Season</label>
//           <select name="Season" value={formData.Season} onChange={handleChange} required>
//             <option value="">Select a Season</option>
//             <option value="Kharif">Kharif</option>
//             <option value="Rabi">Rabi</option>
//             <option value="Zaid">Zaid</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Soil Color</label>
//           <select name="Soil_color" value={formData.Soil_color} onChange={handleChange} required>
//             <option value="">Select Soil Color</option>
//             <option value="Red">Red</option>
//             <option value="Black">Black</option>
//             <option value="Loamy">Loamy</option>
//             <option value="Sandy">Sandy</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Rainfall (mm)</label>
//           <input type="number" name="Rainfall" value={formData.Rainfall} onChange={handleChange} required placeholder="Enter Rainfall in mm" />
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Get Recommendation" className="submit-btn" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Recommendation;
import axios from 'axios';
import React, { useState } from 'react';
import './Recommendation.css';  

const Recommendation = () => {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Season: '',
    Soil_color: '',
    Rainfall: ''
  });

  const [recommendation, setRecommendation] = useState([]); // Changed to array to store crops
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const getRecommendedCrops = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5001/predict', formData)
      .then((response) => {
        // Assuming response.data is an object like { recommended_crops: ['Wheat', 'Rice', ...] }
        setRecommendation(response.data.recommended_crops || []);  // Extracting the array of crops
        setError('');
      })
      .catch((error) => {
        console.error('There was an error fetching the recommendation!', error);
        setError('Failed to fetch recommendation. Please try again.');
        setRecommendation([]);  // Clear any previous recommendation
      });
  };

  return (
    <div className="recommendation-container">
      <h1 className="title">Smart Crop Recommendation</h1>
      <p className="description">Enter the soil and environmental details to get the best crop recommendations for your farm.</p>

      <form onSubmit={getRecommendedCrops} className="recommendation-form">
        <div className="form-group">
          <label>Nitrogen (N)</label>
          <input type="number" name="Nitrogen" value={formData.Nitrogen} onChange={handleChange} required placeholder="Enter Nitrogen level" />
        </div>

        <div className="form-group">
          <label>Phosphorus (P)</label>
          <input type="number" name="Phosphorus" value={formData.Phosphorus} onChange={handleChange} required placeholder="Enter Phosphorus level" />
        </div>

        <div className="form-group">
          <label>Potassium (K)</label>
          <input type="number" name="Potassium" value={formData.Potassium} onChange={handleChange} required placeholder="Enter Potassium level" />
        </div>

        <div className="form-group">
          <label>Season</label>
          <select name="Season" value={formData.Season} onChange={handleChange} required>
            <option value="">Select a Season</option>
            <option value="Kharif">Kharif</option>
            <option value="Rabi">Rabi</option>
            <option value="Zaid">Zaid</option>
          </select>
        </div>

        <div className="form-group">
          <label>Soil Color</label>
          <select name="Soil_color" value={formData.Soil_color} onChange={handleChange} required>
            <option value="">Select Soil Color</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Loamy">Loamy</option>
            <option value="Sandy">Sandy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rainfall (mm)</label>
          <input type="number" name="Rainfall" value={formData.Rainfall} onChange={handleChange} required placeholder="Enter Rainfall in mm" />
        </div>

        <div className="form-group">
          <input type="submit" value="Get Recommendation" className="submit-btn" />
        </div>
      </form>

      {/* Display recommendation or error */}
      {recommendation.length > 0 && (
        <div className="recommendation-result">
          <h2>Recommended Crops:</h2>
          <ul>
            {recommendation.map((crop, index) => (
              <li key={index}>{crop}</li>  // Display each crop in a list
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
