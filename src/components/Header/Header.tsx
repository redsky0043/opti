'use client'
import { navLinks } from '@/data/data'
import {INavLink} from "@/types/types"
import { Burger } from "@/components/Burger/Burger"
import { useAppContext } from "@/context/AppContext"
import {NavLink} from "@/components/NavLink/NavLink"
import SpriteIcon from "@/components/SpriteIcon/SpriteIcon"

export const Header = () => {
    const { isMobileMenuOpen } = useAppContext()

    return (
        <header className={`header ${isMobileMenuOpen ? 'is-menu-opened' : ''}`}>
            <div className="container">
                <div className={`header__overlay ${isMobileMenuOpen ? 'is-menu-opened' : ''}`}></div>
                <div className="header__wrapper">
                    <a className="header__logo" href="/">
                        <SpriteIcon name='logo' className='header__img' />
                    </a>
                    <div className="header__nav">
                        <nav className="nav">
                            <ul className="nav__list">
                                {navLinks.map(({ title, href }: INavLink) => (
                                    <NavLink
                                        key={title}
                                        href={href}
                                        title={title}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <a className="button button--header header__button" href="/#contacts">
                        Get started
                    </a>
                    <div className="header__burger">
                        <Burger />
                    </div>
                </div>
            </div>
        </header>
    )
}
