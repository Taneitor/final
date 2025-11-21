import React from 'react'
import './crearmsg.css'
const CreateNewMessage = ({createNewMessage}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value
        createNewMessage(message_value)
        //Limpia los campos del formulario
        formulario.reset()
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='mandar-msg'>
            <textarea name='message' id='message' placeholder='Ingrese el mensaje' />
        <button className='button' type='submit'> Enviar </button>
        </div>
    </form>
  )
}

export default CreateNewMessage