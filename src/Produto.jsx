import Estoque from "./Estoque";

function Produto(props) {

    produto = props.produto;

    return (
        <div>
            <h4>Produto encontra-se:</h4>
            <Estoque/>
        </div>

    )
}

export default Produto;