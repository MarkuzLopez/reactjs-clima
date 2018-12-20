import React, { Component } from "react";
import PropTypes from 'prop-types';

class Formulario extends Component {
  
    //declarar las variables  
    cuidadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();
        /// leer los refs(variable) y crear el objeto 
        const respuesta = { 
            cuidad: this.cuidadRef.current.value, 
            pais: this.paisRef.current.value
        }
        
        // enviar por propsps
         this.props.datosConsulta(respuesta);

        //opcional resetear el formulario
    }

    render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima} >
              <div className="input-field col s12 m8 l4 offset-m2">
                <input type="text" id="cuidad" ref={this.cuidadRef} />
                <label htmlFor="cuidad">Cuidad: </label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef} >
                  <option value="" defaultValue>
                    Elige un pais:  
                  </option>
                  <option value="AR">Argentina</option>
                  <option value="CO">COLOMBIA</option>
                  <option value="CR">COSTA RICA</option>
                  <option value="ES">ESPAÑA </option>
                  <option value="US">ESTADOS UNIDOS </option>
                  <option value="MX">MEXICO </option>
                  <option value=" PE">PERU </option>
                </select>
                <label htmlFor="pais">Pais: </label>                
              </div>
              <div className="input-field col s12 m8 l4 offset-2 buscador">
                  <input type="submit" className="waves-effect waves-light 
                    btn-large green accent-4" value="Buscar..."
                  />
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = { 
    datosConsulta: PropTypes.func.isRequired
}

export default Formulario;
