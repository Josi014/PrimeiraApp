function Corpo(props) {
    return (
        <div>
            <h2>Corpo da página!</h2>
            <h3>Usando a prop recebida: {props.texto}</h3>

            <button onClick={() => props.mensagemAlerta("Botão clicado!")}>Clique aqui</button>

            {props.array && props.array.map((item, index) => {
                return <ul><li key={index}>{item}</li></ul>;
            })}

            <h4>Valores recebidos por props: {JSON.stringify(props)}</h4>


        </div>
    )
}

export default Corpo;