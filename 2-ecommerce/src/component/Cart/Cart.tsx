import { useDispatch,useSelector } from "react-redux";
import { X } from "lucide-react";
import { removeFromCart } from "../../store/authSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function Cart({ isOpen, onClose }: Props) {
  const products = useSelector((state: any) => state.auth.products);
    const dispatch = useDispatch();
   
    const handleRemoveFromCart = (productId: number) => {
         dispatch(removeFromCart(productId));
    }


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 flex justify-center items-center z-50">

      {/* Modal Container */}
      <div className="bg-amber-50 rounded-xl p-6 w-[90%] max-w-lg relative shadow-xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold mb-4 text-center">Your Cart</h2>

        {/* Cart Content */}
        {products.length > 0 ? (
            <div className="space-y-4 max-h-80 overflow-y-auto">
                {products.map((product: any,index:number) => (
                <div
                key={`${product.id}-${index}`}
                    className="border p-3 rounded-md flex items-center gap-4"
                >
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                handleRemoveFromCart(product.id);
                            }}
                            className="text-red-500 hover:text-red-700 "
                        >
                            Remove
                        </button>
                    </div>
                </div>
                ))}
                <div>
                    <p className="text-lg font-semibold text-center">
                        Total: ${products.reduce((total: number, product: any) => total + 
                        (typeof product.price === 'number' ? product.price : parseFloat(product.price)), 0).toFixed(2)}
                    </p>
                    <button 
                       
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Checkout
                     </button>
                </div>
            </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
