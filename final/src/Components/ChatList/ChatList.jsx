import { Link } from 'react-router-dom';
import AddNewContact from '../AddNewContact/AddNewContact';
import './chatlist.css';
import Buscador from '../buscador/Buscador';
import { useEffect, useState } from 'react';

const ChatList = ({ contacts, addNewContact }) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  // Actualiza filteredContacts si contacts cambian (cuando agregas)
  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <div>
      <AddNewContact addNewContact={addNewContact} />
      <Buscador contacts={contacts} setFilteredContacts={setFilteredContacts} />

      {filteredContacts.map((contact) => (
        <div className="chat-list" key={contact.id}>
          <Link to={'/chat/' + contact.id}>
            <img width={'50px'} src={contact.profile_picture} alt={contact.name} />
            <h2>{contact.name}</h2>
            <span>Última conexión: {contact.last_connection}</span>
          </Link>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ChatList;
