import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const widgetDivs = document.querySelectorAll('.twanbox-finance-widget');

widgetDivs.forEach(div => {
  ReactDOM.render(
    <React.StrictMode>
      <App symbol={div.dataset.symbol}/>
    </React.StrictMode>,
      div
  );
})
