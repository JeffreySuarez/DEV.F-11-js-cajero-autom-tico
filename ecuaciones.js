let lecturaCantidad = parseInt(document.getElementById("cantidad").value);
let lecturaSaldoActual = parseInt(document.getElementById("cuenta").value);

function ecuacion1() {
  let cantidadTotal = parseInt(document.getElementById("cantidad").value);
  //esta constante va a tomar y transformar a numero que agregarmos en el input de cantidad
  let cantidadCuenta = parseInt(document.getElementById("cuenta").value);
  //obtenemos los datos de cuenta
  const error = document.getElementById("error");
  //vamos a realizar los calculos

  if (cantidadCuenta > 990) {
    error.innerHTML = "Error el valor no puede ser mayor que 990";
  } else {
    document.getElementById("cuenta").value = cantidadCuenta + cantidadTotal;
  }
}

function ecuacion2() {
  let cantidadTotal = parseInt(document.getElementById("cantidad").value);
  //esta constante va a tomar y transformar a numero que agregarmos en el input de cantidad
  let cantidadCuenta = parseInt(document.getElementById("cuenta").value);
  //obtenemos los datos de cuenta
  const error = document.getElementById("error");

  //vamos a realizar los calculos
  if (cantidadCuenta < 10) {
    error.innerHTML = "Error el valor no puede ser menor que 10 o mayor que 990";
  } else {
    document.getElementById("cuenta").value = cantidadCuenta - cantidadTotal;
  }
}
