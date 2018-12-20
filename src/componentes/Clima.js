import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component{ 

    mostrarResultado = () => {
 console.log('se llama la funcion');
 
        /// obtener los datos de la consulta 

        const {name, weather, main } =  this.props.resultado;
        if(!name || !weather || !main) return null; 
        // constante para kelvin
        const kelvin = 273.15;
        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `clima de ${name}`
        return (
           <div className="row" >
             <div className="resultado col s12 m8 l6 offset-m2 offset-13" >
                <div className="card-panel light-blue align-center">
                    <span className="white-text">
                        <h2>Resultado de clima de: {name} </h2>
                        <p className="temperatura">
                            Actual:{ (main.temp - kelvin).toFixed(2) } &deg;C
                            <img src={urlIcono} alt={alt} /> 
                        </p>
                        <p>MAX. {main.temp_max - kelvin} &deg;C </p>
                        <p>MIN. {main.temp_min - kelvin} &deg;C </p>
                    </span>
                </div>
             </div>
           </div>
        )
    }

    render() {                     
        return( 
            <div className="container">
                { this.mostrarResultado() }
            </div>
        )
    }
}

Clima.proptypes = { 
    resultado: PropTypes.object.isRequired
}

export default Clima;