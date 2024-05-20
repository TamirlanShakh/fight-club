import React from 'react';
import { Show, SimpleShowLayout, TextField, ImageField } from 'react-admin';

const CoachShow = props => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="name" label="Имя" />
                <TextField source="position" label="Должность" />
                <TextField source="experience" label="Опыт" />
                <TextField source="specialization" label="Специализация" />
                <TextField source="achievements" label="Достижения" />
                <TextField source="about" label="О себе" />
                <TextField source="sport" label="Вид спорта" />
                <ImageField source="img" title="Фото" />
            </SimpleShowLayout>
        </Show>
    );
};

export default CoachShow;
