import React from "react";
import { Link } from "react-router-dom"
interface AppProps{
    appName:string
}
const  MainNavigation:React.FC<AppProps> = (appProps)=> {
   return (<div>
        <header>
        <div><h1>{appProps.appName}</h1></div>

           <div>
               <nav>
                   <Link to='/CartPage'>Cart button</Link>
               <br/>
               <Link to='/'>store button</Link>
               </nav>
           </div>
        </header>
       <section>
            <div>{appProps.children}</div>
       </section>
       </div>
   )}

export default MainNavigation ;