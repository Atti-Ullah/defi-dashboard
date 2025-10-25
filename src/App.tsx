import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/static/Navbar';
import Main from './components/static/Main';
import Footer from './components/static/Footer';
import PopupMessage from './components/utils/PopupMessage';
import GlobalLoader from './components/utils/Loader';
import Home from './routes/Home';

function App() {
  return (
    <>
      <PopupMessage />
      <GlobalLoader />
  <div className="flex flex-col min-h-screen overflow-y-auto scrollbar-hide">
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
