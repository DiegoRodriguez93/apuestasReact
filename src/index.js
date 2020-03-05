import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Jugadores from './components/Jugadores';
import 'bootstrap/dist/css/bootstrap.css';

function App(){

    return (<div className="container"><Header/>
     <Jugadores/></div>)

}

ReactDOM.render(<App/>,document.getElementById('app'));
