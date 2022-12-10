import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Edit from './components/pages/Edit';
import Home from "./components/pages/Home";
import View from './components/pages/View';

function App() {
  return (
    <div >
    

    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>

    </Routes>
    
   
    
    </BrowserRouter>

    </div>
  );
}

export default App;
