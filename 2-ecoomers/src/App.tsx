
import {Header} from "./component/index"; 
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';


const App = () => {

const [loading, setLoading] = useState(true);


useEffect(() => {
  setLoading(false);
  
}, []);
  
  return  loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>

        <main className='w-full bg-white p-4'>

          <div className="flex justify-center items-center">
            <h2 className='text-2xl  font-bold'>Welcome to the App</h2>
          </div>
          
        </main>

      </div>
    </div>
  ):(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
};

export default App; 
