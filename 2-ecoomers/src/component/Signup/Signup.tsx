
import { Link } from "react-router-dom";
import { useForm,  } from 'react-hook-form';
import { Buttons, Input } from "../index";


const Signiup = () => {
        const { register, handleSubmit } = useForm();
    
  return (
    
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}> 
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>

            {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}

            <form  className='mt-8'>
            <div className='space-y-5'>
                <Input
                    label="Enter Name: "
                    placeholder="Enter your Name"
                    type="text"
                    {...register("name", {
                        required: true,
                        
                    })}
                />
                <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="text"
                    {...register("email", {
                        required: true,
                        
                    })}
                />
                <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                />
                <Buttons
                    type="submit"
                    className="flex items-center justify-center  hover:bg-blue-400"
                    ButtonText="Sign Up"
                ></Buttons>
            </div>
        </form>
        </div>
    </div>
  )
  
}


export default Signiup;