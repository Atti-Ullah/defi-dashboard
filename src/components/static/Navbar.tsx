import { Link } from "react-router-dom";

export default function Navbar () {
  return (
    <nav className="w-full bg-blue-600 text-white p-4">
      <div className="md:max-w-12xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Defi Dashboard</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/2" className="hover:underline">Menu 2</Link>
          <Link to="/3" className="hover:underline">Menu 3</Link>
          <Link to="/4" className="hover:underline">Menu 4</Link>
          <Link to="/impostazioni" className="hover:underline">Settings</Link>
        </div>
      </div>
    </nav>
  )
}