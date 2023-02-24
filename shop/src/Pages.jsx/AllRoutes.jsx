import {  Routes, Route } from "react-router-dom"
import Admin from "./Admin"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
export default function AllRoutes(){
return <div>
    <Routes>
      <Route path="/" element={<Home/>}>   </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
    </Routes>
</div>
}