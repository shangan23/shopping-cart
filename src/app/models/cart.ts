export class Cart {
    id: number;
    title: string;
    quantity: number;
    price: number;

    constructor(id, title, price, quantity) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.price = price;
    }
}
