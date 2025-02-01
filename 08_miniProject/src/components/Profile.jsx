import React,{useContext,useState} from "react";
import UserContext from "../context/userContext";

function Profile(){
    const[user]=useContext(UserContext)
    if(!user) return <div>please login</div>
    return <div>Welcome{User.UserName}</div>
}
export default Profile