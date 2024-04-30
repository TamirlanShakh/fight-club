import React, { useState } from 'react';
import { Login, LoginForm, TextInput, useRedirect } from 'react-admin';
import { QueryClient, QueryClientProvider } from 'react-query';

// Создайте экземпляр QueryClient
const queryClient = new QueryClient();

const MyLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const redirect = useRedirect();

    const handleSubmit = () => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            return;
        }
        const user = JSON.parse(storedUser);
        if (username !== user.username || password !== user.password) {
            return;
        }
        localStorage.setItem('authenticated', 'true');
        redirect('/ ');
    };

    return (
        <QueryClientProvider client={queryClient}>
            <Login>
                <LoginForm onSubmit={handleSubmit}>
                    <TextInput source="username" onChange={e => setUsername(e.target.value)} />
                    <TextInput source="password" type="password" onChange={e => setPassword(e.target.value)} />
                </LoginForm>
            </Login>
        </QueryClientProvider>
    );
};

export default MyLoginPage;
