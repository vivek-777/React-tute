import React, { Component } from 'react';
import ComponentC from './ComponentC';

export const UserContext = React.createContext('Peter');

class UserContextComponent extends Component {
  render() {
    return (
      <UserContext.Provider value={'peter'}>
        <ComponentC />
      </UserContext.Provider>
    )
  }
}

export default UserContextComponent;