import React, { createContext, useContext, useState } from 'react'

interface AuthenticateUserContextProps {
  user: boolean,
  setUser: any,
  actualUser: string,
  setActualUser: any
}

const AuthenticateUserContext = createContext({} as AuthenticateUserContextProps)

const AuthenticateUserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(false)
  const [actualUser, setActualUser] = useState('')
  return (
    <AuthenticateUserContext.Provider value={{ user, setUser, actualUser, setActualUser }}>
      {children}
    </AuthenticateUserContext.Provider>
  )
}

export const useAuthenticate = () => useContext(AuthenticateUserContext)
export default AuthenticateUserContextProvider
