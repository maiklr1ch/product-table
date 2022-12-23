import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FilterableProductTable from './components/FilterableProductTable.jsx';
import data from './data.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterableProductTable data={data} />
  </React.StrictMode>
);
