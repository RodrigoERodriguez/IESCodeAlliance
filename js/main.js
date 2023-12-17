//---------------------------------------------------------------//

const usuario = JSON.parse(localStorage.getItem('inicioSesion')) || false

//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const botonLogOut = document.querySelector('#app__dropdown-boton-cerrar-sesion');

//---------------------------------------------------------------//

botonLogOut.addEventListener('click', () => {
    console.log(botonLogOut);

    localStorage.removeItem('inicioSesion');
    window.location.href = './inicio-sesion.html';

})