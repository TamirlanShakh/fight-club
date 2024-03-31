import React, { useState } from 'react';
import './Coaches.scss';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Coach from './Coach.tsx';
import { sports, coaches } from '../../utils/utils.js';

const Coaches = () => {
    const [selectedSport, setSelectedSport] = useState('');

    const handleChange = (event: any) => {
        setSelectedSport(event.target.value);
    };

    const filteredCoaches = coaches.filter(coach => coach.sport === selectedSport || selectedSport === '');

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
                            <InputLabel shrink={selectedSport !== ''}>Выберите направления</InputLabel>
                            <Select label="" id="demo-simple-select" value={selectedSport} onChange={handleChange}>
                                <MenuItem value={''}>Все Направления</MenuItem>
                                <MenuItem value={'jiu'}>Джи-джитсу</MenuItem>
                                <MenuItem value={'thai'}>Тайский-бокс</MenuItem>
                                <MenuItem value={'mma'}>ММА</MenuItem>
                                <MenuItem value={'box'}>Бокс</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="coaches__list-cards">
                        {filteredCoaches.map((coach: ICoach) => (
                            <Coach key={coach.id} sports={sports} coaches={[coach]} selectedSport={selectedSport} handleChange={handleChange} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coaches;
