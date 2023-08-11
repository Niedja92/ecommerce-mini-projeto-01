import { useState } from 'react'
import TelaProdutos from './paginas/telaProdutos'
import TelaCarrinho from './paginas/telaCarrinho'
import TelaCheckout from './paginas/telaCheckout'

export const TELAS = {
  PRODUTOS: 'produtos',
  CARRINHO: 'carrinho',
  CHECKOUT: 'checkout',
}

function App() {
  const [ tela, setTela] = useState(TELAS.PRODUTOS)

  if (tela === TELAS.PRODUTOS) {
    return <TelaProdutos mudarTela={setTela} />
  }

  if (tela === TELAS.CARRINHO) {
    return <TelaCarrinho mudarTela={setTela} />
  }

  return <TelaCheckout mudarTela={setTela} />

}

export default App