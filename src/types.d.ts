export type Item = {
    availableSizes: string[],
    currencyFormat: string,
    currencyId: string,
    description: string,
    id: number,
    installments: number,
    isFreeShipping: boolean,
    price: number,
    sku: number,
    style: string,
    title: string,
    qty: number
}

export type ItemsContextState = {
    products: Product[]
};



export type DrawerProps = {
    children: any
}
