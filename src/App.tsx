import React from 'react';
import MainNavigation from "./layout/MainNavigation";
import CartPage from "./cart/CartPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StorePage from "./layout/Store";

interface AppProps{
    appName:string
}

const  App:React.FC<AppProps> = ({appName})=> {
    return (
        <div>
            <MainNavigation appName={appName}>
            <Routes>
                <Route path='/' element={<StorePage />}></Route>
                <Route path='/CartPage' element={ <CartPage/>}></Route>
            </Routes>
            </MainNavigation>
        </div>
    );
}
export default App;