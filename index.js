function leerNumero(mensaje) {
  let numeroLeido = NaN;
  do {
    numeroLeido = Number(prompt(mensaje));
  } while (isNaN(numeroLeido));
  return numeroLeido;
}

const cantidadPersonas = leerNumero("Ingrese la cantidad de personas");

const listaPedidos = [];

for (let index = 0; index < cantidadPersonas; index++) {
  const producto = prompt(`Ingrese el producto ${index + 1}`);
  const cantidad = leerNumero(`Ingrese la cantidad ${index + 1}`);
  const pedido = {
    producto: producto,
    cantidad: cantidad,
  };
  listaPedidos.push(pedido);
}

for (let index = 0; index < cantidadPersonas; index++) {
  const pedido = listaPedidos[index];
  alert(
    `La persona ${index + 1} pidio ${pedido.cantidad} unidades de ${
      pedido.producto
    }`
  );
}

function calcularPromedioDeCantidad(listaPedidos) {
  let total = 0;
  listaPedidos.forEach(function (pedido) {
    total = total + pedido.cantidad;
  });
  const cantidad = listaPedidos.length;
  return total / cantidad;
}
const promedio = calcularPromedioDeCantidad(listaPedidos);
alert(`El promedio de productos por persona es ${promedio}`);
