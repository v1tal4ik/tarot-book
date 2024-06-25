import { IMessageContent, IPsychic } from 'src/interfaces';
import ProfileAvatar from 'src/assets/images/avatar-admin.svg';
import Psychic_1 from 'src/assets/images/psychic-1.svg';
import Psychic_2 from 'src/assets/images/psychic-2.svg';
import Psychic_3 from 'src/assets/images/psychic-3.svg';

export const MAIN_ROUTES = [
	{ label: 'Advisors', path: '#' },
	{ label: 'Chats', path: '#' },
	{ label: 'Articles', path: '#' },
	{ label: 'Horoscope', path: '#' },
	{ label: 'Tarot', path: '#' },
];

export const ADMIN_USER = {
	name: 'Samanta Johnson',
	imgURL: ProfileAvatar,
};

export const PREDEFINED_QUESTIONS = [
	{ id: 1, text: 'Should I come back to my ex?' },
	{ id: 2, text: 'Will I get a promotion?' },
	{ id: 3, text: 'Do I know my soulmate already?' },
];

export const ERROR_MESSAGE: IMessageContent = {
	answer: 'unknown',
	explanation: 'failed to get answer, try again please.',
};

export const PSYCHIC_ARR: Array<IPsychic> = [
	{ id: '1', imageUrl: Psychic_1, name: 'Darrell S', price: 12.99 },
	{ id: '2', imageUrl: Psychic_2, name: 'Miranda S', price: 15.99 },
	{ id: '3', imageUrl: Psychic_3, name: 'Lukla P', price: 17.99 },
];
