// Centralized user context for managing user state across the application
import React, { createContext, useState, useEffect } from 'react';

export const UserDataContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        },
    });
  return (
    <div>
        <UserDataContext.Provider value= {[user, setUser]}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
