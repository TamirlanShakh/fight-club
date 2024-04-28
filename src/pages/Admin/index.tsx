import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router-dom';
import CoachList from './Coaches/index.tsx';
// import ScheduleList from './Schedule/index.tsx';
// import GymList from './Gym/index.tsx';
import jsonServerProvider from 'ra-data-json-server';

const AdminComponent = () => (
    <Admin dataProvider={jsonServerProvider('http://localhost:3001/db.json')}>
        <Resource name="coaches" list={CoachList} />
        {/* <Resource name="schedule" list={ScheduleList} /> */}
        {/* <Resource name="gym" list={GymList} /> */}
        <Route path="/admin/coaches" />
        {/* <Route path="/admin/schedule" /> */}
        {/* <Route path="/admin/gym" /> */}
    </Admin>
);

export default AdminComponent;
