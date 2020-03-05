import Swal from 'sweetalert2';

export default function handleClick(id, e) {
    e.preventDefault(); 

    if(id == 1){
         name = 'Lucas Ávila';
    }else if(id == 2){
         name = 'Héctor Fiori';
    }else if(id == 3){
        name = 'Claudio Geloso';
    }else if(id == 4){
        name = 'Mauro Di Franco';
    }

    Swal.fire({
     title: 'Deseas votar por '+name+'?',
     text: "Solo un voto por persona!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si vamos '+name+'!',
     cancelButtonText: 'No!'
   }).then((result) => {
     if (result.value) {
       Swal.fire(
         'Has votado!',
         'Se ha registrado el voto con éxito.',
         'success'
       )
     }
   })
 }