import React from "react";
import { Link } from "react-router-dom"

const  MainNavigation:React.FC = (appProps)=> {
   return (<div>
        <header>
           <div>
               <nav>
                   <Link to='/CartPage'>Cart</Link>
               <br/>
               <Link to='/'>Store</Link>
               </nav>
           </div>
        </header>
       <section>
            <div>{appProps.children}</div>
       </section>
       </div>
   )}

export default MainNavigation ;