import { useDispatch } from "react-redux"
import {logout} from "../../store/authSlice.ts"

function Logoutbtn() {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default Logoutbtn
