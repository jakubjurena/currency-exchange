import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #fff;
        --color: #333;
        --font-size: 18px;
        --font-weight: 300;
        --font-weight-bold: 600;
        --border-color: #e1e1e1;
        --content-width: 95vw;
        --content-max-width: 450px;
        --input-width: 95vw;
        --input-max-width: 350px;
        --table-width: var(--input-width);
        --table-max-width: 550px;
        --transition: 300ms;
        --primary-color: rgb(138, 69, 255);
        --primary-color-hovered: rgb(104, 15, 255);
        --mobile-width: 600px;
    }
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: var(--background-color);
        color: var(--color);
        font-weight: var(--font-weight);
        font-size: var(--font-size);
        height: 100vh;
        box-sizing: border-box;
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
