import React, { useState } from 'react';
import './Coaches.scss';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Coach from './Coach.tsx';

const Coaches = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <>
            <div className="coaches">
                <div className="container">
                    <h1 className="coaches__title">Тренеры fight-club</h1>
                    <span className="coaches__text">
                        С персональным тренером результаты будут еще быстрее. Он составит программу тренировок и питания, грамотно потренирует, мотивирует и
                        поможет добиться результата.
                    </span>
                </div>
                <div className="coaches__list container">
                    <div className="coaches__list-select">
                        <span>Направления</span>
                        <FormControl sx={{ width: '100%', maxWidth: 280 }} className="coaches-select">
                            <InputLabel id="demo-simple-select-label">Выберите Направления</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} label="Age" onChange={handleChange}>
                                <MenuItem value={'jiu'}>Джи-джитсу</MenuItem>
                                <MenuItem value={'thai'}>Тайский-бокс</MenuItem>
                                <MenuItem value={'mma'}>ММА</MenuItem>
                                <MenuItem value={'box'}>Бокс</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="coaches__list-cards">
                        <Coach />
                        <Coach />
                        <Coach />
                        <Coach />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coaches;
