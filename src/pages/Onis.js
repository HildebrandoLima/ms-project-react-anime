import React, { Component } from 'react';

class Onis extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Onis</h2><hr /></p>
                {this.props.demon_slayer.map(anime=>(
                    anime.onis.map(on=>(
                        <div class="col-6" key={on}>
                            <div class="card mt-3">
                                <div class="card-body">
                                    <h3>{on.nome}</h3><hr />
                                        <p class="text-center"><img src={on.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                                        <p>{on.titulo}</p>
                                        <p class="text-break">{on.descricao}</p>
                                        <p><strong>Poderes e Habilidades</strong>: {on.poderes_habilidades ? on.poderes_habilidades : '-'}</p>
                                        <p><strong>Técnica de Respiração</strong>: {on.tecnica_respiracao ? on.tecnica_respiracao : '-'}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        );
    }
}

export default Onis;