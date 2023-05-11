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
