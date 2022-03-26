import React from 'react';
import { MdMovie } from "react-icons/md";
import './HomeSignin.css';

const HomeSignin = () => {
    return (
        <div >
            <div className='main-screen'>
                <div className='signin-box'>
                    <h1 className='signin-title'>Sign in</h1>
                    <form action="" class="signin-form">
                        <label htmlFor=""></label>
                        <input type="email" name="email" id="" />
                        <label htmlFor=""></label>
                        <input type="password" name="password" id="" />
                        <button type="submit"></button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HomeSignin;