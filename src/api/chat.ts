import { getOpenAiBody } from 'src/utils/helpers';
import { openAIClient } from './config';
import { IAssistantOpenAiResponse, IMessageContent } from 'src/interfaces';

export const fetchTarotAnswer = (question: string): Promise<IMessageContent> => {
	return openAIClient
		.post<IAssistantOpenAiResponse>('/chat/completions', JSON.stringify(getOpenAiBody(question)))
		.then(({ data }) => JSON.parse(data.choices[0].message.content));
};
