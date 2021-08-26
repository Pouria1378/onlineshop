import React from "react";
// import products from "../data/products.json"
import { Item } from "../types";

const BasketState = React.createContext([])
const BasketDispatch = React.createContext((value: { type: string, item: Item }) => { })

export const basketReducersActions = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    remove: "REMOVE",
    removeAll: "REMOVEALL",
}
const invoiceReducers = (state: any, action: any) => {
    switch (action.type) {
        case basketReducersActions.increment: {
            const { id } = action.item;
            let newState
            if (state[id]) {
                newState = {
                    ...state, [id]: { ...action.item, qty: state[id].qty++ }
                }
            } else {
                newState = {
                    ...state, [id]: { ...action.item, qty: 1 }
                }
            }

            return newState;
        }
        case basketReducersActions.decrement: {
            const { id } = action.item;
            let newState
            if (state[id].qty > 0) {
                newState = {
                    ...state, [id]: { ...action.item, qty: state[id].qty-- }
                }
            } else {
                delete state[id];
                newState = { ...state }
            }

            return newState;
        }
        case basketReducersActions.remove: {
            const { id } = action.item;
            delete state[id];
            return { ...state };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}
type Props = {
    children: React.ReactNode
};
const InvoiceProvider = ({ children }: Props) => {
    const [state, dispatch] = React.useReducer(invoiceReducers, [])
    return (
        <BasketState.Provider value={state}>
            <BasketDispatch.Provider value={dispatch}>
                {children}
            </BasketDispatch.Provider>
        </BasketState.Provider>
    )
}

const useBasketState = () => {
    const context = React.useContext(BasketState)
    if (context === undefined) throw new Error('useBasketState must be used within a InvoiceProvider')
    return context
}

const useBasketDispatch = () => {
    const context = React.useContext(BasketDispatch)
    if (context === undefined) throw new Error('useBasketDispatch must be used within a InvoiceProvider')
    return context
}

export { InvoiceProvider, useBasketState, useBasketDispatch };
