import React from 'react'
import './listmsgs.css'

const MessagesList = ({ messages, contactId }) => {
    if (!messages || messages.length === 0) {
        return (
            <div>
                <span>Aun no has chateado, envia un mensaje para hacerlo</span>
                <hr />
            </div>
        )
    }

    return (
        <div>
            {messages.map((message) => {
                const isMine = Number(message.author_id) !== Number(contactId)
                const cls = `message ${isMine ? 'message--mine' : 'message--other'}`
                return (
                    <div className={cls} key={message.id}>
                        <div className="message-meta">
                            <h3>{message.author_name}</h3>
                            <span className="span">{message.created_at}</span>
                        </div>
                        <div className="message-bubble">{message.content}</div>
                        <div className="message-status">
                            {message.status === 'VIEWED' ? <span className='span'>- Leido</span> : <span className='span'>- No leido</span>}
                        </div>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}

export default MessagesList