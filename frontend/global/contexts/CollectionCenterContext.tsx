import { createContext, useState, ReactNode, useContext } from 'react'

type contextType = {
  activeUser: string;
  setActiveUser: ((user: string) => void);
  currentCenterId: string;
  setCurrentCenterId: ((centerId: string) => void);
}

const CollectionCenterContext = createContext<contextType | undefined>(undefined)

export function CollectionCenterContextProvider ({ children }: { children: ReactNode }) {
  const [activeUser, setActiveUser] = useState<string>('')
  const [currentCenterId, setCurrentCenterId] = useState<string>('')
  return (
    <CollectionCenterContext.Provider value={{ activeUser, setActiveUser, currentCenterId, setCurrentCenterId }}>
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
