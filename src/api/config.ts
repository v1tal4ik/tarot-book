import axios from 'axios';

const openAIClient = axios.create({
	baseURL: 'https://api.openai.com/v1',
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
		'Content-Type': 'application/json',
	},
});

export { openAIClient };
