interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category?: string;
}

function getProductDetails(product: Product): string {
    return `Product Name: ${product.name}, Price: $${product.price}, Description: ${product.description}, 
    Image URL: ${product.imageUrl}, Category: ${product.category ? product.category : "Not specified"}`;
}


let product1: Product = {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "A high-performance laptop for gaming and work.",
    imageUrl: "http://example.com/laptop.jpg",
    category: "Electronics"
};

// console.log(getProductDetails(product1))
function sumMath(a: number, b: number): number {
    let sum=a + b;
    return sum;
}
console.log(sumMath(5, 10));
