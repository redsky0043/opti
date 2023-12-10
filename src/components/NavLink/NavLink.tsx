import { FC } from "react"
import { INavLink } from "@/types/types"

export const NavLink: FC<INavLink> = ({
    title,
    href,
    onClick
}) => {
    return (
        <li onClick={onClick} className="underline nav__item">
            <a className="nav__link" href={href}>
                {title}
            </a>
        </li>
    )
}
