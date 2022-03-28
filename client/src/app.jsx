import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";


const App = () => {
    return (<div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/signin" element={<Signin/>} />
                <Route exact path="/signup" element={<Signup/>} />
            </Routes>
        </Router>
    </div>
    )};

export default App;