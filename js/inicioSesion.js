//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const inicioSesion = document.querySelector('#log__formulario-inicio-sesion');

//---------------------------------------------------------------//

inicioSesion.addEventListener('submit', (e) =>{

    e.preventDefault();

    //---------------------------------------------------------------//

    //- ELEMENTOS DEL DOM -//
    const datosEmail = document.querySelector('#log__datos-email').value;
    const datosPassword = document.querySelector('#log__datos-password').value;

    //---------------------------------------------------------------//

    const usuario = JSON.parse(localStorage.getItem('usuarios')) || [];

    //---------------------------------------------------------------//
    
    const validacionDeUsuario = usuario.find(Usuario => Usuario.email === datosEmail && Usuario.password === datosPassword);
    if(validacionDeUsuario){
        window.location.href = './inicio.html';
        localStorage.setItem('inicioSesion', JSON.stringify(validacionDeUsuario));
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario y/o contraseña incorrecto"
        });
    }

    //---------------------------------------------------------------//
});
