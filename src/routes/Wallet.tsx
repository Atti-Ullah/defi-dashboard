import { useWallet } from '../context/WalletProvider';
import { FaWallet } from 'react-icons/fa';
import { useState } from 'react';

export default function Wallet() {
	const { walletAddress, setWalletAddress, isConnected, connectWallet, error } = useWallet();
	const [manualError, setManualError] = useState('');

	// Simple Ethereum address validation
	const validateAddress = (address: string) => {
		return /^0x[a-fA-F0-9]{40}$/.test(address);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setWalletAddress(value);
		if (value && !validateAddress(value)) {
			setManualError('Invalid Ethereum address format.');
		} else {
			setManualError('');
		}
	};

	return (
		<div className="flex flex-col items-center justify-center bg-linear-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 min-h-screen">
			<div className="flex items-center gap-2 mb-4">
				<FaWallet className="text-blue-600 dark:text-yellow-300 text-3xl" />
				<h1 className="text-3xl font-extrabold text-blue-700 dark:text-yellow-300">Wallet</h1>
			</div>
			<div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col gap-4">
				<button
					className={`bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition ${isConnected ? 'opacity-60 cursor-not-allowed' : ''}`}
					onClick={connectWallet}
					disabled={isConnected}
				>
					{isConnected ? 'Wallet Connected' : 'Connect MetaMask'}
				</button>
				<label htmlFor="wallet-input" className="font-semibold text-gray-700 dark:text-gray-200 mt-4">Or enter wallet address manually</label>
				<input
					id="wallet-input"
					type="text"
					value={walletAddress}
					onChange={handleChange}
					placeholder="e.g. 0x1234...abcd"
					className="border-2 border-blue-200 focus:border-blue-500 dark:border-gray-600 dark:focus:border-yellow-400 dark:bg-gray-800 dark:text-gray-100 rounded px-3 py-2 outline-none transition"
					aria-label="Enter your Ethereum wallet address"
					disabled={isConnected}
				/>
				{(error || manualError) && <div className="text-red-500 dark:text-red-400 text-sm">{error || manualError}</div>}
				<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mt-2">
					<FaWallet className="text-blue-500 dark:text-yellow-400" />
					<span className="font-semibold">{walletAddress || 'No address entered.'}</span>
				</div>
				{isConnected && <div className="text-green-600 dark:text-green-400 text-sm font-semibold mt-2">Connected to MetaMask</div>}
			</div>
			<div className="mt-6 text-gray-500 dark:text-gray-400 text-sm text-center max-w-md">Connect your wallet with MetaMask for secure DeFi interactions, or enter an address manually.</div>
		</div>
	);
}
