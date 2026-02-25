//import Titulo from "./Titulo";
import './App.css';
import Produto from './Produto';
//import Corpo from "./Corpo";

function App(){
    
    const mensagemAlerta = (mensagem) => {
        alert(mensagem);
    }

    return(
        <div>
            <h1>Folha IFSUL!</h1>
            <Titulo texto="APP"/>
            <Corpo  mensagemAlerta={mensagemAlerta} array={["arroz", "feijão", "macarrão"]}/>
        </div>
    )

   /** return(
        <div>
            <h1>Consulte Produtos!</h1>
            <label>Teste: </label>
            <input type='text' id='produto' placeholder='Digite um produto'></input>
            <button type='submet'>Verificar</button>

            < Produto produto = "carderno" />
        </div>
    )*/
    
}

export default App;