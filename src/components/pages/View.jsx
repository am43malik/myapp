import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate   } from 'react-router-dom'


const View = () => {
  const {id}= useParams()
  const hi = useNavigate()
 
  const [student,setStudent]=useState([])
   useEffect(()=>{
   
    getuser()
   },[])
   async function getuser(params) {
    const student = await axios.get(`http://localhost:3000/students/${id}`)
    setStudent(student.data)
    console.log(student.data)
  }
  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const student = await axios.get(`http://localhost:3000/students/${id}`);
  //        console.log(student.data);
  //       setStudent(student.data);
  //     } catch (error) {
  //       console.error("ddfs");
  //     }
  //   }
  //   getUser();
  // }, [id]);
  const handleClick = () => {
    hi.push('/')
 }  
  
  
  return (
    <div>
       <div>
            <h1  className='text-center text-2xl bg-green-500 p-2 m-2'> Student Info</h1>
            <form action="">
            <input className='p-3 w-[35rem] border-2 border-purple-500  m-5'  type="text"  placeholder={student.id} disabled />

                <input className='p-3 w-[35rem] border-2 border-purple-500  m-5'  type="text"  placeholder={student.name}  disabled  />
                <input className='p-3 w-[35rem]  border-2  border-purple-500  m-5' type="email"  placeholder={student.email} disabled  />

                
      <button  onClick={handleClick}  className='p-2 w-[35rem] border-2    m-5 text-white bg-blue-700' > Back to Home</button>
            </form>


            </div>
    </div>
  )
}

export default View