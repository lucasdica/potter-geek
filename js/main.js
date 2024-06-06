const formulario = document.querySelector("#formulario");
const misProductos = document.querySelector("#productos");
const productoNombre = document.querySelector("#nombre");
const productoPrecio = document.querySelector("#precio");
const productoImagen = document.querySelector("#imagen");
const btnEnviar = document.querySelector("#btn-enviar");
const btnLimpiar = document.querySelector("#btn-limpiar");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    const productoNombre = document.querySelector("#nombre").value;
    const productoPrecio = document.querySelector("#precio").value;
    const productoImagen = document.querySelector("#imagen").value;

    let producto = "";
    producto = `<div class="cards-productos">
    <div class="card-nombre">
        <p class="nombre-producto">${productoNombre}</p>
    </div>
    <div class="card-imagen">
        <img src="${productoImagen}" alt="">
    </div>
    <div class="card-precio">
        <p class="precio-producto">${productoPrecio}</p>
    </div>
</div>`

    misProductos.innerHTML += producto;
})

btnLimpiar.addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("#nombre").value = "";
    document.querySelector("#precio").value = "";
    document.querySelector("#imagen").value = "";
})
