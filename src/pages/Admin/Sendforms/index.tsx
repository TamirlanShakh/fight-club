import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext,
    Pagination,
} from 'react-admin';

const postFilters = [<TextInput source="q" label="Поиск" alwaysOn />, <ReferenceInput source="userId" label="Пользователи" reference="users" />];

export const SendformsList = props => (
    <List {...props} filters={postFilters} pagination={<Pagination rowsPerPageOptions={[10, 20, 30, 40, 50]} />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

const SendformsTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const SendformsEdit = () => (
    <Edit title={<SendformsTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);
