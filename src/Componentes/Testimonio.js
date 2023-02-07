import React from 'react'
/*
export const Testimonio = () => {
  return (
    <div>Testimonio</div>
  )
}
*/

export function Testimonio(props){
    return(
        <div className = "contenedor-testimonio">
             <img className='imagen-testimonio' src={require(`../Imagenes/testimonio-${props.idImg}.jpg`)} alt='Opinion 1'/>
             <div className="contenedor-testimonio-texto">
                <p className='nombre-testimonio'>{props.nombre} en {props.ubicacion}</p>
                <p className='cargo-testimonio'>{props.cargo}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
             </div>
        </div>
    );
}