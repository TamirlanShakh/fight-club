import { Admin, Resource, ShowGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

import { PostList, PostEdit, PostCreate } from './posts.tsx';
import { UserList } from './users.tsx';
import { Dashboard } from './Dashboard.tsx';
import { authProvider } from './authProvider.ts';

import React from 'react';
import dataProvider from './dataProvider.js';

const App = () => (
    <Admin dataProvider={dataProvider} basename="/admin">
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} options={{ label: 'Посты' }} />
        <Resource name="users" list={UserList} show={ShowGuesser} icon={UserIcon} recordRepresentation="name" options={{ label: 'Пользователи' }} />
    </Admin>
);

export default App;
