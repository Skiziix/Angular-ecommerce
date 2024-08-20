export class Product {
    quantity: Number = 0;

    constructor(public name: String,
                public price: Number,
                public image: String,
                public sale: boolean) {}
}
