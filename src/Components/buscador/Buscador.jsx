import React, { useState } from 'react';
import './buscador.css';

const Buscador = ({ contacts, setFilteredContacts }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = contacts.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  return (
    <form onSubmit={handleSearch} className="divBuscar">
      <input
        type="text"
        id="buscador"
        className="buscador"
        placeholder="Busque un contacto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="buscar">Buscar</button>
    </form>
  );
};

export default Buscador;
