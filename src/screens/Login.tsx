import React, { useEffect } from 'react';
import { useState } from "react";
import { auth } from "../loaders/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
    const [email, setEmail  ] = useState('');
    const [password, setPassword] = useState('');
    const [logMessage, setLogMessage] = useState('');

    useEffect(() => {
        document.title = 'Jack Norris | Login'
    })

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setLogMessage('Logged in')
        })
        .catch((error) => {
            setLogMessage(error.message);
            // const errorCode = error.code;
            // const errorMessage = error.message;
        });
    }

    return (
        <div className='site-container flex flex-col justify-center items-center h-screen w-screen'>
            <div className='flex flex-col p-5 rounded-md justify-center items-center gap-2 w-full max-w-[30rem] border border-black bg-white'>
                <input className='w-full border rounded-md p-2' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' className='p-2 w-full border rounded-md' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className='p-2 border hover:bg-blue-200 rounded-md transition-all' onClick={login}>Login</button>
                <p>{logMessage}</p>
            </div>
        </div>
    )
}