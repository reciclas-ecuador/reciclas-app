import { createContext, useState, ReactNode, useContext } from 'react'
import { User } from 'firebase/auth'
import { CenterEmployeeBody } from '../../Types'

type contextType = {
  firebaseActiveUser: User;
  setFirebaseActiveUser: ((user: User) => void);
  activeCenterEmployee: CenterEmployeeBody;
  setActiveCenterEmployee: ((centerEmployee: CenterEmployeeBody) => void);
  idToken: string;
  setIdToken: ((idToken: string) => void);
  kgCollectedToday: number;
  setKgCollectedToday: ((totalCollectedToday: number) => void);
}

const CollectionCenterContext = createContext<contextType | undefined>(undefined)

export function CollectionCenterContextProvider ({ children }: { children: ReactNode }) {
  const [firebaseActiveUser, setFirebaseActiveUser] = useState<User>({} as User)
  const [activeCenterEmployee, setActiveCenterEmployee] = useState<CenterEmployeeBody>({} as CenterEmployeeBody)
  const [idToken, setIdToken] = useState<string>('')
  const [totalCollectedToday, setTotalCollectedToday] = useState<number>(0)
  return (
    <CollectionCenterContext.Provider value={{ firebaseActiveUser, setFirebaseActiveUser, activeCenterEmployee, setActiveCenterEmployee, idToken, setIdToken, kgCollectedToday: totalCollectedToday, setKgCollectedToday: setTotalCollectedToday }}>
      {children}
    </CollectionCenterContext.Provider>
  )
}

export function useCollectionCenterContext () {
  const context = useContext(CollectionCenterContext)
  if (context === undefined) {
    throw new Error('useCollectionCenterContext must be used within a CollectionCenterContextProvider')
  }
  return context
}
