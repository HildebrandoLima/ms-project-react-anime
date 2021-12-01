import React, { Component } from "react";

class Outros extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Outros</h2><hr /></p>
                {this.props.demon_slayer.map(anime=>(
                    anime.outros.map(ou=>(
                    <div class="col-6" key={ou}>
                        <div class="card mt-3">
                            <div class="card-body">
                                <h3>{ou.nome}</h3><hr />
                                    <p class="text-center"><img src={ou.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                                    <p class="text-break">{ou.descricao}</p>
                                    <p><strong>Poderes e Habilidades</strong>: {ou.poderes_habilidades ? ou.poderes_habilidades : '-'}</p>
                                    <p><strong>Técnica de Respiração</strong>: {ou.tecnica_respiracao ? ou.tecnica_respiracao : '-'}</p>
                            </div>
                        </div>
                    </div>
                    ))  
                ))}
            </div>
        );
    }
}

export default Outros;