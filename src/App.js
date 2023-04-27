import React, { Component } from 'react';
import api from './api';
import Protagonistas from './pages/Protagonistas';
import Hashiras from './pages/Hashiras';
import Onis from './pages/Onis';
import Coadjuvantes from './pages/Coadjuvantes';

class App extends Component {

  constructor() {
    super();
    this.state = {
      demon_slayer: []
    }
  }

  async componentDidMount() {
    const response = await api.get('demon-slayer/');
    this.setState({ demon_slayer: response.data.data });
  }

  render () {
    const { demon_slayer } = this.state;
    return (
      <div class="container">
        <div class="card mt-3">
          <div class="card-body">
            <div>
              <h1>{demon_slayer.anime}</h1><hr />
                <p><strong>Denominado:</strong> {demon_slayer.denominacao} | <strong>Gênero:</strong> {demon_slayer.genero}</p>
                <Protagonistas demon_slayer={demon_slayer} />
                <Hashiras demon_slayer={demon_slayer} />
                <Onis demon_slayer={demon_slayer} />
                <Coadjuvantes demon_slayer={demon_slayer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
