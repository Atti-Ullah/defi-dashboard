import { useEffect } from 'react';
import { useExchange } from '../context/ExchangeProvider';

export default function Home() {

  const {loadData, cryptoPrices} = useExchange();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-700 dark:text-yellow-300 mb-8 flex items-center gap-2">
        Crypto Dashboard
      </h1>
        <div className="w-full max-w-6xl overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <thead>
              <tr className="bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-yellow-300">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Symbol</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-right">Price (USD)</th>
                <th className="py-3 px-4 text-right">24h Change</th>
                <th className="py-3 px-4 text-right">Market Cap</th>
                <th className="py-3 px-4 text-right">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {cryptoPrices?.data.map((coin) => {
                const change = coin.quote.USD.percent_change_24h;
                const isUp = change >= 0;
                return (
                  <tr key={coin.id} className="hover:bg-blue-200 dark:hover:bg-gray-700 transition even:bg-gray-200 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-900">
                    <td className="py-2 px-4 font-bold text-gray-700 dark:text-gray-200">{coin.cmc_rank}</td>
                    <td className="py-2 px-4 font-bold text-blue-600 dark:text-yellow-300">{coin.symbol}</td>
                    <td className="py-2 px-4 text-gray-700 dark:text-gray-200">{coin.name}</td>
                    <td className="py-2 px-4 text-right font-mono dark:text-gray-100">${coin.quote.USD.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                    <td className={`py-2 px-4 text-right font-semibold ${isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}> 
                      {isUp ? '▲' : '▼'} {change.toFixed(2)}%
                    </td>
                    <td className="py-2 px-4 text-right dark:text-gray-100">${coin.quote.USD.market_cap.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td className="py-2 px-4 text-right text-xs text-gray-400 dark:text-gray-500">{new Date(coin.last_updated).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </div>
  );
}