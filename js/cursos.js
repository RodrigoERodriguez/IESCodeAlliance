//---------------------------------------------------------------//

let cursos = [];

//---------------------------------------------------------------//

fetch("../data/cursos.json")
    .then(response => response.json())
    .then(data => {
        cursos = data;
        cargarCursos(cursos);
    })

//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const contenedorCursos = document.querySelector("#curso__grupo-contenedor")

//---------------------------------------------------------------//

function cargarCursos() {
    contenedorCursos.innerHTML = "";

    cursos.curso.forEach(curso => {

        const div = document.createElement("div");
        div.classList.add("curso");
        
        div.innerHTML = `
            <h2 class="c__titulo-categoria">${curso.nombre}</h2>
            <div class="c__contenedor-videos-categoria">
                ${curso.videos.map(video => `
                    <div class="c__video-categoria">
                        <img id="catalogo__imagen-curso" src="${video.miniatura}" alt="${video.titulo}">
                        <h3>${video.titulo}</h3>
                        <h3>${video.autor}</h3>
                        <h3>${video.duracion}</h3>
                    </div>
                `).join('')}
            </div>
        `;

        contenedorCursos.appendChild(div);
    });
}
