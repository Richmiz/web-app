import { useQuery } from '@tanstack/react-query';
import { fetchCryptoData } from '../services/api';

export const useCryptoData = () => {
  const {
    data: cryptoData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['cryptoData'],
    queryFn: fetchCryptoData,
    refetchInterval: 60000, // Refetch data every minute
    staleTime: 30000, // Considering data stale after 30 seconds
  });

  return {
    cryptoData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
    
  };
};