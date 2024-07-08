import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/authSlice";

const Navbar = () => {

  const navigate = useNavigate();
  const{token}= useSelector((state)=>state.auth)
  const[isLogin,setisLogin]= useState(false)
  const dispatch=useDispatch()

  useEffect(()=>{
    const localToken=localStorage.getItem('token')
    setisLogin(!!token || !!localToken)
  },[token]

)

const handleLogout=()=>{
navigate("/")
localStorage.removeItem('token')
setisLogin(false)
dispatch(setToken(null))
}

  return (
    <main className="flex ">
      <div className="w-full h-10 bg-black flex justify-start gap-[25px] p-1 text-white font-mono">
        <Link to="/">
          <FontAwesomeIcon icon={faPaw} className="mr-2" />
         <span className="font-semibold
  "> BIRDBANK</span> 
        </Link>
        <Link to="/" className="  h-8 w-20 rounded-lg text-blod">
          HOME
        </Link>
        <Link to="/about" className="  h-8 w-20 rounded-lg text-blod">
          ABOUT
        </Link>
      </div>

{isLogin? (<>
  <div className="w-full h-10 bg-black flex justify-end gap-[25px] p-1  text-white font-mono">
        <Link to="/add" className="  h-8 w-20 rounded-lg text-blod">
          ADD BIRD
        </Link>
        <Link onClick={handleLogout} className="  h-8 w-20 rounded-lg text-blod">
          LOGOUT
        </Link>
      </div>
</>):(<>
<div className="w-full h-10 bg-black flex justify-end gap-[25px] p-1  text-white font-mono">
        <Link to="/login" className="  h-8 w-20 rounded-lg text-blod">
          LOGIN
        </Link>
        <Link to="/register" className="  h-8 w-20 rounded-lg text-blod">
          REGISTER
        </Link>
      </div>
</>)}
      

      
    </main>
  );
};

export default Navbar;
