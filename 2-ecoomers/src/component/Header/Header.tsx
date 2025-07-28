
import Container from "../Container/Container"
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import Logoutbtn from "./Logoutbtn.tsx"

const  Header = () => {

  const navigate = useNavigate();
  const authStatus = useSelector((state : any) => state.auth?.status);

  const navitems=[
    {name:"", path: "/", active: false},
    {name: "Login" , path: "/login", active: !authStatus },
    {name: "Signiup" , path: "/signup", active: !authStatus},
    {name: "Cart" , path: "/cart", active: true},
  ]

  return (
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
                className={`text-lg inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${item.active ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => {
                  if (item.active) {
                    navigate(item.path)
                  }
                }}
              >
                {item.name}
              </Link>
              ))}
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
  );
};

export default Header
