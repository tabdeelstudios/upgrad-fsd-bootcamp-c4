var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(productName, category) {
        this.productID = "123";
        this.productName = productName;
        this.category = category;
    }
    return Product;
}());
var SubCategory = /** @class */ (function (_super) {
    __extends(SubCategory, _super);
    function SubCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubCategory.prototype.displayData = function () {
        console.log(this.category);
    };
    return SubCategory;
}(Product));
var shampoo = new Product("Shampoo", "Hair");
console.log(shampoo.productName);
