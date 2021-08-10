import React from "react"

interface DrawerProps {
    show: boolean,
    onHide: () => {},
    children: any
}

export default function Drawer({ show, onHide, children }: DrawerProps) {
    return (
        <div className={`${show ? 'show' : 'hide'}`}>
            {children}
        </div>
    )
}

Drawer.defaultProps = {
    show: false,
    onHide: () => { },
    children: <React.Fragment />
}
