import React from 'react';
import items from '../../data/products.json'
import { useBasketDispatch, basketReducersActions } from '../../store/basket';
import { Product } from '../../types';

const Items = () => {
    const basketDispatch = useBasketDispatch()
    const addToBasket = (item: Product) => {
        basketDispatch({ type: basketReducersActions.increment, item })
    }
    const makeItems = () => {
        return items.products.map(item =>
            <div
                className={"item"}
                id={item.id.toString()}
            >
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
