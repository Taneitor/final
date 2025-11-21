/* src/data/contacts_data.js */

const contacts = [
    {
        id: 1,
        user_id: 1,
        name: 'Jorge',
       /* profile_picture: 'https://i.etsystatic.com/52946191/r/il/20ab0d/6269485703/il_794xN.6269485703_jno8.jpg',*/
        profile_picture: 'https://i.etsystatic.com/47537493/r/il/858f79/7409293765/il_794xN.7409293765_n7uf.jpg',
        last_connection: 'hoy 14:50',
        is_connected: false,
        messages: [
            {
                id: 1,
                content: 'Hola que tal',
                author_id: 1,
                author_name: "Jorge",
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
  },
  {
        id: 2,
        user_id: 2,
        name: 'Mariela',
        profile_picture: 'https://i.etsystatic.com/52946191/r/il/20ab0d/6269485703/il_794xN.6269485703_jno8.jpg',
        last_connection: 'hoy 16:50',
        is_connected: false,
        messages: [
            {
                id: 2,
                content: 'Todo bien',
                author_id: 2,
                author_name: "Mariela",
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
  }
]

export default contacts