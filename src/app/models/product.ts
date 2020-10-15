export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;

    constructor(id, title, description, price, image = 'https://www.iwpawood.org/global_graphics/default-store-350x350.jpg') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
