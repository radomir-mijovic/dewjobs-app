import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {StyleProvider} from "./context/style_context";
import {JobsProvider} from "./context/job_context";


ReactDOM.render(
    <React.StrictMode>
        <StyleProvider>
            <JobsProvider>
                <Router>
                    <App/>
                </Router>
            </JobsProvider>
        </StyleProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

