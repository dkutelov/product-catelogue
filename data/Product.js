class Product {
    constructor(name, price, description, imageUrl) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.productVariations = []
    }

    addProductVariation(productVariation) {
        this.productVariations = [...this.productVariations, productVariation]
    }
}

class ProductVariation {
    constructor(name, imageUrl, price) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}


export default Product