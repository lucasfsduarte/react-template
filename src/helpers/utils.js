// Usem esse arquivo para criar funções auxiliares

const exampleUtilOne = (value) => {
  console.log(value) // Recebe um valor
  return value // Retorna o mesmo valor
}

const exampleUtilTwo = (valueOne, valueTwo) => {
  console.log(valueOne) // Recebe valor 1
  console.log(valueTwo) // Recebe valor 2
  return Number(valueOne) + Number(valueTwo) // Retorna valor 1 + valor 2
}

// Sempre coloque os nomes das funcoes no export
export {
  exampleUtilOne,
  exampleUtilTwo,
}