import { Route, Routes } from "react-router-dom";
import { Navbar } from "./componenets/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Account } from "./pages/Account";
import Footer from "./componenets/Footer";
import { Secured } from "./componenets/Secured";
import { useState } from "react";
import { Desc } from "./pages/Desc";

function App() {
    const [user , setLoginUser] = useState({});
    return (
        <>
            <div className="flex-col min-h-screen">    
                <Navbar user={user}  setLoginUser={setLoginUser} />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login setLoginUser={setLoginUser} />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/account' element={<Secured><Account /></Secured>}></Route>
                    <Route path='/desc' element={<Desc />}></Route>
                </Routes>
            </div>
        </>
    );
}
export default App