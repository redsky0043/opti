'use client'
import {useAppContext} from "@/context/AppContext";


export const Overlay = () => {
    const { isMobileMenuOpen, setMobileMenuOpen } = useAppContext()

    return (
        <div
            className={`overlay ${isMobileMenuOpen ? 'is-opened' : ''}`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
    )
}
