/*import React, { useState } from 'react';
import CustomerFinder from '../../apis/CustomerFinder';
import './HomeSignIn.css';

const HomeSignin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await CustomerFinder.post("login/", {
                email: email,
                password: password
            })
            console.log(response);
        } catch(err){

        }
    }
    return (
        <div >
            <div className='main-screen'>
                <div className='signin-box'>
                    <h1 className='signin-title'>Sign in</h1>
                    <form action="" className="signin-form">
                        <input value={email} onChange={e => setEmail(e.target.value)}  className="form-control" type="email" name="email" placeholder="Email" id="" />
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" name="password" placeholder="Password "id="" />
                        <button onClick={handleSubmit} className='btn btn-secondary' type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeSignin;

*/

import React, { useState } from 'react';
import CustomerFinder from '../../apis/CustomerFinder';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import './HomeSignIn.css';

const HomeSignin = () => {


    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await CustomerFinder.post("login/", {
                email: email,
                password: password
            })
            console.log(response.data.status);
            if(response.data.status === "success"){
                handleCookie(response.data);
                navigate("/dashboard");
            }
        } catch(err){

        }
    }
    //hook
    const [cookies, setCookie] = useCookies(["user"]);

    //sets the cookie
    const handleCookie = (data) =>{
        setCookie("user", data.userID, {
            path:"/"
        });
    }


    return (
        <div >
            <div className='main-screen'>
                <div className='signin-box'>
                    <h1 className='signin-title'>Sign in</h1>
                    <form action="" className="signin-form">
                        <input value={email} onChange={e => setEmail(e.target.value)}  className="form-control" type="email" name="email" placeholder="Email" id="" />
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" name="password" placeholder="Password "id="" />
                        <button onClick={handleSubmit} className='btn btn-secondary' type="submit"></button>
                        <div>Dont have an account? <a onClick={() =>{
                                navigate("/signup");
                            }}>sign up</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeSignin;