import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// ReactDOM.render(<App />, document.getElementById('root'));

// new React 18 syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);