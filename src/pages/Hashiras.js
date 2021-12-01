import React, { Component } from 'react';

class Hashiras extends Component {
    render() {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Hashiras</h2><hr /></p>
                {this.props.demon_slayer.map(anime=>(
                    anime.hashiras.map(ha=>(
                    <div class="col-6" key={ha}>
                        <div class="card mt-3">
                            <div class="card-body">
                                <h3>{ha.nome}</h3><hr />
                                    <p class="text-center"><img src={ha.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                                    <p class="text-break">{ha.descricao}</p>
                                    <p><strong>Poderes e Habilidades</strong>: {ha.poderes_habilidades ? ha.poderes_habilidades : '-' }</p>
                                    <p><strong>Técnica de Respiração</strong>: {ha.tecnica_respiracao ? ha.tecnica_respiracao : '-'}</p>
                            </div>
                        </div>
                    </div>
                    ))
                ))}
            </div>
        );
    }
}

export default Hashiras;