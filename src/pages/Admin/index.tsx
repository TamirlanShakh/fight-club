import { Admin, Resource, ShowGuesser } from 'react-admin';
import dataProvider from './dataProvider.js'; // изменил это
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

import { PostList, PostEdit, PostCreate } from './posts.tsx';
import { UserList } from './users.tsx';
import { CoachCreate, CoachList, CoachEdit } from './Coaches/index.tsx';
import { SendformsList, SendformsEdit } from './Sendforms/index.tsx';
import { Dashboard } from './Dashboard.tsx';
import { authProvider } from './authProvider.ts';

import React from 'react';

const App = () => (
    <Admin dataProvider={dataProvider} basename="/admin">
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} options={{ label: 'Посты' }} />
        <Resource name="users" list={UserList} show={ShowGuesser} icon={UserIcon} recordRepresentation="name" options={{ label: 'Пользователи' }} />
        <Resource
            name="coaches"
            list={CoachList}
            show={ShowGuesser}
            create={CoachCreate}
            edit={CoachEdit}
            recordRepresentation="name"
            icon={PostIcon}
            options={{ label: 'Тренеры' }}
        />
        <Resource name="sendforms" list={SendformsList} options={{ label: 'Заявки' }} />
    </Admin>
);

export default App;
