import './App.css'
import { Navbar } from './assets/components/Navbar'
import {Home} from  './assets/pages/Home'
import {Contacto} from './assets/pages/Contacto'
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Routes>
     <Route path="/Home"  element={<Home/>} />
      <Route path='/contacto' element={<Contacto/>}/>
     </Routes>
     <Navbar></Navbar>
    </>
  )
}

export default App
