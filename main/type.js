"use strict";
function getProductDetails(product) {
    return `Product Name: ${product.name}, Price: ${product.price}, Description: ${product.description}`;
}
let product1 = {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "A high-performance laptop for gaming and work.",
    imageUrl: "http://example.com/laptop.jpg",
    category: "Electronics"
};
console.log(getProductDetails(product1));
