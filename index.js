//Tuve la idea de hacer una herramienta que me permita ingresar la cantidad de personas que quieran pedir un determinado tipo de producto y -->
//que luego tenga la posibilidad de elegir la cantidad para cada cliente, al final se calcula el promedio de la cantidad de productos pedidos por persona.

// Con esta función me aseguro de que ingrese si o si la cantidad de personas en formato numérico

function leerNumero(mensaje) {
  let numeroLeido = NaN;
  do {
    numeroLeido = Number(prompt(mensaje));
  } while (isNaN(numeroLeido));
  return numeroLeido;
}

const cantidadPersonas = leerNumero(
  "Ingrese la cantidad de personas que harán el pedido"
);

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

//Para calcular el promedio de productos pedidos por persona.
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
