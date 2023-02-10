const Sugestao = props => {
    return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.imagem} alt={props.nome} />
                    <div class="texto">
                        <div class="nome">{props.nome}</div>
                        <div class="razao">{props.estado}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
    )
}

export {Sugestao};