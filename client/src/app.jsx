import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
//import HomeNavigation from "./components/HomeNavigation/HomeNavigation";
import "./app.css";


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/signin" element={<Signin/>} />
                    <Route exact path="/signup" element={<Signup/>} />  
                    <Route element={<PrivateRoute /*isLogged={false}*/ />}>
                        <Route exact path="/dashboard" element={<Dashboard/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
)};



export default App;