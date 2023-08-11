import { TELAS } from "../App";
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

export default function TelaCarrinho ({ mudarTela }) {
    return (
        <>
            <Cabecalho />
            <div>CARRINHO</div>
            <button onClick={() => mudarTela(TELAS.PRODUTOS)}>Continuar comprando</button>
            <button onClick={() => mudarTela(TELAS.CHECKOUT)}>Finalizar Compra</button>
            <Rodape/>
        </>
    )
}