import { useState, useEffect, useRef } from 'react';
import api from '@lib/api/fetch.client';

export interface Event {
	id: number;
	link: string;
	title: string;
	subtitle: string;
	state: string;
	image: string;
}

export const useEventHook = () => {

    const [eventData, setEventData] = useState<Event[]>([]);

	useEffect(() => {
        // validate 체크
		getData();

    }, []);

	const getData = async () => {
		const events = await api.get('http://localhost:3002/eventList');
		setEventData(events);
	}

    return {
		getData,
        eventData
    };
};
