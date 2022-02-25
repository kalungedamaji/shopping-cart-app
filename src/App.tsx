import React from 'react';
import MainNavigation from "./components/main_navigation/MainNavigation";
import CartPage from "./pages/CartPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StorePage from "./pages/StorePage";
import {CartContextProvider} from "./context/CartContext";

interface AppProps{
    appName:string
}

const  App:React.FC<AppProps> = ({appName})=> {
    return (
        <section>
        <div><h1>{appName}</h1></div>
        <div>
            <CartContextProvider>
                <MainNavigation>
                    <Routes>
                        <Route path='/' element={<StorePage />}></Route>
                        <Route path='/CartPage' element={ <CartPage/>}></Route>
                    </Routes>
                </MainNavigation>
            </CartContextProvider>
        </div>
        </section>
    );
}
export default App;