import React, { useEffect } from "react"
import { useBasketState } from "../../store/basket"
import { Item } from "../../types";

interface DrawerProps {
    show: boolean,
    onHide: () => {},
    children: any
}

export default function Drawer({ show, onHide, children }: DrawerProps) {
    let basketState = useBasketState()
    useEffect(() => {
        console.log('====================================');
        console.log(basketState);
        console.log('====================================');
    }, [basketState])

    const invoice = Object.values(basketState).map((item: Item) => <p>{item.title}</p>)

    return (
        <div className={`${show ? 'show' : 'hide'}`}>
            {invoice}
        </div>
    )
}

Drawer.defaultProps = {
    show: false,
    onHide: () => { },
    children: <React.Fragment />
}
