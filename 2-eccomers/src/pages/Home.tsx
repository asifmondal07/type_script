import authService from "../api/auth"
import { useEffect, useState } from 'react';
import { Container,PostCart } from "../component";
import type { ProductsData } from "../api/auth";

function Home() {
  
    const [products, setProducts] = useState<ProductsData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  

    
        useEffect(() => {
            setLoading(true);
            setError("");
            authService.getAllProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            }).catch((err:any) => {
                setError("Failed to fetch products");
                console.error(err);
                setLoading(false);
            });
        },[]);
    
  if (loading) {
    return (
      <div className="w-full py-20 text-center text-lg font-medium">
        Loading products...
      </div>
    );
  }

     if (error) {
    return (
      <div className="w-full py-20 text-center text-red-600 text-lg">
        {error}
      </div>
    );
  }
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
