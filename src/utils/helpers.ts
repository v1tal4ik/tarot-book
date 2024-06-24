export const getOpenAiBody = (question: string) => {
	return {
		model: 'gpt-4o',
		messages: [
			{
				role: 'system',
				content: [
					{
						type: 'text',
						text: `Your are a tarot reader. PLease answer YES or NO with short explanation to the user answer based on the draw card.
                        User the following schema for reply:
                        {
                            "answer":"YES" | "NO",
                            "explanation":"answer to user question"
                        }
                        `,
					},
				],
			},
			{
				role: 'user',
				content: [
					{
						type: 'text',
						text: `Draw tarot card: magic wand
                        Question:${question}
                        `,
					},
				],
			},
		],
		temperature: 1,
		max_tokens: 925,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	};
};
