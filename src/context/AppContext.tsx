'use client'
import { createContext, useContext, useState, FC, ReactNode } from 'react'

const AppContext = createContext({
    isMobileMenuOpen: false,
    setMobileMenuOpen: (state: boolean) => {},
})

interface IAppProviderProps {
    children: ReactNode
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <AppContext.Provider value={{ isMobileMenuOpen, setMobileMenuOpen }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
