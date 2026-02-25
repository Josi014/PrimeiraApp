function Titulo(props){
    return(
        <div>
            <h2>Titulo!</h2>

            <div class="usado">
                <h3>Usando a prop recebida:</h3>
                <p>{props.texto}</p>
            </div>

        </div>
    )
}

export default Titulo;