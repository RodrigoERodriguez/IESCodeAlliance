//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const registro = document.querySelector('#register__formulario-usuario');

//---------------------------------------------------------------//

registro.addEventListener('submit', (e) => {

    e.preventDefault();

    //---------------------------------------------------------------//

    //- ELEMENTOS DEL DOM -//
    const datosName = document.querySelector('#register__datos-name').value;
    const datosSurname = document.querySelector('#register__datos-surname').value;
    const datosEmail = document.querySelector('#register__datos-email').value;
    const datosPassword = document.querySelector('#register__datos-password').value;

    //---------------------------------------------------------------//
    
    const usuario = JSON.parse(localStorage.getItem('usuarios')) || [];

    //---------------------------------------------------------------//
    const usuarioRegistrado = usuario.find(Usuarios => Usuarios.email === datosEmail);

    if(usuarioRegistrado) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El correo que intentas registrar ya se encuentra registrado"
        });
    }
    else{
        usuario.push({ name: datosName, surname: datosSurname, email: datosEmail, password: datosPassword});
        localStorage.setItem('usuarios', JSON.stringify(usuario));

        window.location.href = './inicio-sesion.html';
    }

    //---------------------------------------------------------------//
})