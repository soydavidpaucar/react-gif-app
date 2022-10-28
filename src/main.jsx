import React from 'react';
import ReactDOM from 'react-dom/client';

import { GifApp } from "./GifApp.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);
