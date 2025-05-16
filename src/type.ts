interface product{
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
}

function getProductDetails(product: product): string {
    return `Product Name: ${product.name}, Price: ${product.price}, Description: ${product.description}`;
}


let product1: product = {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "A high-performance laptop for gaming and work.",
    imageUrl: "http://example.com/laptop.jpg",
    category: "Electronics"
};

console.log(getProductDetails(product1))
