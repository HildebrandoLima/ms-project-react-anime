import React, { Component } from "react";

class Protagonistas extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Protagonistas</h2><hr /></p>
                {this.props.demon_slayer.protagonistas?.map(protagonista=>(
                <div class="col-6" key={protagonista}>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h3>{protagonista.nome}</h3><hr />
                            <p class="text-center"><img src={protagonista.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                            <p class="text-break">{protagonista.descricao}</p>
                            <p><strong>Poderes e Habilidades</strong>: {protagonista.habilidades ? protagonista.habilidades : '-'}</p>
                            <p><strong>Técnica de Respiração</strong>: {protagonista.respiracao ? protagonista.respiracao : '-'}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default Protagonistas;