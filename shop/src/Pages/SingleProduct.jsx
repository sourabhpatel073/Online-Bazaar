import { Center, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Authcontext } from "../Context/AuthContext";
import { useContext } from "react";

export default function SingleProduct(){

    const {
        isAuth,
        login,
        logout,
        setGData,
        Gdata,
        page,
        setPage,
        Item,
        setItem,
        id,setId
      } = useContext(Authcontext);
    const link=useNavigate()
   
function save(item){

  localStorage.setItem("item",JSON.stringify(item))
}

      //console.log(Item)
    return <div>
    
      <Navbar/>
      
       <Heading><Center>Products Details</Center></Heading>
       {
        <div
            style={{
              display: "flex",
              margin: "50px",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                justifyContent: "space-around",
              }}
            >
              <h4>{Item.discription}</h4>
              <img src={Item.image1}></img>
              <h6>{Item.name}</h6>
            </div>
            <div
              style={{
                justifyContent: "space-around",
                marginLeft: "50px",
              }}
            >
              {" "}
              <h6>Expected Delivery Within 7 days</h6>
              <img src={Item.image2} style={{ width: "50%" }}></img>
              <h4
                style={{
                  marginLeft: "60px",
                  color: "green",
                  paddingBottom: "20px",
                }}
              >
                Price Rs-{Item.price}
              </h4>
              <button
                style={{
                  width: "150px",
                  backgroundColor: "brown",
                  color: "white",
                  borderRadius: "15px",
                }}
                onClick={()=>{
                  save(Item)
                  link("/cart")}}
              >
                Add T0 Cart
              </button>
              <button
                style={{
                  width: "150px",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "15px",
                  marginLeft: "20px",
                }}
                onClick={()=>{link("/payment")}}
              >
                Go For Payment
              </button>
            </div>
          </div>
       }
      
    </div>
}