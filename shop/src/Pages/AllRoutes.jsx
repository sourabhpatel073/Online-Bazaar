import {  Routes, Route } from "react-router-dom"
import NotFount from "../Components/NotFound"
import Admin from "./Admin"
import Cart from "./Cart"
import Home from "./Home"
import Login from "./Login"
import Payment from "./Payment"
import Signup from "./Signup"
import SingleProduct from "./SingleProduct"
import { Wishlist } from "./Wishlist"
export default function AllRoutes(){
return <div>
    <Routes>
      <Route path="/" element={<Home/>}>   </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="products/id" element={<SingleProduct/>}/>
      <Route path="*" element={<NotFount/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/payment" element={<Payment/>}/>
    <Route path="/wishlist"  element={<Wishlist/>} />
    </Routes>
</div>
}