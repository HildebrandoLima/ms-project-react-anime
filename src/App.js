import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    demon_slayer: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ demon_slayer: response.data });
  }

  render() {

    const { demon_slayer } = this.state;
    return (
        <div class="container">
          <div class="card mt-3">
            <div class="card-body">
              {demon_slayer.map(anime=>(
                <div key={anime}>
                  <h1>{anime.anime}</h1><hr />
                  <p><strong>Denominado:</strong> {anime.denominacao} | <strong>Gênero:</strong> {anime.genero}</p>

                  <div class="row">
                    <p class="text-center mt-3"><hr /><h2>Personagens Principais</h2><hr /></p>
                    {anime.personagens_principais.map(pp=>(
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
                    ))}
                  </div>

                  <div class="row">
                    <p class="text-center mt-3"><hr /><h2>Hashiras</h2><hr /></p>
                    {anime.hashiras.map(ha=>(
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
                    ))}
                  </div>

                <div class="row">
                  <p class="text-center mt-3"><hr /><h2>Onis</h2><hr /></p>
                  {anime.onis.map(on=>(
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
                  ))}
                </div>

                <div class="row">
                  <p class="text-center mt-3"><hr /><h2>Outros</h2><hr /></p>
                  {anime.outros.map(ou=>(
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
