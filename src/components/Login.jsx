import React, { useState } from 'react'

const Login = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        
      
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}
        className="w-80 p-5 rounded-md shadow-lg border-2 border-black " 
      >
        <div className="flex flex-col justify-center items-center gap-4 w-full"> 

          <p className="text-2xl font-semibold">Welcome to your BMW </p>
          <p>Sign up to Our Website</p>

          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            type="name"
            placeholder="Enter Your Name"
            className="border p-2 rounded w-full"
          />

          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
            className="border p-2 rounded w-full"
          />

          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            className="border p-2 rounded w-full"
          />
          <div>
            <p className='underline'>Forget Password</p>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600 hover:scale-105 transition ">
            Log In
          </button> 
          <div>
            <p>Don't have an accound? <span className='underline'>Sign Up</span></p>
        </div>    
        </div>
      </form>
      <div>
  
      </div>
    </div>
  )
}

export default Login