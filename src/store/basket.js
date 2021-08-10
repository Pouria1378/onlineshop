import React from "react";

const BasketState = React.createContext({})
const BasketDispatch = React.createContext(undefined)

export const basketReducersActions = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    remove: "REMOVE",
    removeAll: "REMOVEALL",
}
const invoiceReducers = (state, action) => {
    switch (action.type) {
        case basketReducersActions.increment: {
            const { id } = action.item;
            const newState = {
                ...state, [id]: action.item
            }
            return newState;
        }
        case basketReducersActions.decrement: {
            const { id } = action;
            delete state[id];
            return { ...state };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const InvoiceProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(invoiceReducers, {})
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
