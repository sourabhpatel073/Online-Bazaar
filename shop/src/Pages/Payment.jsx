import Navbar from "../Components/Navbar";
import { Center, Heading } from "@chakra-ui/react";

import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit'
export default function Payment(){
    return <div>
    <Navbar/>
          <Heading><Center>Payment</Center></Heading>
          <form>
      <MDBRow className='mb-4' style={{width:"50%", display:"flex", margin:"auto"}}  >
        <MDBCol>
          <MDBInput id='form6Example1' label='First name'style={{border:"1px solid ",width:"50%"}} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' style={{border:"1px solid ",width:"50%"}}/>
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' style={{border:"1px solid ",width:"50%"}} />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' style={{border:"1px solid",width:"50%"}} />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' style={{border:"1px solid " ,width:"50%"}} />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' style={{border:"1px solid " ,width:"50%"}}/>

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' style={{border:"1px solid " ,width:"50%"}} />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
       
      />

      <MDBBtn style={{bg:"blue",color:"white"}} type='submit' block  >
        Place order
      </MDBBtn>
    </form>

    </div>
}

;


