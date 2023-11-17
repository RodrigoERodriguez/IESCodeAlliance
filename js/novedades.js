//---------------------------------------------------------------//

let novedades = [];

//---------------------------------------------------------------//

fetch("../data/novedades.json")
    .then(response => response.json())
    .then(data => {
        novedades = data;
        cargarNovedades(novedades);
    })

//---------------------------------------------------------------//

//- ELEMENTOS DEL DOM -//
const contenedorNovedades = document.querySelector("#novedades__grupo-contenedor")

//---------------------------------------------------------------//

function cargarNovedades() {
    contenedorNovedades.innerHTML = "";

    novedades.curso.forEach(curso => {

        const div = document.createElement("div");
        div.classList.add("curso");
        
        div.innerHTML = `
            <h2 class="novedades__titulo-categoria">${curso.nombre}</h2>
            <div class="novedades__contenedor-videos-categoria">
                ${curso.videos.map(video => `
                    <div class="novedades__video-categoria">
                        <img id="novedades__imagen-curso" src="${video.miniatura}" alt="${video.titulo}">
                        <h3 class="novedades__texto-titulo">${video.titulo}</h3>
                        <h3 class="novedades__texto-autor">${video.autor}</h3>
                        <h3 class="novedades__texto-duracion">${video.duracion}</h3>
                    </div>
                `).join('')}
            </div>
        `;

        contenedorNovedades.appendChild(div);
    });
}