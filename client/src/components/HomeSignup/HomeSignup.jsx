import React, { useState } from 'react';
import CustomerFinder from '../../apis/CustomerFinder';
import './HomeSignup.css';

const HomeSignup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await CustomerFinder.post("signup/", {
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
                <div className='signup-box'>
                    <h1 className='signup-title'>Sign up</h1>
                    <form action="" className="signup-form">
                        <input value={email} onChange={e => setEmail(e.target.value)}  className="form-control" type="email" name="email" placeholder="Email" id="" />
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" name="password" placeholder="Password "id="" />
                        <button onClick={handleSubmit} className='btn btn-secondary' type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeSignup;