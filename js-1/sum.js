function suma(numero) {
    if (numero <= 0) {
      return 0; // Si el número es menor o igual a cero, retorna 0
    }
  
    let sumaTotal = 0;
    for (let i = 1; i <= numero; i++) {
      sumaTotal += i; // Suma cada número desde 1 hasta el número dado
    }
  
    return sumaTotal;
  }
  
  // Ejemplo de uso de la función
  const numero = 10;
  
  const resultado = suma(numero);
  console.log("La suma es:", resultado);