
import Container from "../Container/Container"
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import Logoutbtn from "./Logoutbtn.tsx"
import { useState } from "react";
import {Cart} from "../index.ts";


const  Header = () => {

  const navigate = useNavigate();
  const authStatus = useSelector((state : any) => state.auth?.status);
  const count = useSelector((state:any) => state.auth.products.length);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navitems=[
    {name:"", path: "/", active: false},
    {name: "Login" , path: "/login", active: !authStatus },
    {name: "Signiup" , path: "/signup", active: !authStatus},
    
  ]

  return (
    <>
    <header className="bg-gray-800 text-white p-5">
      <Container>
        <div className='flex justify-between items-center '>
            <Link to={"/"}
            className="text-3xl rounded-full border-5 border-amber-400 w-15 h-15" >O_</Link>
            <nav className='flex space-x-4'>
              {
                 navitems
            .filter((item:any) => item.active)
            .map((item :any) =>(
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition ${item.active ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => {
                  if (item.active) {
                    navigate(item.path)
                  }
                }}
              >
                {item.name}
              </Link>
              ))}

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
              >
                Cart
                {count > 0 && (
                  <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </button>

              {authStatus && 
              (
                <button className="text-lg text-red-500" onClick={()=>{
                          navigate("/login")
                }}>
                <Logoutbtn/>
                </button>
              )
              }

            </nav>
        </div>
        
      </Container>
    </header>
    {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  </>
  );
};

export default Header
