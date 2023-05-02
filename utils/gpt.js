const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(config);

const generateFood = async () => {

    const prompt = "Give one example of a shareable dish to bring to a cookout. Stop after one sentence."

    const response = await openai.createCompletion({
        model: 'text-curie-001', 
        prompt: prompt, 
        max_tokens: 32,
        temperature: 0.5, 
    });

    console.log(response.data.choices[0].text); 
    return response.data.choices[0].text
}


generateFood();