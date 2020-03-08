import React from 'react';
import ReactDOM from 'react-dom';
import Jugadores from './components/Jugadores';
import 'babel-polyfill'; 
import 'bootstrap/dist/css/bootstrap.css';

function App(){

    return (<div className="container">
     <Jugadores/></div>)

}

ReactDOM.render(<App/>,document.getElementById('app'));
