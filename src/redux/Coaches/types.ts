export interface ICoach {
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

export interface CoachState {
    coaches: ICoach[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string;
}
