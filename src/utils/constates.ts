import { IMessageContent } from 'src/interfaces';
import ProfileAvatar from 'src/assets/images/avatar-admin.svg';

export const MAIN_ROUTES = [
	{ label: 'Advisors', path: '#' },
	{ label: 'Chats', path: '#' },
	{ label: 'Articles', path: '#' },
	{ label: 'Horoscope', path: '#' },
	{ label: 'Tarot', path: '#' },
];

export const ADMIN_USER = {
	name: 'Samanta Johnson',
	img: ProfileAvatar,
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
