import Swal from 'sweetalert2';
import axios from 'axios';

export default function handleClick($id, e) {
    e.preventDefault(); 

    if($id == 1){
         name = 'Lucas Ávila';
    }else if($id == 2){
         name = 'Héctor Fiori';
    }else if($id == 3){
        name = 'Claudio Geloso';
    }else if($id == 4){
        name = 'Mauro Di Franco';
    }
    Swal.mixin({

      input: 'email',
      confirmButtonText: 'Ingresar &rarr;',
      background: '#fff',
      }).queue([
      {
      title: 'Ingrese el correo electronico para el sorteo!'
      }
      ]).then((result) => {
      if (result.value) {
      const answers = JSON.stringify(result.value)
      const email = answers.replace('["', '');
      console.log(result);
      console.log(email);
      axios({
        method: 'POST',
        url: 'https://ajedrezlatino.com/apiapuestas/apostar.php',
        data: {id: $id, email: result.value}
      })
      .then(function (res) {
        if(res.result){
          Swal.fire(
            'Has votado!',
            res.message,
            'success'
          );
          localStorage.setItem('yavoto',1);
        }else{
          Swal.fire(
            'Error!',
            res.message,
            'error'
          );
        }
 
      })
      .catch(function (error) {
          console.log(error);
      });
      
      }
      })
      
/*
      axios({
        method: 'POST',
        url: 'https://ajedrezlatino.com/apiapuestas/apostar.php',
        data: {id: $id}
      })
      .then(function (res) {
        if(res.result){
          Swal.fire(
            'Has votado!',
            res.message,
            'success'
          );
          localStorage.setItem('yavoto',1);
        }else{
          Swal.fire(
            'Error!',
            res.message,
            'error'
          );
        }
 
      })
      .catch(function (error) {
          console.log(error);
      }); */

/*       
       Swal.fire(
         'Has votado!',
         'Se ha registrado el voto con éxito.',
         'success'
       ) */
     }
