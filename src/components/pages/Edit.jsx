import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate   } from 'react-router-dom'

const Edit = () => {
  const {id}= useParams()
  const hi = useNavigate()
  const [student,setStudent]=useState({
    "name": "",
    "email": ""
  })
  useEffect(()=>{
   
    getuser()
   },[0])
   async function getuser(parms) {
    const student = await axios.get(`http://localhost:3000/students/${id}`)
    setStudent(student.data)
    console.log(student.data)
  }
  async function edituser(paams) {
    const studentab = await axios.put(`http://localhost:3000/students/${id}`,student)
    console.log(studentab)
    alert('save')
  }
  const handelText=(e)=>{
    setStudent({
     ...student,
     [e.target.name]:e.target.value,
   
    })
 
   }
   
  return (
    <div>
       <div>
            <h1  className='text-center text-2xl bg-green-500 p-2 m-2'>Update Students</h1>
            {/* <form action=""> */}
            {/* <input className='p-3 w-[35rem] border-2 border-purple-500  m-5'  type="text"  placeholder='Id' disabled /> */}

                <input name='name' onChange={handelText} className='p-3 w-[35rem] border-2 border-purple-500  m-5'  type="text"  placeholder={student.name} />
                <input name='email' onChange={handelText}  className='p-3 w-[35rem]  border-2  border-purple-500  m-5' type="email"  placeholder={student.email}/>

                
      <button className='p-2 w-[35rem] border-2    m-5 text-white bg-blue-700' onClick={()=>{ edituser()}}> Update Data</button>
            {/* </form> */}


            </div>
    </div>
  )
}

export default Edit