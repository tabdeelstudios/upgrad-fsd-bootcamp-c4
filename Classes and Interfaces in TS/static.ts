class Products {
    static productName: string;

    static {
        this.productName = "Snsns";
    }
}

Products.productName = "Shampoo";
console.log(Products.productName);