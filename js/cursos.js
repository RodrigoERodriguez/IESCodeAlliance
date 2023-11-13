//---------------------------------------------------------------//

let arrayCursos = [];

//---------------------------------------------------------------//

fetch("../data/cursos.json")
    .then(response => response.json())
    .then(data => {
        arrayCursos = data;
        cargarCursos(arrayCursos);
    })
//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const contenedorCursos = document.querySelector("#curso__grupo-contenedor")

//---------------------------------------------------------------//

function cargarCursos() {

    contenedorCursos.innerHTML = "";

    arrayCursos.forEach(curso => {
        
        const div = document.createElement("div");
        div.classList.add("curso");
        div.innerHTML = `
            <h2 class="c__titulo-categoria">${curso.curso.nombre}</h2>
            <div class="c__contenedor-videos-categoria">
                <div class="c__video-categoria">
                    <img src="${curso.videos.miniatura}" alt="${curso.videos.titulo}">
                    <h3>${curso.videos.titulo}</h3>
                    <h3>${curso.videos.autor}</h3>
                    <h3>${curso.videos.duracion}</h3>
                </div>
            </div>
        `;

        contenedorCursos.appendChild(div);
    });
}

cargarCursos();