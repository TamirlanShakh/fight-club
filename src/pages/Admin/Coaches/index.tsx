import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    Pagination,
    ReferenceInput,
    Create,
    SimpleForm,
    Edit,
    SelectInput,
    useRecordContext,
    EditButton,
    ReferenceField,
    ImageField,
} from 'react-admin';
import { sports, coaches } from '../../../utils/utils.js';

interface ICoach {
    id: number;
    name: string;
    img: string;
    position: string;
    experience: string;
    specialization: string;
    achievements: string[];
    about: string;
    sport: string;
}

const postFilters = [<TextInput source="q" label="Поиск" alwaysOn />, <ReferenceInput source="userId" label="Пользователи" reference="users" />];

export const CoachList = props => (
    <>
        <List {...props} pagination={<Pagination rowsPerPageOptions={[10, 20, 30, 40, 50]} />}>
            <Datagrid rowClick="show">
                <ReferenceField source="id" reference="coaches" link="show">
                    <TextField source="name" />
                </ReferenceField>
                {/* <TextField source="id" /> */}
                <ImageField source="img" title="Фото" src="thumbnail" />
                <TextField source="name" label="Имя" />
                <TextField source="position" label="Должность" />
                <TextField source="experience" label="Опыт" />
                <TextField source="specialization" label="Специализация" />
                <TextField source="achievements" label="Достижения" />
                <TextField source="about" label="О себе" />
                <TextField source="sport" label="Вид спорта" />
                <EditButton />
            </Datagrid>
        </List>
    </>
);

const CoachTitle = () => {
    const record = useRecordContext();
    return <span>Тренер {record ? `"${record.name}"` : ''}</span>;
};

export const CoachEdit = () => (
    <Edit title={<CoachTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            {/* <ReferenceInput source="userId" reference="users" /> */}
            <TextInput source="name" label="Имя" />
            <TextInput source="position" label="Должность" />
            <TextInput source="experience" label="Опыт" multiline rows={3} />
            <TextInput source="specialization" label="Специализация" />
            <TextInput source="achievements" label="Достижения" multiline rows={3} />
            <TextInput source="about" label="О себе" multiline rows={5} />
            <ReferenceInput source="sportId" reference="sports" label="Вид спорта">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CoachCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Имя" />
            <TextInput source="position" label="Должность" />
            <TextInput source="experience" label="Опыт" multiline rows={3} />
            <TextInput source="specialization" label="Специализация" />
            <TextInput source="achievements" label="Достижения" multiline rows={3} />
            <TextInput source="about" label="О себе" multiline rows={5} />
            <TextInput source="sport" label="Вид спорта" />
        </SimpleForm>
    </Create>
);
