export interface IDataItem {
    title: string,
    href: string,
}

export type IDataArray = IDataItem[]

export interface INavLink {
    title: string,
    href: string,
    onClick?: () => void,
}

export type INavLinks = INavLink[]
