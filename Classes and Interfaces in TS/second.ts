class Product {
    public productName: string;
    protected category: string;
    private productID: string = "123";

    constructor(productName: string, category: string) {
        this.productName = productName;
        this.category = category;
    }
}

class SubCategory extends Product {
    displayData() {
        console.log(this.category);
    }
}

let shampoo = new Product("Shampoo", "Hair");
console.log(shampoo.productName);