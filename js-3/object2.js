const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Abogada"
  };
  
  console.log(persona);
  
  function presentacion(objetoPersona) {
    return `Hola, mi nombre es ${objetoPersona.nombre}, tengo ${objetoPersona.edad} años y vivo en ${objetoPersona.ciudad}.`;
  }
  
  const mensaje = presentacion(persona);
  console.log(mensaje);
  
  persona.hobbies = ["yoga", "pintura", "senderismo"];
  console.log(persona.hobbies);
  
  for (let hobby of persona.hobbies) {
    console.log(hobby);
  }

