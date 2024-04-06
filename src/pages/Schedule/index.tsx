import React, { useEffect, useMemo, useState } from 'react';
import './Schedule.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { sports, timeSlots } from '../../utils/utils.js';

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

const sportColors: { [key: string]: string } = {
    'тайский-бокс': '#0f3f0f',
    мма: '#eee67d',
    'джиу-джитсу': '#0c0cc4',
    бокс: '#e31e24',
};

const Schedule: React.FC<ScheduleProps> = () => {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    const [currentSport, setCurrentSport] = useState(sports[0]);
    const [open, setOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState<Day | null>(null);
    const [selectedHour, setSelectedHour] = useState<{ time: string; event: string } | null>(null);
    const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

    const onOpen = (dayIndex: number, hour: { time: string; event: string }) => {
        setOpenDialogIndex(dayIndex * filteredHours.length + filteredHours.indexOf(hour));
        setOpen(true);
        setSelectedDay(days[dayIndex]);
        setSelectedHour(hour);
    };

    const onClose = () => {
        setOpen(false);
        setOpenDialogIndex(null);
    };

    const handleSportClick = (sport: any) => {
        setCurrentSport(sport);
    };

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Сброс времени до полуночи

    // Установить начало недели в понедельник
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);

    const events = ['тайский-бокс', 'мма', 'джиу-джитсу', 'бокс'];

    const numberOfDays = 21;
    const daysArray = Array.from({ length: numberOfDays }, (_, i) => i + 1);

    const schedules = daysArray.map(day => {
        const hours = timeSlots.map(timeSlot => {
            const eventIndex = Math.floor(Math.random() * events.length);
            const event = events[eventIndex];

            return {
                time: timeSlot,
                event: event,
            };
        });

        return {
            day: day,
            hours: hours,
        };
    });

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
        return sportColors[currentSport.rusname];
    };

    const getEventForDayAndTime = (day: Day, time: string) => {
        if (day.scheduleData) {
            const hour = day.scheduleData.hours.find(hour => hour.time === time);
            return hour ? hour.event : '';
        }
        return '';
    };

    useEffect(() => {
        document.title = 'Расписание тренировок';
    }, []);

    let toDay = new Date();

    return (
        <>
            {' '}
            <div className="schedule">
                <div className="container">
                    <h1 className="schedule__title">
                        Расписание тренировок <br />
                        <span>Fight club</span>
                    </h1>
                    <div className="schedule__buttons">
                        <button onClick={handlePrevWeek}>Предыдущая неделя</button>
                        <div className="sports-tabs">
                            {sports.map(sport => (
                                <button
                                    key={sport.id}
                                    className={`sports-tab ${sport.rusname === currentSport.rusname ? 'active' : ''}`}
                                    onClick={() => handleSportClick(sport)}
                                    style={{ backgroundColor: sport.rusname ? sport.color : '' }}
                                >
                                    {sport.rusname}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleNextWeek}>Следующая неделя</button>
                    </div>

                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>Время</th>

                                {days.map((day, index) => {
                                    return (
                                        <th key={index} className="schedule-date" style={{ backgroundColor: getColorForDay(day) }} scope="col">
                                            {index + 1 == toDay.getDay() ? 'Сегодня' : day.date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })}
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
                                    {days.map((day, dayIndex) => (
                                        <td key={dayIndex} className="schedule-cell schedule-cell-sport">
                                            <Button
                                                onClick={() => onOpen(dayIndex, { time: hour.time, event: getEventForDayAndTime(day, hour.time) })}
                                                variant="text"
                                                fullWidth
                                            ></Button>
                                            {open && selectedDay?.date.getTime() === day.date.getTime() && selectedHour?.time === hour.time && (
                                                <Dialog open={true} onClose={onClose}>
                                                    <DialogTitle>{selectedDay?.date.toLocaleDateString('ru-RU')}</DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText>{selectedHour?.time}</DialogContentText>
                                                        <DialogContentText>{currentSport?.rusname}</DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={onClose} color="primary">
                                                            Закрыть
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Schedule;
