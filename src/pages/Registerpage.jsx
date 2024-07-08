import React from 'react'
import Loginform from '../components/Loginform'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/authSlice'

const Registerpage = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {status}= useSelector((state)=>state.auth) //useSelector hook is a callback function
  
  const handelSubmit=async(data)=>{

//without satte management
// const response= await axios.post('https://react30.onrender.com/api/user/register',data)
// if(response.status===201)
//   {
// navigate ('/login')
//   }

//with state management
console.log(status)
dispatch(register(data))
if(status==='SUCCESS')
  {
    navigate('/login')
  }
  else{
    navigate('/register')

  }



}

  return (
    <Loginform type="Register" onSubmit={handelSubmit}/>
  )
}

export default Registerpage