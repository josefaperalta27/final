const detalle = JSON.parse(localStorage.getItem("libro_elegido"));
const volver = document.querySelector(".bxs-left-arrow");
const detalle_libro = document.getElementById("detalle");

detalle.forEach((libro) => {
  let estructura_card = `
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-6">
        <div class="card-body">
          <h1 class="card-title principal">${libro.titulo}</h1>
          
          <p class="card-text card_1">
            ${libro.descripcion}
          </p>
          <h3 class="card-title estrella">${libro.calificacion}</h3>
          <h3 class="card-title">$${libro.precio}</h3>          
        </div>
      </div>
      <div class="col-md-4">
        <img src="${libro.imagen}" class="img-fluid rounded float-end imagen" alt="imagen libro"/>
    </div>
    </div>
  </div>`;
  detalle_libro.innerHTML = estructura_card;
});

document.addEventListener("click", function (event) {
  if (event.target.tagName == "A") {
    localStorage.clear();
    console.log("ya esta vacío el local");
  }
});
