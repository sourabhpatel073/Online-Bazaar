// Note : import the the mentioned components from chakra UI and remove the follwoing once imported

//process.env.REACT_APP_BASEURL
import {Button,Center,FormControl,Heading,Input} from "@chakra-ui/react"
import{ useState} from "react"
import Navbar from "../Components/Navbar";
import axios from "axios";
export default function Admin() {


  //post
  const [data,setData]=useState({
  
    name:"",
    price:"",
    rating:"",
    description:"",
    Image:""
    
  })

  const{name,rating,description,price,Image}=data
  function handleChange(e){
    //console.log(data)
    
   setData({...data,[e.target.name]:e.target.value})

  }
  
  function HandleSub(e){
    e.preventDefault()
console.log(data)
axios({
  method:"POST",
  url:`https://mydatabase-qrto.onrender.com/products`,
  data:{...data}
}).then((res)=>{
  console.log(res)
})
setData({name:"",
price:"",
rating:"",
description:"",
Image:""})
  }
  


  //patch
  const [Mdata,setMData]=useState({
    id:"",
    name:"",
    price:"",
    rating:"",
    description:"",
    Image:""
    
  })

 
  function MhandleChange(e){
     console.log(Mdata)
     
    setMData({...Mdata,[e.target.name]:e.target.value})
 
   }

   function HandleModify(e){
    e.preventDefault()
    console.log(Mdata)
    axios({
      method:"PATCH",
      url:`https://mydatabase-qrto.onrender.com/products/${Mdata.id}`,
      data:{...Mdata}
    }).then((res)=>{
      console.log(Mdata)
    })
      setMData({id:"",
      name:"",
      price:"",
      rating:"",
      description:"",
      Image:""})
   }
   



  
//delete
  const[deleteId,setdeleteId]=useState(1)
  
function HandleDelete(e){
  e.preventDefault()
console.log("kk")
axios.delete(`https://mydatabase-qrto.onrender.com/products/${deleteId}`).then((res)=>{
  console.log(res)
})
setdeleteId("")
}



  
  //console.log(process.env.REACT_APP_BASEURL)
  return (
    <div className="addCatContainer" >
    <Navbar/>
    <Heading> <Center>Add Item</Center></Heading>
      <form className="form" onSubmit={(e)=>{
        
        HandleSub(e)}} >
        <FormControl w="60%" margin="auto" style={{background:"black",color:"white"}}>
          
          <Input className="name" placeholder="Name" name="name" value={name} onChange={handleChange} />
          <Input className="cost" placeholder="price" type="number" name="price" value={price} onChange={handleChange} />
          <Input className="rating" placeholder="rating" type="number" name="rating" value={rating} onChange={handleChange} />
          <Input className="description" placeholder="Description"  name="description" value={description} onChange={handleChange}/>
          <Input className="Image" placeholder="Image"  name="Image" value={Image} onChange={handleChange}/>
          <Button colorScheme={"green"} className="submitBtn" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>

      <Center><Heading>Delete Item</Heading></Center>
      <form className="form" onSubmit={(e)=>{HandleDelete(e)}} >
        <FormControl w="60%" margin="auto" style={{background:"black",color:"white"
    }}>
          <Input className="id" placeholder="id" name="deleteId" value={deleteId} onChange={(e)=>{
            setdeleteId(e.target.value)
            console.log(deleteId)}} />
          
          <Button colorScheme={"red"} color="white" className="submitBtn" type="submit" >
            Delete
          </Button>
        </FormControl>
        </form>
      <Center><Heading>Modify item Item</Heading></Center>

      <form className="form" onSubmit={(e)=>{HandleModify(e)}} >
        <FormControl w="60%" margin="auto" style={{background:"black",color:"white"}}>
          <Input className="id" placeholder="id" name="id" value={Mdata.id} onChange={MhandleChange} />
          <Input className="name" placeholder="Name" name="name" value={Mdata.name} onChange={MhandleChange} />
          <Input className="price" placeholder="price" type="number" name="price" value={Mdata.price} onChange={MhandleChange} />
          <Input className="rating" placeholder="rating" type="number" name="rating" value={Mdata.rating} onChange={MhandleChange} />
          <Input className="description" placeholder="Description"  name="description" value={Mdata.description} onChange={MhandleChange}/>
          <Input className="img" placeholder="img"  name="Image" value={Mdata.Image} onChange={MhandleChange}/>
          <Button colorScheme={"yellow"} className="submitBtn" type="submit">
            DONE
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
