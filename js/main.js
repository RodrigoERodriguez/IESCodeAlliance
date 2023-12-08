const usuario = JSON.parse(localStorage.getItem('inicioSesion')) || false

if(!usuario) {
    window.location.href = '../pages/inicio-sesion.html';
}