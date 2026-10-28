const calcPrice = () => {
  const inputPrice = Number(document.querySelector('#priceProductInput').value)

  const inputQtd = Number(document.querySelector('#qntProductInput').value)

  const result = document.querySelector('#result')

  result.innerText = inputPrice * inputQtd
}
