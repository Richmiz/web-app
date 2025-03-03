"use client";

import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CryptoTable from '../components/CryptoTable';
import SearchBar from '../components/SearchBar';
import RefreshButton from '../components/RefreshButton';
import { useCryptoData } from '../hooks/useCryptoData';
import CryptoDetailModal from '../components/CryptoDetailModal';

const queryClient = new QueryClient();

function CryptoApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cryptoData, isLoading, isError, error, refetch, isFetching } = useCryptoData();

  interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    image: string;
    [key: string]: any;
  }

  const handleCryptoSelect = (crypto: CryptoData | null): void => {
    setSelectedCrypto(crypto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Crypto Price Tracker</h1>
        <RefreshButton refetch={refetch} isFetching={isFetching} />
      </div>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {isError ? (
        <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg">
          Error loading data: {error?.message || 'Unknown error'}
        </div>
      ) : (
        <CryptoTable 
          cryptoData={cryptoData} 
          isLoading={isLoading} 
          searchTerm={searchTerm}
          onCryptoSelect={handleCryptoSelect}
        />
      )}
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Data refreshes automatically every minute. Last updated: {new Date().toLocaleTimeString() || 'Loading...'}</p>
      </div>

      <CryptoDetailModal
        crypto={selectedCrypto}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptoApp />
    </QueryClientProvider>
  );
}