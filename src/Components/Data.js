import React, { useState } from 'react'

function Data() {
    const [contact, setContact] = useState( {
        name: "Sammy",
        age: 21,
        email: "sammymureithi20@gmail.com",
        isFavaorite: true
    } );
    function toggleFavourite() {
        setContact( prevState => {
            return {
                ...prevState,
                isFavaorite:!prevState.isFavaorite
          }  
        })
    }
  return (
      <div>
          <h1>{contact.name}</h1>
          <h1>Age {contact.age}</h1>
          <h2>Email: {contact.email}</h2>
          <h1 onClick={toggleFavourite}>{contact.isFavaorite? "Favourite❤️":"Dislike💔" }</h1>
    </div>
  )
}

export default Data