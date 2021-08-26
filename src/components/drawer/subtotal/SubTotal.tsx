import React from "react"
import { useBasketState } from "../../../store/basket"
import { Item } from "../../../types";


export default function SubTotal() {
    let basketState = useBasketState()

    const subtotalValue = () => {
        let some
        some = Object.values(basketState).reduce((total: number, num: Item) =>
            num.price * num.qty + total, 0)
        return some.toFixed(2)
    }

    return (
        <div id={"SubTotalSection"}>
            <div className={"subtotal"}>
                <span>
                    subtotal :
                </span>

                <span>
                    {`$${subtotalValue()}`}
                </span>
            </div>
            <button
                className={"checkOutButoon"}
                onClick={() => alert(subtotalValue())}
            >
                check out !
            </button>
        </div>
    )
}

SubTotal.defaultProps = {

}
