function join(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += String(arr[i]);
      if (i !== arr.length - 1) {
        result += " ";
      }
    }
    return result;
  }
  
  console.log(join([1, 2, 3])); // "1 2 3"
  console.log(join(["Hello", "World"])); // "Hello World"
  console.log(join([])); // ""
  