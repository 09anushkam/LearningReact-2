// 1. Two way binding
// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setUsername] = useState("")
//   return (
//     <>
//       <h1 className='mb-5 text-2xl'>Enter your name</h1>
//       <form>
//         <input 
//         className='border-2 border-zinc-800 px-4 py-2 text-xl' 
//         type="text" 
//         value={username}
//         onChange={(e)=>{
//           console.log(e.target.value)
//           setUsername(e.target.value)
//           // console.log(username)
//         }}/>
//       </form>
//     </>
//   )
// }

// export default page


// routing revision
// "use client"
// import React from 'react'

// const page = () => {
//   return (
//     <>
//       <h1 className='text-2xl font-bold'>This is Home Page</h1>
//       <a href='/Contact'>Contact</a>
//     </>
//   )
// }

// export default page

// 2. Dynamic routing
// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Link from"next/link"

// const page = () => {
//   const [users, setUsers] = useState([])
//   const getUsers=async()=>{
//     const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
//     // console.log(data)
//     setUsers(data)
//     // console.log(users)
//   }
//   useEffect(() => {
//     getUsers()
//   }, [])
  
//   return (
//     <>
//     <button onClick={getUsers} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>
//     <div className='p-8 bg-slate-100 mt-5'>
//       <ul>
//         {users.map((e)=>{
//         return <li>{e.username} --- <Link href={`/${e.id}`}>Explore</Link></li>
//       })}
//       </ul>
//     </div>
//     </>
//   )
// }

// export default page

// 3. props and data flow / data passing using props
// "use client"
// import React, { useState } from 'react'
// import Header from './Components/Header'

// const page = () => {
//   const [num, setNum] = useState(10)
//   return (
//     <>
//     <Header num={num}/>
//     </>
//   )
// }

// export default page

// 4. Context api
// "use client"
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'
// import Header from './Components/Header'

// const page = () => {
//   const user=useContext(MyContext)
//   console.log(user)
//   return (
//     <div>
//       {user}
//       <Header/>
//     </div>
//   )
// }

// export default page

// 5. React toastify
// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify=()=>{
//     // toast("Login successful")
//     toast.success('🦄 Wow so easy!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   }

//   return (
//     <div>
//       <button onClick={notify}>Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default page

// 6. Client side rendering
"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userdata, setUserdata] = useState("hello")
  const [num, setNum] = useState(10)
  const getData=async()=>{
    const res=await axios.get("https://picsum.photos/v2/list")
    const a=JSON.stringify(res.data)
    console.log(a)
    setUserdata(a)
  }
  
  return (
    <div>
      <button onClick={getData}>Click</button>
      <br/>
      {userdata}
    </div>
  )
}

export default page