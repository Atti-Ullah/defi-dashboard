declare global {
	interface Window {
		ethereum?: {
			request: (args: { method: string }) => Promise<string[]>;
		};
	}
}
import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
	walletAddress: string;
	setWalletAddress: (address: string) => void;
	isConnected: boolean;
	connectWallet: () => Promise<void>;
	error: string;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
	const [walletAddress, setWalletAddress] = useState('');
	const [isConnected, setIsConnected] = useState(false);
	const [error, setError] = useState('');

	const connectWallet = async () => {
		setError('');
		if (typeof window.ethereum === 'undefined') {
			setError('MetaMask is not installed.');
			return;
		}
		try {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			if (accounts && accounts.length > 0) {
				setWalletAddress(accounts[0]);
				setIsConnected(true);
			} else {
				setError('No accounts found.');
			}
		} catch (err: unknown) {
			if (typeof err === 'object' && err && 'message' in err) {
				setError((err as { message?: string }).message || 'Failed to connect wallet.');
			} else {
				setError('Failed to connect wallet.');
			}
		}
	};

	return (
		<WalletContext.Provider value={{ walletAddress, setWalletAddress, isConnected, connectWallet, error }}>
			{children}
		</WalletContext.Provider>
	);
}

export function useWallet() {
	const context = useContext(WalletContext);
	if (!context) {
		throw new Error('useWallet must be used within a WalletProvider');
	}
	return context;
}
