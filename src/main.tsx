import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./router/Router.tsx";
import {inject} from '@vercel/analytics';

inject();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>,
)
