import React,{useContext,useState} from "react";
import UserContext from "../context/userContext";
function Login(){
    const [UserName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const[setUser] = useContext(UserContext)
    const handleSubmit=()=>{
        e.preventDefault()
        setUser({UserName,password})
    }
    return(
  <div>
    <h2>Login</h2>
    <input type="text" 
    value={UserName}
    onChange={(e)=>setUserName(e.target.value)}
    placeholder="userName"/>
    <input type="text"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
     placeholder="password"/>
    <button onClick={handleSubmit}>Submit</button>
  </div>
    )
}
export default Login