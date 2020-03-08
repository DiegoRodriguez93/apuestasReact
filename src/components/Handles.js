import React from 'react';
import Swal from 'sweetalert2';
import $ from 'jquery';


function handleClick($id, e) {
    e.preventDefault(); 

    if($id == 1){
         name = 'Lucas Ávila';
    }else if($id == 2){
         name = 'Héctor Fiori';
    }

    Swal.mixin({

      input: 'email',
      inputPlaceholder: 'ejemplo@email.com',
      confirmButtonText: 'Ingresar &rarr;',
      background: '#fff',
      }).queue([
      {
      title: 'Ingrese el correo electrónico para votar!'
      }
      ]).then( (result) => {
      if (result.value) {
      const answers = JSON.stringify(result.value)
      const $email0 = answers.replace('["', '');
      const $email = $email0.replace('"]', '');

      $.ajax({
        type: "POST",
        url: "https://ajedrezlatino.com/apiapuestas/apostar.php",
        data: {id: $id, email: $email},
        dataType: "JSON",
        beforeSend: () => {
          Swal.fire({
            title: 'Votando...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            onOpen: () => {
              Swal.showLoading();
            }
          })},
         success: function (res) {
          if(res.result){
            Swal.fire('Correcto!',
                res.message,
                'success');
                localStorage.setItem('yavoto',1);
                setTimeout(()=>{
                  location.reload();
                },2500);
          }else{
            Swal.fire('Error!',
            res.message,
            'error');
          }
        }
      });

  
     






   /*    axios({
        method: 'POST',
        url: 'https://ajedrezlatino.com/apiapuestas/apostar.php',
        data: JSON.stringify({id: $id, email: $email})
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
      
      }
      })
      
     }


     export default handleClick;