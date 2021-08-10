import React from 'react';
import items from '../../data/products.json'

const Items = () => {
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
                <button className={"addToBasketButton"}>Add to basket</button>
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
