import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {StyleProvider} from "./context/style_context";


ReactDOM.render(
    <React.StrictMode>
        <StyleProvider>
            <Router>
                <App/>
            </Router>
        </StyleProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

