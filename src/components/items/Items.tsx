import React from 'react';
import items from '../../data/products.json'
import { useBasketDispatch, basketReducersActions } from '../../store/basket';

const Items = () => {
    const basketDispatch = useBasketDispatch()
    const addToBasket = (item: any) => {
        basketDispatch({ type: basketReducersActions.increment, item })
        return 1;
    }
    const makeItems = () => {
        return items.products.map(item =>
            <div className={"item"}>
                <article>
                    <img
                        src={`images/T-shirts/${item.id}.jpg`}
                        alt={item.title}
                    />
                    <span>{item.title}</span>
                    <p>{item.price}</p>
                </article>
                <button
                    className={"addToBasketButton"}
                    onClick={() => addToBasket(item)}
                >
                    Add to basket
                </button>
            </div>
        )
    }


    return (
        <div className="Items">
            <div className={"items-wrapper"}>
                {makeItems()}
            </div>
        </div>
    );
}

export default Items;
