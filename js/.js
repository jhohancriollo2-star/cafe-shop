let contadorDeProductos =0;


let botonesAgregar = document.querySelectorAll('.order-btn');
let mensajeToast   = document.getElementById('toast');
let spanContador   = document.getElementById('cart-count');

function agregarProducto(){
    contadorDeProductos = contadorDeProductos + 1;
    spanContador.textContent = contadorDeProductos;
    mensajeToast.classList.add('show')

 setTimeout(function() {
    mensajeToast.classList.remove('show');
  }, 3000);

}

for (let i = 0; i < botonesAgregar.length; i++) {
  botonesAgregar[i].addEventListener('click', agregarProducto);
}