'use client'
import { navLinks } from "@/data/data"
import { INavLink } from "@/types/types"
import { useAppContext } from "@/context/AppContext"
import { NavLink } from "@/components/NavLink/NavLink"

export const Mobile = () => {
    const { isMobileMenuOpen, setMobileMenuOpen } = useAppContext()

    return (
        <div className={`mobile-navigation ${isMobileMenuOpen ? 'is-opened' : ''}`} id='mobile-navigation'>
            <div className="mobile-navigation__wrapper">
                <div className="mobile-navigation__nav">
                    <nav className="nav nav--mobile">
                        <ul className="nav__list">
                            {navLinks.map(({ title, href }: INavLink) => (
                                <NavLink
                                    key={title}
                                    href={href}
                                    title={title}
                                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <a
                    href='/#contacts'
                    className="button button--blue"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    Get started
                </a>
            </div>
        </div>
    )
}
