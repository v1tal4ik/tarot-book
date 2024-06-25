export interface IPredefinedQuestion {
	id: number;
	text: string;
}

export type QuestionFormData = {
	question: string;
};

export interface IMessageContent {
	answer: string;
	explanation: string;
}

export interface IAssistantOpenAiResponse {
	choices: {
		finish_reason: string;
		index: number;
		logprobs: string | null;
		message: {
			content: string;
			role: 'assistant';
		};
	}[];
	created: number;
	id: string;
	model: string;
	object: string;
	system_fingerprint: string;
	usage: Record<string, number>;
}

export interface IPsychic {
	id: string;
	imageUrl: string;
	name: string;
	price: number;
}
