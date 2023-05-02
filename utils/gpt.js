const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: "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" // temp key attached to eric's account. DO NOT SHARE
});

const openai = new OpenAIApi(config);

const generateFood = async () => {

    const prompt = "Name a shareable dish to bring to a cookout. Stop after one sentence." //Change this to change AI input (longer is more expensive)

    const response = await openai.createCompletion({
        model: 'text-curie-001', // language model, look up options to change (current option is cheapest text model)
        prompt: prompt, 
        max_tokens: 32,   // Output max length (longer is more expensive)
        temperature: 0.5, // randomness setting (can be set between 0 and 1)
    });

    // console.log(response.data.choices[0].text); 
    return response.data.choices[0].text
}


// generateFood();