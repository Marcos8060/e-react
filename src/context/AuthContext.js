import React,{createContext,useState} from "react";
import jwt_decode from "jwt-decode";
import { login } from "../components/Auth/axios";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

const AuthProvider = ( { children })=>{
    const history = useNavigate();
    const [authTokens,setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user,setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    const [message,setMessage] = useState('')


// user login
    const userLogin = async(e)=>{
        e.preventDefault();

      const response = await fetch(login,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
      })
      let data = await response.json();
      if(response.status === 200){
        setAuthTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        history('/')
      }else if(response.status === 401){
        setMessage('User does not exist!')
      }else if(response.status === 400){
        setMessage('Bad request')
      }else{
        alert('something went wrong')
      }
    }


// contextData
    let contextData = {
        userLogin: userLogin,
        user: user,
        authTokens: authTokens,
        message: message
    }

    return(
        <userContext.Provider value={contextData}>
            { children }
        </userContext.Provider>
    )
}

export default AuthProvider;