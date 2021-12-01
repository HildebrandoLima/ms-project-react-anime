import React, { Component } from "react";

class PersonagensPrincipais extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Personagens Principais</h2><hr /></p>
                {this.props.demon_slayer.map(anime=>(
                    anime.personagens_principais.map(pp=>(
                    <div class="col-6" key={pp}>
                        <div class="card mt-3">
                            <div class="card-body">
                                <h3>{pp.nome}</h3><hr />
                                    <p class="text-center"><img src={pp.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                                    <p class="text-break">{pp.descricao}</p>
                                    <p><strong>Poderes e Habilidades</strong>: {pp.poderes_habilidades ? pp.poderes_habilidades : '-'}</p>
                                    <p><strong>Técnica de Respiração</strong>: {pp.tecnica_respiracao ? pp.tecnica_respiracao : '-'}</p>
                            </div>
                        </div>
                    </div>
                    ))
                ))}
            </div>
        );
    }
}

export default PersonagensPrincipais;