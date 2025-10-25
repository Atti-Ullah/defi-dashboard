import { createContext, useContext, useState, ReactNode } from 'react';
import { fetchCryptoPrices } from '../api/cryptoPrice.api';
import { CryptoPrices } from '../types/contexts/exchange.types';
import { useConfig } from './ConfigProvider';

interface ExchangeContextType {
  loadData: () => void;
	selectedExchange: string;
	setSelectedExchange: (exchange: string) => void;
  cryptoPrices: CryptoPrices | null;
  setCryptoPrices: (prices: CryptoPrices | null) => void;
}

const ExchangeContext = createContext<ExchangeContextType | undefined>(undefined);

export function ExchangeProvider({ children }: { children: ReactNode }) {

  const { setLoading, setPopupMessage } = useConfig();

	const [selectedExchange, setSelectedExchange] = useState('');
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices | null>(null);

  async function loadData() {
    try {
      setLoading(true);
      const prices = await fetchCryptoPrices();
      setCryptoPrices(prices);
    } catch (error) {
      setPopupMessage({ message: `Failed to load cryptocurrency prices. ${error}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  }

	return (
		<ExchangeContext.Provider value={{ loadData, selectedExchange, setSelectedExchange, cryptoPrices, setCryptoPrices }}>
			{children}
		</ExchangeContext.Provider>
	);
}

export function useExchange() {
	const context = useContext(ExchangeContext);
	if (!context) {
		throw new Error('useExchange must be used within an ExchangeProvider');
	}
	return context;
}
