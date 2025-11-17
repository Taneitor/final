import React from 'react'
import './listmsgs.css'

const MessagesList = ({messages}) => {
    return (
        <div>
            {
            messages.length === 0
            ? <span>Aun no has chateado, envia un mensaje para hacerlo</span>
            : messages.map(
                (message) => {
                    return <div className='flexbox'>
                        <h3>{message.author_name}</h3>
                        <p>{message.content}</p>
                        <span className='span'>{message.created_at}</span>
                        <span>
                            {
                                message.status === 'VIEWED'
                                ? <span className='span'>- Leido</span>
                                : <span className='span'>- No leido</span>
                            }
                        </span>
                    </div>
                }
            )
            }
            <hr/>
        </div>
    )
}

export default MessagesList