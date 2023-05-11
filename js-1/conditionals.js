function calcularColor(num) {
  var color;
  if (num === 1) {
    color = "negro";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "azul";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}

// código de prueba
console.log(calcularColor(1)); // "El color es negro"
console.log(calcularColor(2)); // "El color es blanco"
console.log(calcularColor(3)); // "El color es azul"
console.log(calcularColor(8)); // "El color es verde"

/* otra posible solucion
function calcularColor(numero) {
    if (numero === 1) {
      return "El color es negro";
    } else if (numero === 2) {
      return "El color es blanco";
    } else if (numero === 3) {
      return "El color es azul";
    } else {
      return "El color es verde";
    }
  }

  // Ejemplos de uso de la función
  console.log(calcularColor(1));
  console.log(calcularColor(2));
  console.log(calcularColor(3));
  console.log(calcularColor(4));
 */