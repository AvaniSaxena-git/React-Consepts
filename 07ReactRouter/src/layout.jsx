import React from "react";
import './components/header/header'
import './components/footer/footer'
import { Outlet } from "react-router-dom";
function Layout(){
return (
   <>
   <header/>
   <Outlet/>
   <footer/>

   </>
)
}
export default Layout