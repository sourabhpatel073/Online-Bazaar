// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import {Button,Center,FormControl,Heading,Input} from "@chakra-ui/react"
import{useState} from "react"
import Navbar from "../Components/Navbar";
//import axios from "axios";
export default function Admin() {
  const [data,setData]=useState({
    id:"",
    name:"",
    cost:"",
    rating:"",
    description:"",
    
  })
  const{id,name,cost,rating,description}=data
  function handleChange(e){
    console.log(data)
    
   setData({...data,[e.target.name]:e.target.value})

  }
  
function HandleDelete(){}

function HandleModify(){}

  function HandleSub(e){
    e.preventDefault()
console.log("kk")
// axios({
//   method:"post",
//   url:` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`,
//   data:{data}
// }).then((res)=>{
//   console.log(res)
// })
  }
  return (
    <div className="addCatContainer" >
    <Navbar/>
    <Heading> <Center>Add Item</Center></Heading>
      <form className="form" onClick={(e)=>{HandleSub(e)}} >
        <FormControl w="60%" margin="auto" style={{background:"black",color:"white"}}>
          <Input className="id" placeholder="id" name="id" value={id} onChange={handleChange} />
          <Input className="name" placeholder="Name" name="name" value={name} onChange={handleChange} />
          <Input className="cost" placeholder="Cost" type="number" name="cost" value={cost} onChange={handleChange} />
          <Input className="rating" placeholder="rating" type="number" name="rating" value={rating} onChange={handleChange} />
          <Input className="description" placeholder="Description"  name="description" value={description} onChange={handleChange}/>
          <Button colorScheme={"green"} className="submitBtn" >
            Submit
          </Button>
        </FormControl>
      </form>

      <Center><Heading>Delete Item</Heading></Center>
      <form className="form" onClick={(e)=>{HandleDelete(e)}} >
        <FormControl w="60%" margin="auto" style={{background:"black",color:"white"
    }}>
          <Input className="id" placeholder="id" name="id" value={id} onChange={handleChange} />
          
          <Button colorScheme={"red"} color="white" className="submitBtn" >
            Delete
          </Button>
        </FormControl>
        </form>
      <Center><Heading>Modify item Item</Heading></Center>

      <form className="form" onClick={(e)=>{HandleModify(e)}} >
        <FormControl w="60%" margin="auto" style={{background:"black",color:"white"}}>
          <Input className="id" placeholder="id" name="id" value={id} onChange={handleChange} />
          <Input className="name" placeholder="Name" name="name" value={name} onChange={handleChange} />
          <Input className="cost" placeholder="Cost" type="number" name="cost" value={cost} onChange={handleChange} />
          <Input className="rating" placeholder="rating" type="number" name="rating" value={rating} onChange={handleChange} />
          <Input className="description" placeholder="Description"  name="description" value={description} onChange={handleChange}/>
          <Button colorScheme={"yellow"} className="submitBtn" >
            DONE
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
