import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';


class App extends Component {

  state = { 
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta) { 
      this.consultarApi();
    }
  }

  componentDidMount() {
    this.setState({ 
      error: false
    })
  }

  consultarApi = () => { 
    const {cuidad, pais} =  this.state.consulta;
    if(!cuidad || !pais) return null;

    // leer la url y agregar el API key

    const appId = '98b6e2ba6735856c17ef9d93b2be27a3';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${appId}`;
    console.log(url);

    //query con fetch api consulta 
    fetch(url)
      .then(respuesta => { 
        return respuesta.json();
      })
      .then(datos => { 
        this.setState({ 
          resultado: datos
        })
      })
      .catch(error => { 
        console.log(error);
      })
  }

  datosConsulta =  respuesta => { 
    if(respuesta.cuidad === '' || respuesta.pais === '' ) { 
      this.setState({ 
        error: true
      }) 
    } else { 
      this.setState({ 
        consulta: respuesta,
        error: false
      })
    }    
  }

  render() {

      const {error} = this.state.error,
            {cod} =  this.state.resultado;
      
      let resultado; 

      if(error) { 
        resultado = <Error mensaje="Ambos campos son obligatorios" />
      } else if(cod === "404") {
        resultado = <Error mensaje="Cuidad No Encontrada" />
      }
      else { 
        resultado = 
        < Clima 
          resultado = {this.state.resultado}
        />
      }

    return (
      <div className="App">
         <Header 
          titulo = 'Aplicacion Clima React'
         />
         <Formulario 
           datosConsulta = {this.datosConsulta} 
         />
         {resultado} 
      </div>
    );
  }
} 

export default App;
