import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import List from './List'


const Home = () => {
  const [student,setStudent]=useState(
  {
    name:'',
    email:''
  })
  const [stauts,setstauts]=useState()
  const handelText=(e)=>{
   setStudent({
    ...student,
    [e.target.name]:e.target.value
   })
  //  console.log(student)
  }
   const handelSubmit= async(e)=>{
    e.preventDefault()
       
        try{
           await axios.post(`http://localhost:3000/students/ `,student)
           setstauts(true)
         console.log(student)
        }
        catch(err){
console.log('sfsdf')
        }


        if(stauts){
          return <Home/>
        }



       
  }

  return (
    <div>
    <h1 className='text-4xl text-center  p-8 m-2 bg-purple-600 text-white'> React CURD With Api Call</h1>
    <div  className='md:grid grid-cols-2'>
        <div>
            <h1  className='text-center text-2xl bg-green-500 p-2 m-2'>Add Student</h1>
            <form action="">
                <input  name='name'  className='p-3 w-[35rem] border-2 border-purple-500  m-5'  type="text"  placeholder='Student Name'    onChange={handelText}/>
                <input  name='email'  className='p-3 w-[35rem]  border-2  border-purple-500  m-5' type="email"  placeholder='Student Email'  onChange={handelText} />

                
      <button  onClick={handelSubmit} className='p-2 w-[35rem] border-2    m-5 text-white bg-blue-700' > Add</button>
            </form>


            </div>



        <div><h1 className='text-center text-2xl bg-yellow-400 p-2 m-2'>List Students</h1>
        <List/>
        </div>

     

    </div>
    </div>
  )
}

export default Home