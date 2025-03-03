import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const CryptoTable = ({ cryptoData, isLoading, searchTerm, onCryptoSelect }) => {
    if (isLoading) {
        return <LoadingSpinner />;
    }

    // Filter crypto data based on search term
    const filteredData = cryptoData?.filter(crypto =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Top 5 if no search term is provided
    const displayData = searchTerm ? filteredData : filteredData?.slice(0, 5);

    return (
        <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-md">Rank</th>
                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-md">Name</th>
                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-md hidden sm:table-cell">Symbol</th>
                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right text-md">Price</th>
                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right text-md">24h</th>
                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right text-md hidden md:table-cell">Market Cap</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {displayData?.length > 0 ? (
                        displayData.map((crypto) => (
                            <tr 
                                key={crypto.id} 
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => onCryptoSelect(crypto)}
                            >
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-md">{crypto.market_cap_rank}</td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-md flex items-center">
                                    <img
                                        src={crypto.image}
                                        alt={crypto.name}
                                        className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2"
                                    />
                                    <span className="hidden xs:inline">{crypto.name}</span>
                                    <span className="xs:hidden text-gray-500 uppercase">{crypto.symbol}</span>
                                </td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-md text-gray-500 uppercase hidden sm:table-cell">{crypto.symbol}</td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-md text-right">
                                    ${crypto.current_price.toLocaleString()}
                                </td>
                                <td className={`py-2 sm:py-3 px-2 sm:px-4 text-md text-right ${crypto.price_change_percentage_24h >= 0
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                    }`}>
                                    <div className="flex items-center justify-end">
                                        {crypto.price_change_percentage_24h >= 0 ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                                    </div>
                                </td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-md text-right hidden md:table-cell">
                                    ${crypto.market_cap.toLocaleString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="py-4 text-center text-gray-500">
                                No cryptocurrencies found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;