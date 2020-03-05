import React from 'react';
import handleClick from './Handles';

export default function Jugadores() {

    return ( localStorage.getItem('yavoto') == 1 
    
    ? 'Ya votaste!' : (

   <div className="row">

   <div className="col-lg-3 sm-6">
   <div className="card" >
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Lucas Ávila</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onClick={(e) => handleClick(1, e)} className="btn btn-primary">Votar por Lucas</a>
  </div>
  </div>
</div>

<div className="col-lg-3 sm-6">
   <div className="card" >
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Héctor Fiori</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onClick={(e) => handleClick(2, e)} className="btn btn-primary">Votar por Hector</a>
  </div>
  </div>
</div>

<div className="col-lg-3 sm-6">
   <div className="card" >
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Claudio Geloso</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onClick={(e) => handleClick(3, e)} className="btn btn-primary">Votar por Claudio</a>
  </div>
  </div>
</div>

<div className="col-lg-3 sm-6">
   <div className="card" >
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Mauro Di Franco</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onClick={(e) => handleClick(4, e)} className="btn btn-primary">Votar por Mauro</a>
  </div>
  </div>
</div>

</div>)) 

  }