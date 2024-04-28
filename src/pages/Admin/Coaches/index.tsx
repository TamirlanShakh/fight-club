import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { sports, coaches } from '../../../utils/utils.js';

interface Coach {
    id: number;
    name: string;
    position: string;
    description: string;
}

console.log(coaches);

const CoachList = () => (
    <>
        <List>
            <Datagrid data={coaches}>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="position" />
                <TextField source="description" />
            </Datagrid>
        </List>
    </>
);

export default CoachList;
