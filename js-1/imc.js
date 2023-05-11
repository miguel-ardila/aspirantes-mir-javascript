function bmi(peso, altura) {
    let alturaMetros = altura / 100; // Convertir la altura de centímetros a metros
    let imc = peso / (alturaMetros * alturaMetros);
    return imc;
  }
  
  // Ejemplo de uso de la función
  let peso = 70; // en kilogramos
  let altura = 170; // en centímetros
  
  let resultado = bmi(peso, altura);
  console.log("El IMC es:", resultado.toFixed(2));
  