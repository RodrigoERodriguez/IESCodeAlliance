//---------------------------------------------------------------//

let cursos = [];

//---------------------------------------------------------------//

fetch("../data/cursos.json")
    .then(response => response.json())
    .then(data => {
        cursos = data;
        cargarCursos(cursos);
    });

//---------------------------------------------------------------//
    
function cargarCursos(cursos) {
    const contenedorCursos = document.querySelector("#cursos__grupo-contenedor");
    contenedorCursos.innerHTML = "";

    cursos.curso.forEach(curso => {
        const div = document.createElement("div");
        div.classList.add("curso");

        div.innerHTML = `
            <h2 class="cursos__titulo-categoria">${curso.nombre}</h2>
            <div class="cursos__contenedor-videos-categoria">
                ${curso.videos.map(video => `
                    <div class="cursos__video-categoria">
                        <img id="cursos__imagen-curso" src="${video.miniatura}" alt="${video.titulo}">
                        <h3 class="cursos__texto-titulo">${video.titulo}</h3>
                        <h3 class="cursos__texto-autor">${video.autor}</h3>
                        <h3 class="cursos__texto-duracion">${video.duracion}</h3>
                    </div>
                `).join('')}
            </div>
        `;

        contenedorCursos.appendChild(div);
    });
}

//---------------------------------------------------------------//

function filtrarCursos(categoria, cursos) {
    if (categoria === 'Todos') {
        return cursos;
    } else {
        return { curso: cursos.curso.filter(curso => curso.nombre === categoria) };
    }
}

//---------------------------------------------------------------//

document.getElementById("cursos__boton-filtrar").addEventListener('click', function (event) {
    event.preventDefault();

    const eleccionLenguaje = document.getElementById("id-categoria");
    const categoriaSeleccionada = eleccionLenguaje.value;

    const cursosFiltrados = filtrarCursos(categoriaSeleccionada, cursos);

    cargarCursos(cursosFiltrados);
});