import React, { useState } from 'react';
import CustomerFinder from '../../apis/CustomerFinder';
import './HomeSignin.css';

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