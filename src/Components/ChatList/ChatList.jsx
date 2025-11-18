
import { Link } from 'react-router'
import AddNewContact from '../AddNewContact/AddNewContact'
import Chatscreen from '../../Screens/ChatScreen/ChatScreen'
import './chatlist.css'
const ChatList = ({ contacts, addNewContact }) => {
    return (
        
        <div>
            {
                contacts.map(
                    (contact) => {
                        return (
                            <>
                            
                                <div className="chat-list">
                                <Link to={'/chat/' + contact.id} key={contact.id}>
                                    <img width={'50px'} src={contact.profile_picture} />
                                    <h2>{contact.name}</h2>
                                    <span>Ultima conexion: {contact.last_connection}</span>
                                </Link>
                                <br />
                                <hr/>
                                
                                </div>
                            </>
                        )
                    }
                )
            }
            
            <AddNewContact addNewContact={addNewContact} />
        </div>
    )
}

export default ChatList