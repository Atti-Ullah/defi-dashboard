/**
 * API client for fetching cryptocurrency prices from CoinMarketCap
 */
import axios from 'axios';

const API_KEY = import.meta.env.VITE_CRYPTO_DATA_API_KEY;

const BASE_URL = '/api/v1/cryptocurrency/listings/latest'; 

export async function fetchCryptoPrices() {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });
    return response.data;
  } catch (ex) {
    console.error('Error fetching crypto prices:', ex);
    return null;
  }
}
