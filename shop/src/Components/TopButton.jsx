import { useContext, useEffect } from "react";
import { Authcontext } from "../Context/AuthContext";


export default function TopButton(){

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
      } = useContext(Authcontext);

     
      
    return<div>
    <button
      style={{
        width: "120px",
        backgroundColor: "orange",
        borderRadius: "40px",
        marginBottom: "10px",
      }}
      onClick={() => {
        let x = Gdata.filter((item) => {
          return item.price < 1000;
        });
        setGData(x);
      }}
    >
      below 1000
    </button>

    <button
      style={{
        width: "120px",
        backgroundColor: "orange",
        borderRadius: "40px",
        marginBottom: "10px",
        marginLeft: "20px",
      }}
      onClick={() => {
        let x = Gdata.filter((item) => {
          return item.price < 10000;
        });
        setGData(x);
      }}
    >
      below 10000
    </button>

    <button
      style={{
        width: "120px",
        backgroundColor: "orange",
        borderRadius: "40px",
        marginBottom: "10px",
        marginLeft: "20px",
      }}
      onClick={() => {
        let x = Gdata.filter((item) => {
          return item.rating > 4;
        });
        setGData(x);
      }}
    >
      rating above 4
    </button>

    <button
      style={{
        width: "120px",
        backgroundColor: "orange",
        borderRadius: "40px",
        marginBottom: "10px",
        marginLeft: "20px",
      }}
      onClick={() => {
        let x = Gdata.filter((item) => {
          return item.price < 100000;
        });
        setGData(x);
      }}
    >
      below 100000
    </button>

    <button
      style={{
        width: "120px",
        backgroundColor: "red",
        borderRadius: "40px",
        marginBottom: "10px",
        marginLeft: "20px",
        color:'white'
      }}
      onClick={() => {
             
   let x=Gdata.sort(function(a,b){return a.price - b.price})
    
    console.log(x)
    //setGData([])
    setGData([...x])
  }}
    >
      low - high
    </button>

    <button
      style={{
        width: "120px",
        backgroundColor: "red",
        borderRadius: "40px",
        marginBottom: "10px",
        marginLeft: "20px",
        color:'white'
      }}
      onClick={() => {
        //points.sort(function(a, b){return a - b});
        
   let x=Gdata.sort(function(a,b){return b.price - a.price})
    
        console.log(x)
        //setGData([])
        setGData([...x])
      }}
    >
     high - low
    </button>
  </div>

}