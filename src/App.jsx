import Titulo from "./Titulo";
import { useState } from 'react';
import './App.css';
import Corpo from "./Corpo";

function App() {

    const [contador, setContador] = useState(0);

    const mensagemAlerta = (mensagem) => {
        alert(mensagem);
    }

    return (
        <div>
            <h1>Aula 25/02/2026!</h1>

            <h2>Contador {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar contador</button>

            <Titulo texto="APP" />
            <Corpo mensagemAlerta={mensagemAlerta} array={["arroz", "feijão", "macarrão"]} />

            <div>
                <h1>Consulte Produtos!</h1>
            </div>
        </div>
    )


}

export default App;