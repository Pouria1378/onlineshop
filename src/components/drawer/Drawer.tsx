import React from "react"
import { basketReducersActions, useBasketDispatch, useBasketState } from "../../store/basket"
import { Item } from "../../types";
import SubTotal from "./subtotal/SubTotal";

export default function Drawer() {
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

    const toggleShowBasket = () => {
        const width = document.getElementById("Drawer")?.style.width
        if (width === "0px" || width === "") {
            document.getElementById("Drawer")!.style.width = "300px"
        } else {
            document.getElementById("Drawer")!.style.width = "0px"
        }
    }

    document.addEventListener("click", function (e: any) {
        if (!e.target.closest("#DrawerSection, .addToBasketButton, .actionsWrapper, .item") &&
            document.getElementById("Drawer")!.style.width !== "0px") {
            document.getElementById("Drawer")!.style.width = "0px"
        }
    })

    return (
        <div id={"DrawerSection"}>
            <div
                className={"addToBasketIconWrapper"}
            >
                <img
                    onClick={() => toggleShowBasket()}
                    src={"images/icons/shopping-cart.svg"}
                    alt={"addToBasket"}
                />

                {Object.keys(basketState)?.length !== 0 &&
                    <span
                        className={"basketStateLength"}
                    >
                        {Object.keys(basketState).length}
                    </span>
                }

            </div>
            <div
                id={"Drawer"}
                className={"Drawer"}
            >
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
        </div>
    )
}
