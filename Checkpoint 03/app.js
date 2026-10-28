const productExchange = () => {
  const productImage = document.querySelector('#imgProduct')
  const productName = document.querySelector('.titleProduct')
  const imageCurrent = productImage.getAttribute('src')

  if (imageCurrent === '/Checkpoint 03/assets/fone.svg') {
    productImage.setAttribute('src', '/Checkpoint 03/assets/relogio.svg')
    productImage.setAttribute('alt', 'Relógio inteligente na cor roxa')
    productName.textContent = 'Relógio inteligente'
  } else {
    productImage.setAttribute('src', '/Checkpoint 03/assets/fone.svg')
    productImage.setAttribute('alt', 'Fone sem fio na cor roxa')
    productName.textContent = 'Fone sem fio'
  }
}
