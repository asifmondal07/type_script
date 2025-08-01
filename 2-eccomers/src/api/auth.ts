

// Strongly-typed user data
interface ProductsData {
    id: number;
    title: string;
    price:number | string;
    description: string;      
    category: string;
    image: string|URL;
}

class AuthService {

    async getAllProducts(){

       const response= await fetch("https://fakestoreapi.com/products",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },  
       })

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        return data;
    }
    
}

const authService = new AuthService();

export default authService;
export type {  ProductsData }
