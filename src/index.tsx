import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from './context/ConfigProvider';
import { WalletProvider } from './context/WalletProvider';
import { ExchangeProvider } from './context/ExchangeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <ExchangeProvider>
          <WalletProvider>
              <App />
          </WalletProvider>
        </ExchangeProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();