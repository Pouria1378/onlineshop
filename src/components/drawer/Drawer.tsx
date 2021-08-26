import React from "react"
import { basketReducersActions, useBasketDispatch, useBasketState } from "../../store/basket"
import { DrawerProps, Item } from "../../types";
import SubTotal from "./subtotal/SubTotal";

export default function Drawer({ children }: DrawerProps) {
    let basketState = useBasketState()
    const basketDispatch = useBasketDispatch()

    const increment = (item: Item) => {
        basketDispatch({ type: basketReducersActions.increment, item })
    }
    const decrement = (item: Item) => {
        basketDispatch({ type: basketReducersActions.decrement, item })
    }
    const remove = (item: Item) => {
        basketDispatch({ type: basketReducersActions.remove, item })
    }

    const invoice = Object.values(basketState).map((item: Item) => (
        <div
            key={item.id.toString()}
            className={"item"}
        >
            <img
                src={`images/T-shirts/${item.id}.jpg`}
                alt={item.title}
            />
            <div
                className={"title"}
            >
                <span>
                    {item.title}
                </span>
                <div
                    className={"actionsWrapper"}
                >
                    <button
                        className={"decrement"}
                        onClick={() => decrement(item)}
                    >
                        -
                    </button>
                    <span
                        className={"itemQty"}
                    >
                        {item.qty}
                    </span>
                    <button
                        className={"increment"}
                        onClick={() => increment(item)}
                    >
                        +
                    </button>
                    <span
                        className={"price"}
                    >
                        {` x ${item.currencyFormat}${item.price}`}
                    </span>
                </div>
            </div>
            <span
                className={"remove"}
                onClick={() => remove(item)}
            >
                &#9747;
            </span>
        </div>
    ))


    return (
        <div id={"Drawer"}>
            {invoice.length ?
                invoice
                : <p
                    className={"noItemFound"}
                >
                    no item found!
                </p>
            }
            <SubTotal />
        </div>
    )
}

Drawer.defaultProps = {
    show: false,
    onHide: () => { },
    children: <React.Fragment />
}
