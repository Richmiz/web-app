import React from 'react';

const CryptoDetailModal = ({ crypto, isOpen, onClose }) => {
    if (!isOpen || !crypto) return null;

    return (
        <div className="fixed inset-0  flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center">
                        <img 
                            src={crypto.image} 
                            alt={crypto.name} 
                            className="w-10 h-10 mr-3" 
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{crypto.name}</h2>
                            <span className="text-gray-500 uppercase">{crypto.symbol}</span>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Content */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Price Information */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Price Information</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Current Price:</span>
                                    <span className="font-medium">${crypto.current_price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">24h Change:</span>
                                    <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}>
                                        {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
                                        {crypto.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">24h High:</span>
                                    <span className="font-medium">${crypto.high_24h?.toLocaleString() || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">24h Low:</span>
                                    <span className="font-medium">${crypto.low_24h?.toLocaleString() || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Market Data */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Market Data</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Market Cap:</span>
                                    <span className="font-medium">${crypto.market_cap?.toLocaleString() || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Market Cap Rank:</span>
                                    <span className="font-medium">#{crypto.market_cap_rank || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Volume:</span>
                                    <span className="font-medium">${crypto.total_volume?.toLocaleString() || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Circulating Supply:</span>
                                    <span className="font-medium">{crypto.circulating_supply?.toLocaleString() || 'N/A'} {crypto.symbol.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                        <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">All-Time High:</span>
                                <span className="font-medium">${crypto.ath?.toLocaleString() || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">All-Time High Date:</span>
                                <span className="font-medium">{crypto.ath_date ? new Date(crypto.ath_date).toLocaleDateString() : 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">All-Time Low:</span>
                                <span className="font-medium">${crypto.atl?.toLocaleString() || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">All-Time Low Date:</span>
                                <span className="font-medium">{crypto.atl_date ? new Date(crypto.atl_date).toLocaleDateString() : 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="border-t p-4 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CryptoDetailModal;