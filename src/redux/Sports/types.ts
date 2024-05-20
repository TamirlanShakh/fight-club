export interface ISport {
    id: string;
    name: string;
    rusname: string;
    color: string;
}

export interface SportState {
    sports: ISport[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string;
}
