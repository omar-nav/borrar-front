import React, { Component } from 'react';
import './Tarjeta.css';
class Tarjeta extends Component {
    render(){
        const { nombre, img } = this.props;
        return(
            <div className="Tarjeta">
                <div className="contenido">
                    <p>{nombre}</p>
                    <img className="imagen" src={img}/>
                </div>
            </div>
        )
    }
}
export default Tarjeta;