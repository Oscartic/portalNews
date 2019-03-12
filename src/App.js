import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = categoria => {

    console.log(categoria);

    let url = 'https://newsapi.org/v2/top-headlines?country=co&category=general&apiKey=75d097932b2b4691b12511fc0eb457a6';
    
    fetch(url)
    .then(resupesta => {
      return resupesta.json();
    })
    .then( noticias => {
      // console.log(noticias.articles)
      this.setState ({
        noticias: noticias.articles
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          titulo = 'Portal de noticias'
        />
        <div className="container white contenedor-noticias">

          <Formulario 
            consultarNoticias = { this.consultarNoticias }
          />

          <Noticias 
            noticias = { this.state.noticias }
          />
        </div>
      </div>
    );
  }
}

export default App;
