import React, { useMemo, useState } from 'react';
import Slider from 'react-slick';
import './Schedule.scss';

interface ScheduleProps {}

interface Day {
    date: Date;
    scheduleData:
        | {
              day: number;
              hours: Array<{
                  time: string;
                  event: string;
              }>;
          }
        | undefined;
}

const sports = [
    { id: 1, name: 'Тайский бокс' },
    { id: 2, name: 'ММА' },
    { id: 3, name: 'Бразильский Джиу-джитсу' },
    { id: 4, name: 'Бокс' },
];

const timeSlots = ['11:00 - 12:00', '12:00 - 13:30', '16:00 - 17:30', '17:30 - 19:00', '19:00 - 20:30', '20:30 - 22:00'];

const sportColors: { [key: string]: string } = {
    'Тайский бокс': 'firebrick', // Красный для Огня
    ММА: 'forestgreen', // Зеленый для Земли
    'Бразильский Джиу-джитсу': 'blue', // Синий для Воды
    Бокс: 'goldenrod', // Желтый для Воздуха
};

const Schedule: React.FC<ScheduleProps> = () => {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    const [currentSport, setCurrentSport] = useState(sports[0]);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Сброс времени до полуночи

    // Установить начало недели в понедельник
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);

    const schedules = [
        {
            day: 1, // Понедельник
            hours: [
                { time: timeSlots[0], event: 'Тайский бокс' },
                { time: timeSlots[1], event: 'ММА' },
                { time: timeSlots[2], event: 'Бразильский Джиу-джитсу' },
                { time: timeSlots[3], event: 'Бокс' },
                { time: timeSlots[4], event: 'Тайский бокс' },
                { time: timeSlots[5], event: 'Йога' },
            ],
        },
        // Добавьте еще дни здесь...
    ];

    const handleNextWeek = () => {
        setCurrentWeekIndex(prevIndex => Math.min(prevIndex + 1, 2));
    };

    const handlePrevWeek = () => {
        setCurrentWeekIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            if (nextSlide > currentSlide) {
                handleNextWeek();
            } else {
                handlePrevWeek();
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const days = useMemo(() => {
        const daysOfWeek: Day[] = [];
        for (let i = 0; i < 7; i++) {
            const dayDate = new Date(startOfWeek);
            dayDate.setDate(startOfWeek.getDate() + i + currentWeekIndex * 7);
            const scheduleData = schedules.find(schedule => schedule.day === dayDate.getDay());
            daysOfWeek.push({
                date: dayDate,
                scheduleData,
            });
        }
        return daysOfWeek;
    }, [startOfWeek, schedules, currentWeekIndex]);

    const filteredHours = useMemo(() => {
        if (currentSport && days[0]) {
            return timeSlots.map(time => ({ time }));
        }
        return [];
    }, [currentSport, days]);

    const getColorForDay = (day: Day) => {
        if (!day.scheduleData) {
            return '';
        }
        const events = day.scheduleData.hours.filter(hour => hour.event === currentSport.name);
        return events.length > 0 ? sportColors[currentSport.name] : '';
    };

    return (
        <>
            <button onClick={handlePrevWeek}>Предыдущая неделя</button>
            <button onClick={handleNextWeek}>Следующая неделя</button>
            <div className="sports-tabs">
                {sports.map(sport => (
                    <button key={sport.id} className={`sports-tab ${sport.name === currentSport.name ? 'active' : ''}`} onClick={() => setCurrentSport(sport)}>
                        {sport.name}
                    </button>
                ))}
            </div>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th></th>
                        {days.map((day, index) => {
                            const color = getColorForDay(day);
                            return (
                                <th key={index} className="schedule-date" style={{ backgroundColor: color }} scope="col">
                                    {day.date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {filteredHours.map((hour, index) => (
                        <tr key={index}>
                            <th className="schedule-time" scope="row">
                                {hour.time}
                            </th>
                            {days.map((day, dayIndex) => {
                                const event = day.scheduleData?.hours.find(h => h.time === hour.time)?.event;
                                return <td key={dayIndex} className="schedule-cell"></td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Schedule;
