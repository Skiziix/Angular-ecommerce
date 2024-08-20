export class Product {
    quantity: number = 0;

    constructor(public name: String,
                public price: number,
                public image: String,
                public sale: boolean) {}
}
