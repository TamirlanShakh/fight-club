import { AuthProvider } from 'react-admin';

const authProvider = {
    login: ({ username, password }) => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            return Promise.reject({ message: 'Invalid credentials' });
        }
        const user = JSON.parse(storedUser);
        if (username !== user.username || password !== user.password) {
            return Promise.reject({ message: 'Invalid credentials' });
        }
        localStorage.setItem('authenticated', 'true');
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('authenticated');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('authenticated') ? Promise.resolve() : Promise.reject();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('authenticated');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
};

const user = {
    username: 'admin',
    password: 'password',
};
localStorage.setItem('user', JSON.stringify(user));

export default authProvider;
