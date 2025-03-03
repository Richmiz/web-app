const API_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async () => {
  try {
    const response = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};