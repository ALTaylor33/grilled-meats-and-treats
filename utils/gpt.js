const openai = require('openai');
const prompt = "Generate a random cookout food:";
const apiKey = "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";
const maxTokens = 15;
const temperature = 0.6;
const modelEngine = "text-davinci-002";

openai.api_key = apiKey;

function generateRandomFood() {
  return openai.Completion.create({
    engine: modelEngine,
    prompt: prompt,
    temperature: temperature,
    max_tokens: maxTokens
  }).then(response => {
    const food = response.choices[0].text.trim();
    return food;
  })
  console.log(food);
}


