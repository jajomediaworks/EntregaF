function content (){

    function nombreUsuario(){
    
      alert("Biervenidos a Aneska - Asesroria de imagen");
    
      let nombre = prompt("Ingrese su nombre");
    
      if( nombre === ''){
    
        nombre = prompt("Ingrese su nombre");
    
     }
    
      alert(`Bienvenido ${nombre} ya puedes empezar a reservar`);
    
      return nombre;
    
    }
    
    function reserva() {
    
      let horario;
    
        do {
    
          horario = +prompt( ('Aneska \n Reserva tu horario para tu asesoria por favor: \n1: 7:00am a 9:00am -Corte de Caballero \n2: 11:00am a 1:00pm - Masaje Capilar \n3: 1:30pm a 3:20pm - Barberia '));
    
        } while( horario !==1 && horario !== 2 && horario !== 3){
    
          switch (horario){
    
           case 1:
    
            return '7:00am a 9:00am -Corte de Caballero';
    
            case 2:
    
              return '11:00am a 1:00pm - Masaje Capilar';
    
            case 3:
    
              return '1:30pm a 3:20pm - Barberia';
    
            default:
    
              reserva();
    
          }
    
        }
    
    }
    
    function precioMasaje(valor){
    
      if(valor === '7:00am a 9:00am -Corte de Caballero'){
    
        return 120000;
    
      } else if(valor === '11:00am a 1:00pm - Masaje Capilar'){
    
        return 200000;
    
      }else if('1:30pm a 3:20pm - Barberia'){
    
        return 350000;
    
      }
    
    }
    
    function cuentaMasaje(usuario, reservation, costo){
    
        alert(`Aneska Style\n\n ${usuario} escogiste el horario de ${reservation} por un valor de ${costo}`);
    
    }
    
     let usuario = nombreUsuario();
    
     let reservation = reserva();
    
     let costo = precioMasaje(reservation);
    
     cuentaMasaje( usuario, reservation, costo);
    
    }