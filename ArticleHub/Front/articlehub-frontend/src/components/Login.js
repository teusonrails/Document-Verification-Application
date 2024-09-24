import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../store/slices/userSlices';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAPI(username, password);
            dispatch(setUser(response.user));
            dispatch(setToken(reponse.token));
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {/* form Fields */}
        </form>
    )
}