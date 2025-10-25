import { useExchange } from '../context/ExchangeProvider';
import { FaExchangeAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Exchange() {
	const { selectedExchange, setSelectedExchange } = useExchange();
	const [error, setError] = useState('');

	// Example: Only allow alphanumeric and spaces, min 3 chars
	const validateExchange = (name: string) => {
		return /^[a-zA-Z0-9 ]{3,}$/.test(name);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSelectedExchange(value);
		if (value && !validateExchange(value)) {
			setError('Exchange name must be at least 3 characters and contain only letters, numbers, or spaces.');
		} else {
			setError('');
		}
	};

	return (
	<div className="flex flex-col items-center justify-center bg-linear-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 min-h-screen">
			<div className="flex items-center gap-2 mb-4">
				<FaExchangeAlt className="text-blue-600 dark:text-yellow-300 text-3xl" />
				<h1 className="text-3xl font-extrabold text-blue-700 dark:text-yellow-300">Exchange</h1>
			</div>
			<div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col gap-4">
				<label htmlFor="exchange-input" className="font-semibold text-gray-700 dark:text-gray-200">Exchange Name</label>
				<input
					id="exchange-input"
					type="text"
					value={selectedExchange}
					onChange={handleChange}
					placeholder="e.g. Uniswap, SushiSwap"
					className="border-2 border-blue-200 focus:border-blue-500 dark:border-gray-600 dark:focus:border-yellow-400 dark:bg-gray-800 dark:text-gray-100 rounded px-3 py-2 outline-none transition"
					aria-label="Enter the name of the DeFi exchange"
				/>
				{error && <div className="text-red-500 dark:text-red-400 text-sm">{error}</div>}
				<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mt-2">
					<FaExchangeAlt className="text-blue-500 dark:text-yellow-400" />
					<span className="font-semibold">{selectedExchange || 'No exchange selected.'}</span>
				</div>
			</div>
			<div className="mt-6 text-gray-500 dark:text-gray-400 text-sm text-center max-w-md">Select your preferred DeFi exchange to view rates, liquidity, and trading options. Only reputable exchanges are supported.</div>
		</div>
	);
}
