//---------------------------------------------------------------//

const usuario = JSON.parse(localStorage.getItem('inicioSesion')) || false

//---------------------------------------------------------------//

if(!usuario) {
    window.location.href = '../pages/inicio-sesion.html';
}

//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const botonLogOut = document.querySelector('#app__dropdown-boton-cerrar-sesion');

//---------------------------------------------------------------//

botonLogOut.addEventListener('click', () => {
    localStorage.removeItem('inicioSesion');
    window.location.href = '../pages/inicio-sesion.html';
})