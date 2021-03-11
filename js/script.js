const input = document.querySelector('#display')
const numbers = document.querySelectorAll('.numbers button')
const simbles = document.querySelectorAll('.operacoes button')

let total
let numberImput
let conta = []

function addNumber(valueNumber) {
  if(numberImput){
    numberImput += valueNumber;
  }else {
    numberImput = valueNumber;
  }

  if(input.value == " ") {
    input.value = `${valueNumber}`
  }else {
    input.value += `${valueNumber}`
  }
}

function addConta(valueSimble) {
  conta.push(numberImput)
  conta.push(valueSimble)
  numberImput = 0

  input.value += ` ${valueSimble}`
}

function executeConta() {
  conta.push(numberImput)
  refTotal = conta.toString()
  total = eval(refTotal.replace(/([,]+)/g, ' ')) 
  numberImput = total
  conta = []
  input.value = total
}

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    const valueNumber = number.innerText
    addNumber(valueNumber)
  })
})

simbles.forEach((simble) => {
  simble.addEventListener('click', () => {
    const valueSimble = simble.value
    if(simble.innerText == 'AC'){
      console.log('limpando')
    }else if(simble.innerText == '='){
      executeConta()
    }
    else {
      addConta(valueSimble)
    }
  })
})