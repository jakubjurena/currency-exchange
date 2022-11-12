import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #fff;
        --color: #333;
        --font-weight-bold: 400;
        --font-weight: 300;
    }
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: var(--background-color);
        color: var(--color);
        font-weight: var(--font-weight);
        font-size: 18px;
    }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();