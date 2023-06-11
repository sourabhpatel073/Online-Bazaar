import axios from "axios"

//"https://reqres.in/api/login"

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const loginAuth=(userData)=>(dispatch)=>{
  dispatch({type:LOGIN_REQUEST})

  return axios.post(`https://reqres.in/api/login`,userData).then((res)=>{
    console.log(res)
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
  })
  .catch((err)=>{
    console.log(err)
    dispatch({type:LOGIN_FAILURE})
  })
  
}