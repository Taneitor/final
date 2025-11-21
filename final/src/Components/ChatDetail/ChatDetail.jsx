
import MessagesList from '../MessagesList/MessagesList'
import CreateNewMessage from '../CreateNewMessage/CreateNewMessage'
import './chatdetail.css'

const ChatDetail = ({chatDetail, createNewMessage}) => {

    return (
        <div className='chatdetail'>
            <h2>{chatDetail.name}</h2>
            <MessagesList messages={chatDetail.messages} contactId={chatDetail.user_id} />
            <CreateNewMessage createNewMessage={createNewMessage} />
        </div>
    )
}

export default ChatDetail