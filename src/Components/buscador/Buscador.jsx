import React from 'react'
import './buscador.css'
const Buscador = () => {
  return (
    <>
    <div className="divBuscar">

        <input type="text" id='buscador' className='buscador' placeholder='Busque un conacto'/>
        <button className='buscar'>Buscar</button>
    </div>
    </>
  )
}

export default Buscador