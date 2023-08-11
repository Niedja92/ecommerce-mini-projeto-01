import Produto from './produto';
import Titulo from './titulo';
//fazendo o destruct direto na declaração do parâmetro da função
export default function Produtos({ key, id, name, value, image }) {

    const addParaCarrinho = () => {}
    const removerDoCarrinho = () => {}

    return (
        //usamos o fragment quando o "corpo" do return possui estrutura de mais de uma linha
        <>  
            <Titulo>Produtos</Titulo>

            {produtos.map(produto => (
                <Produto
                    key={id}
                    id={id}
                    name={name}
                    value={value}
                    image={image}
                />
            ))}
        </>
    )
}