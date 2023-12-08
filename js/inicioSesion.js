const inicioSesion = document.querySelector('#log__formulario-inicio-sesion');

inicioSesion.addEventListener('submit', (e) =>{

    e.preventDefault();

    const datosEmail = document.querySelector('#log__datos-email').value;
    const datosPassword = document.querySelector('#log__datos-password').value;

    const usuario = JSON.parse(localStorage.getItem('usuarios')) || [];
    const validacionDeUsuario = usuario.find(Usuario => Usuario.email === datosEmail && Usuario.password === datosPassword);
    if(validacionDeUsuario){
        console.log('se logeo');

        window.location.href = '../pages/inicio.html';
        localStorage.setItem('inicioSesion', JSON.stringify(validacionDeUsuario));
    }
    else{
        console.log('usuario y/o contraseña incorrecto');
    }

});
