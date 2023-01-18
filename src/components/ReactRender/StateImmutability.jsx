import React, { useState } from 'react';

const initialState = {
  fname: 'Bruce',
  lname: 'Wayne',
}

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    // person.fname = 'Clark'
    // person.lname = 'Kent'
    // seterson(person)

    const newPerson = {...person}
    newPerson.fname = 'Clark'
    newPerson.lname = 'Kent'
    setPerson(newPerson);
  };
}