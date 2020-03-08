import React, {useState, useEffect} from 'react';
import handleClick from './Handles';
import PieChart from 'react-minimal-pie-chart';
import axios from 'axios';

export default function Jugadores() {

  const [votos, setVotos] = useState({});
  const [loading, setLoading] = useState(true);

  if(localStorage.getItem('yavoto') == 1){

    async function fetchUrl(){

      const response = await axios('https://ajedrezlatino.com/apiapuestas/rellenarPie.php');

      setVotos(response.data);
      setLoading(false);

      setInterval(async () => {

        const response = await axios('https://ajedrezlatino.com/apiapuestas/rellenarPie.php');

        setVotos(response.data);
        setLoading(false);

      }, 20000);



  }

  useEffect( () => {
    fetchUrl();
  }, [])

  }

    return ( localStorage.getItem('yavoto') == 1 
    
    ? ( loading ? 'cargando' : (<div className="row">
      <div className="col-12 text-center my-2">
      <h2>Copa de campeones 🏆</h2>
      </div>
        <div className="col-lg-4 sm-0"></div>
       <div className="col-lg-4 sm-12">

       <PieChart
      data={[
        { title: 'Lucas Ávila', value: votos.lucas, color: '#007bff' },
        { title: 'Héctor Fiori', value: votos.hector, color: '#C13C37' }
      ]}
    />
    <div className="mt-4">
    <h3 style={{'color':'#007bff'}}>Lucas Ávila: {votos.lucas}</h3>
    <h3 style={{'color':'#C13C37'}}>Héctor Fiori: {votos.hector}</h3>
    </div>
    </div>
    <div className="col-lg-4 sm-0"></div>
    </div>)) : (

   <div className="row">
           <div className="col-12 text-center my-2">
      <h2>Vota tu favorito! Copa de campeones 🏆</h2>
      </div>

<div className="col-lg-6 sm-6">
   <div className="card" >
  <img src="https://ajedrezlatino.com/images/fiori.jpg" className="card-img-top img-fluid" style={{"maxHeight" : "300px"}}  alt="hector fiori ajedrez" />
  <div className="card-body">
    <h5 className="card-title">Héctor Fiori</h5>
    <p className="card-text">Ganador de la Copa organizadores relizada hace 4 meses por Ajedrez Latino.</p>
    <div className="text-center">
    <a onClick={(e) => handleClick(2, e)} className="btn btn-primary text-white">Votar por Hector</a>
    </div>
  </div>
  </div>
</div>

<div className="col-lg-6 sm-6">
   <div className="card" >
  <img src="https://ajedrezlatino.com/images/avila.jpg" className="card-img-top  img-fluid" style={{"maxHeight" : "300px"}} alt="lucas avila ajedrez" />
  <div className="card-body">
    <h5 className="card-title">Lucas Ávila</h5>
    <p className="card-text">Ganador de la Copa Argentina Ajedrez Latino sub 2200, la primer copa organizada por Ajedrez Latino.</p>
    <div className="text-center">
    <a onClick={(e) => handleClick(1, e)} className="btn btn-primary text-white">Votar por Lucas</a>
    </div>
  </div>
  </div>
</div>

</div>)) 

  }