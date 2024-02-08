import React from 'react';
import { useState } from "react";
import { auth } from "../loaders/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
    const [email, setEmail  ] = useState('');
    const [password, setPassword] = useState('');
    const [logMessage, setLogMessage] = useState('');

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setLogMessage('Logged in')
        })
        .catch((error) => {
            setLogMessage(error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-dvh'>
            <div className='flex flex-col p-3 justify-center items-center gap-2 w-full max-w-96 border border-black'>
                <input className='w-full border rounded-md' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' className='w-full border rounded-md' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className='border hover:bg-blue-200 rounded-md' onClick={login}>Login</button>
                <p>{logMessage}</p>
            </div>
        </div>
    )
}