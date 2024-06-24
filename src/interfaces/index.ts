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

export interface IChoices {
	finish_reason: string;
	index: number;
	logprobs: string | null;
	message: {
		content: string;
		role: 'assistant';
	};
}

export interface IAssistantOpenAiResponse {
	choices: Array<IChoices>;
	created: number;
	id: string;
	model: string;
	object: string;
	system_fingerprint: string;
	usage: Record<string, number>;
}
