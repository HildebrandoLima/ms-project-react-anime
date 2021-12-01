import React, { Component } from 'react';
import api from './api';
import PersonagensPrincipais from './pages/PersonagensPrincipais';
import Hashiras from './pages/Hashiras';
import Onis from './pages/Onis';
import Outros from './pages/Outros';

class App extends Component {

  constructor() {
    super();
    this.state = {
      demon_slayer: []
    }
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

                <PersonagensPrincipais demon_slayer={demon_slayer} />
                <Hashiras demon_slayer={demon_slayer} />
                <Onis demon_slayer={demon_slayer} />
                <Outros demon_slayer={demon_slayer} />

            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
