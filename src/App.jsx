import Titulo from "./Titulo";
import './App.css';
import Corpo from "./Corpo";

function App(){
    return(
        <div>
            <h1>Folha IFSUL!</h1>
            <Titulo texto="Testando props!"/>
            <Corpo texto="Testando props no corpo!"/>
        </div>
    )
}

export default App;