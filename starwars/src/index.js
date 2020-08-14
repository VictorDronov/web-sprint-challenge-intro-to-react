import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'

ReactDOM.render(
    <themeProvider>
        <App />
 </themeProvider>,
document.getElementById('root'));
