import React, { Component } from "react";

class Coadjuvantes extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Coadjuvantes</h2><hr /></p>
                {this.props.demon_slayer.coadjuvantes?.map(coadjuvante=>(
                <div class="col-6" key={coadjuvante}>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h3>{coadjuvante.nome}</h3><hr />
                            <p class="text-center"><img src={coadjuvante.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                            <p class="text-break">{coadjuvante.descricao}</p>
                            <p><strong>Poderes e Habilidades</strong>: {coadjuvante.habilidades ? coadjuvante.habilidades : '-'}</p>
                            <p><strong>Técnica de Respiração</strong>: {coadjuvante.respiracao ? coadjuvante.respiracao : '-'}</p>
                            <p><strong>Arte Demoníaca</strong>: {coadjuvante.arteDemoniaca ? coadjuvante.arteDemoniaca : '-'}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default Coadjuvantes;