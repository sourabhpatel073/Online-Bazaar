// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import {Button,FormControl,Input} from "@chakra-ui/react"
import{useState} from "react"
//import axios from "axios";
export default function Admin() {
  const [data,setData]=useState({
    name:"",
    cost:"",
    likes:"",
    description:"",
    breed:""
  })
  const{name,cost,likes,description,breed}=data
  function handleChange(e){
    console.log(data)
    
   setData({...data,[e.target.name]:e.target.value})

  }
  
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
    <div className="addCatContainer">
      <form className="form" onClick={(e)=>{HandleSub(e)}}>
        <FormControl>
          <Input className="name" placeholder="Name" name="name" value={name} onChange={handleChange} />
          <Input className="cost" placeholder="Cost" type="number" name="cost" value={cost} onChange={handleChange} />

          <Input className="likes" placeholder="Likes" type="number"  name="likes" value={likes} onChange={handleChange}/>
          <Input className="description" placeholder="Description"  name="description" value={description} onChange={handleChange}/>
          <Input className="breed" placeholder="Breed"  name="breed" value={breed} onChange={handleChange}/>
          <Button colorScheme={"green"} className="submitBtn" >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
