import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";


export default function Navbar () {

  const { theme, toggleTheme } = useTheme();


  return (
    <nav className="w-full p-4 bg-blue-600 text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="md:max-w-12xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Defi Dashboard</Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/wallet" className="hover:underline">Wallet</Link>
          <Link to="/exchange" className="hover:underline">Exchange</Link>
          <Link to="/impostazioni" className="hover:underline">Settings</Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded text-white font-semibold dark:border transition bg-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-yellow-300"
            aria-label="Toggle dark/light mode"
              >
                {theme === 'dark' ? (
                  <>
                    <FaMoon className="inline-block align-middle mr-1" size={20} />
                    <span className="align-middle">Dark</span>
                  </>
                ) : (
                  <>
                    <FaSun className="inline-block align-middle mr-1" size={20} />
                    <span className="align-middle">Light</span>
                  </>
                )}
          </button>
        </div>
      </div>
    </nav>
  )
}