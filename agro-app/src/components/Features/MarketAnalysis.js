// // src/components/Features/MarketAnalysis.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MarketAnalysis = () => {
//     const [marketData, setMarketData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/market'); // Adjust the URL as needed
//                 setMarketData(response.data);
//             } catch (err) {
//                 setError('Error fetching market data');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMarketData();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <h1>Market Analysis Page</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Crop</th>
//                         <th>Region</th>
//                         <th>Previous Price</th>
//                         <th>Current Price</th>
//                         <th>Future Price Estimate</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {marketData.map((data) => (
//                         <tr key={data._id}>
//                             <td>{data.crop}</td>
//                             <td>{data.region}</td>
//                             <td>{data.previousPrice}</td>
//                             <td>{data.currentPrice}</td>
//                             <td>{data.futurePriceEstimate}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default MarketAnalysis;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MarketAnalysis.css';  // Import the CSS file

const MarketAnalysis = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/market'); // Adjust the URL as needed
                setMarketData(response.data);
            } catch (err) {
                setError('Error fetching market data');
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="market-analysis-container">
            <h1>Market Analysis Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Crop</th>
                        <th>Region</th>
                        <th>Previous Price</th>
                        <th>Current Price</th>
                        <th>Future Price Estimate</th>
                    </tr>
                </thead>
                <tbody>
                    {marketData.map((data) => (
                        <tr key={data._id}>
                            <td>{data.crop}</td>
                            <td>{data.region}</td>
                            <td>{data.previousPrice}</td>
                            <td>{data.currentPrice}</td>
                            <td>{data.futurePriceEstimate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarketAnalysis;
