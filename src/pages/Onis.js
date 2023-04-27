import React, { Component } from 'react';

class Onis extends Component {
    render () {
        return (
            <div class="row">
                <p class="text-center mt-3"><hr /><h2>Onis</h2><hr /></p>
                {this.props.demon_slayer.onis?.map(oni=>(
                <div class="col-6" key={oni}>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h3>{oni.nome}</h3><hr />
                            <p class="text-center"><img src={oni.imagem} alt="img-person" width="30%" heigth="30%" /></p>
                            <p>{oni.titulo}</p>
                            <p class="text-break">{oni.descricao}</p>
                            <p><strong>Arte Demoníaca</strong>: {oni.arteDemoniaca ? oni.arteDemoniaca : '-'}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default Onis;