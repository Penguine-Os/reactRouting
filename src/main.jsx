import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {StrictMode} from 'react';

import {BrowserRouter} from 'react-router-dom';
import Routing from './Routing.jsx';

import NavBarBootstrap from './NavBarBootstrap.jsx';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <BrowserRouter>
                <NavBarBootstrap/>
                <Routing/>
            </BrowserRouter>
        </StrictMode>
    )
