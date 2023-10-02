const seccion1 = document.querySelector(".seccion_1");
const seccion3 = document.querySelector(".seccion_3");
const titulo = document.createElement("h2");
const titulo2 = document.createElement("h2");
const titulo3 = document.createElement("h2");

titulo.innerText = `Productos`;


titulo3.classList.add("titulo_1", "centrado");
seccion1.appendChild(titulo);
seccion1.appendChild(titulo2);
seccion3.appendChild(titulo3);
titulo.classList.add("titulo_1");
titulo2.classList.add("titulo_1");

let libro;

const estructura1 = async () => {
  // libro = localStorage.getItem("lista_libros");

  // if (libro == null) {
  const response = await fetch("./js/productos.json");
  libro = await response.json();

  localStorage.setItem("lista_libros", JSON.stringify(libro));

  const jsonlibros = JSON.parse(localStorage.getItem("lista_libros"));
  const lista_de_libros = document.querySelector("#seccion_2");
  let ul = document.createElement("ul");

  jsonlibros.forEach((libro) => {
    let li = document.createElement("li");
    li.textContent = `${libro.titulo} `;

    li.classList.add("lista_de_libros");
    let icon = document.createElement("i");
    icon.setAttribute("data-id", libro.id);
    icon.classList.add("bx", "bxs-message-alt-add", "bx-rotate-90", "enlace");
    li.appendChild(icon);
    ul.appendChild(li);
    lista_de_libros.append(ul);
  });
};

estructura1();

document.addEventListener("click", (event) => {
  if (event.target.tagName == "I") {
    const id = event.target.dataset.id;
    console.log(typeof id);
    const libros = libro.filter((libro) => libro.id == id);
    console.log(libros, libro);
    localStorage.setItem("libro_elegido", JSON.stringify(libros));
    window.location = "producto.html";
  }
});
