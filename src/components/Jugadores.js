import React from 'react';
import handleClick from './Handles';

export default function Jugadores() {

    return ( localStorage.getItem('yavoto') == 1 
    
    ? 'Ya votaste!' : (

   <div><div onClick={(e) => handleClick(1, e)}>
    Lucas Ávila
  </div><br></br>

  <div onClick={(e) => handleClick(2, e)}>
    Héctor Fiori
  </div><br></br>
  
  <div onClick={(e) => handleClick(3, e)}>
    Claudio Geloso
  </div><br></br>
  
  <div onClick={(e) => handleClick(4, e)}>
    Mauro di Franco
  </div></div>)) 

  }