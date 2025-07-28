import authService from "../api/auth"
import { useEffect, useState } from 'react';
import { Container,PostCart } from "../component";
import type { ProductsData } from "../api/auth";

function Home() {
    const [products, setProducts] = useState<ProductsData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
        useEffect(() => {
            console.log("Fetching products...");
            authService.getAllProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            }).catch((err:any) => {
                setError("Failed to fetch products");
                console.error(err);
                setLoading(false);
            });
        }, []
    );
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
         {products.map((product) => (
                <div key={product.id} className='p-2 w-1/4'>
                <PostCart {...product} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
