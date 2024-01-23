
export function notANumber(value) {
  return isNaN(value) || value == ""
} // função criada para aceitar só números. quando retornar false é um número

export function calculateIMC(weight, height) {
  return (weight / ((height / 100)** 2)).toFixed(2) 
}


























