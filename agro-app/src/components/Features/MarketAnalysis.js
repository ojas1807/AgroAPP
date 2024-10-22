
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './MarketAnalysis.css';  // Import the CSS file

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

//     if (loading) return <div className="loading">Loading...</div>;
//     if (error) return <div className="error">{error}</div>;

//     return (
//         <div className="market-analysis-container">
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
    const [search, setSearch] = useState(''); // State for search input

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                // Log the search term for debugging
                console.log('Fetching market data with search:', search);

                const response = await axios.get('http://localhost:5000/api/market/trends', {
                    params: { search } // Pass search as a query parameter
                });

                // Log the response data for debugging
                console.log('Market data response:', response.data);

                setMarketData(response.data);
            } catch (err) {
                console.error('Error fetching market data:', err);
                setError('Error fetching market data');
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();
    }, [search]); // Refetch data whenever the search input changes

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="market-analysis-container">
            <h1>Market Analysis Page</h1>
            <input
                type="text"
                placeholder="Search for a crop..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} // Update search state on input change
                className="search-input"
            />
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
                    {marketData.length > 0 ? (
                        marketData.map((data) => (
                            <tr key={data._id}>
                                <td>{data.crop}</td>
                                <td>{data.region}</td>
                                <td>{data.previousPrice}</td>
                                <td>{data.currentPrice}</td>
                                <td>{data.futurePriceEstimate}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MarketAnalysis;
