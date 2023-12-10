import Link from 'next/link'
import { socials } from "@/data/data"
import SpriteIcon from "@/components/SpriteIcon/SpriteIcon"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__intentify">
                        <a className="footer__logo" href="/">
                            <SpriteIcon name='logo' className='header__img' />
                        </a>
                        <p className="footer__rules">
                            ©2023 All rights reserved.
                        </p>
                    </div>
                    <div className="footer__connection">
                        <a className="underline footer__contact" href="mailto:info@humoney.com">
                            info@humoney.com
                        </a>
                        <a className="underline footer__contact" href="tel:+38 050 000 00 00">
                            +38 050 000 00 00
                        </a>
                    </div>
                    <div className="footer__socials">
                        <ul className="socials">
                            {socials.map(({ title, href }) => (
                                <li key={title} className="socials__item">
                                    <a className="socials__link" target="_blank" rel="nofollow" href={href}>
                                        <SpriteIcon name={title} className='socials__icon' />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <Link href='privacy-policy' className="footer__policy underline">
                            Privacy policy
                        </Link>
                        <Link href='terms-of-use' className="footer__policy underline">
                            Terms of use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
