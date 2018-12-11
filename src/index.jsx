import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

class Prueba extends Component{

    render(){
        return(
            <h1>Render con React</h1>
        );
    }
}

render(
    <Prueba/>,
    <App/>,
    document.getElementById('app')
);