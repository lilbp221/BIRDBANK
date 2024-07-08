import React from 'react'
import Loginform from '../components/Loginform'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/authSlice'

const Loginpage = () => {
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const {status,token}= useSelector((state)=>state.auth)

  const handleSubmit = async (data) => {
   
    //without state management
//     try {
//       const response= await axios.post('https://react30.onrender.com/api/user/login',data)

// if(response.status===200)
//   {
//     localStorage.setItem('token',response.data.token)
// navigate('/')
//   }
//     } catch (error) {
//       alert(error?.response?.data?.message)
//     }

console.log(status)
console.log(token)
dispatch(login(data))
if(status==="SUCCESS")
  {

    navigate('/')
  }
  else{
    navigate('/login')
  }

  }
  return (

    <Loginform type="Login" onSubmit={handleSubmit}/>
  )
}

export default Loginpage