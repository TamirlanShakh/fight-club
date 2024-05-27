export interface ISendForm {
    id: number | string;
    name: string;
    phone: string;
}

export interface SendFormState {
    sendforms: ISendForm[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string;
}
