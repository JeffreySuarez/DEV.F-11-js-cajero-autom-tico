function ecuacion1() {
  let cantidadTotal = parseInt(document.getElementById("cantidad").value);
  //esta constante va a tomar y transformar a numero que agregarmos en el input de cantidad
  let cantidadCuenta = parseInt(document.getElementById("cuenta").value);
  //obtenemos los datos de cuenta

  //vamos a realizar los calculos
  document.getElementById("cuenta").value = cantidadCuenta + cantidadTotal;
}

function ecuacion2() {
  let cantidadTotal = parseInt(document.getElementById("cantidad").value);
  //esta constante va a tomar y transformar a numero que agregarmos en el input de cantidad
  let cantidadCuenta = parseInt(document.getElementById("cuenta").value);
  //obtenemos los datos de cuenta

  //vamos a realizar los calculos

  document.getElementById("cuenta").value = cantidadCuenta - cantidadTotal;
}
