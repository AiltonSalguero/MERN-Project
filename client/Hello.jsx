import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Hello extends Component {
    
    render(){
        return(
            <div>
                <h1>Hola</h1>
            </div>
        )
    }
}

export default hot(module)(Hello);