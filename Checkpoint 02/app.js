const somaPoint = () => {
  let resultado = document.querySelector('#resultPoint')

  resultado.textContent = Number(resultado.textContent) + 1
}

const subtracaoPoint = () => {
  let resultado = document.querySelector('#resultPoint')

  resultado.textContent = Number(resultado.textContent) - 1
}
