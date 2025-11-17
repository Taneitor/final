import React from 'react'
import './addnewcontact.css'

const AddNewContact = ({ addNewContact }) => {
    const handleSubmitNewContactForm = (event) => {
  event.preventDefault()
  const formulario = event.target
  const name_value = formulario.name.value
  if(!name_value) return;

  addNewContact(name_value)

  formulario.reset() // limpia el input

        
    } 
  return (
    <>
    <form onSubmit={handleSubmitNewContactForm}>  
        <div className='contenedorform'>
            <label htmlFor='name' className='nombre'>Nombre: </label>
            <input name='name' id='name' placeholder='nombre del contacto' className='input'/>
            <button type='submit' className='button'>Crear contacto</button>
        </div>
    </form>
    <hr />
    </>
  )
}

export default AddNewContact