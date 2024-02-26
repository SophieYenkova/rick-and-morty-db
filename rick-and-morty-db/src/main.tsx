import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import { createGlobalStyle } from 'styled-components'

const GLobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GLobal />
    <App />
  </React.StrictMode>,
)
