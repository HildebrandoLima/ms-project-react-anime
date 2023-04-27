import React, { Component } from 'react';

class Hashiras extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Hashiras</h2><hr /></p>
                {this.props.demon_slayer.hashiras?.map(hashira=>(
                <div class="col-6" key={hashira}>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h3>{hashira.nome}</h3><hr />
                            <p class="text-center"><img src={hashira.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                            <p class="text-break">{hashira.descricao}</p>
                            <p><strong>Poderes e Habilidades</strong>: {hashira.poderes_habilidades ? hashira.poderes_habilidades : '-' }</p>
                            <p><strong>Técnica de Respiração</strong>: {hashira.tecnica_respiracao ? hashira.tecnica_respiracao : '-'}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default Hashiras;