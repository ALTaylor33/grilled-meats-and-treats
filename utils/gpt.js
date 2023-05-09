const hbs = expbs.create({

helpers: {
    randomFood: function() {

      const { Configuration, OpenAIApi } = require('openai');

      require('dotenv').config({path:'../.env'})

      const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const openai = new OpenAIApi(config);

      const generateFood = async () => {

          const prompt = "As a chef, give a single suggestion and basic description of a food apporopriate for sharing at a casual cookout" //Change this to change AI input (longer is more expensive)

         const response = await openai.createCompletion({
              model: 'text-davinci-002', // language model, look up options to change (current option is cheapest text model)
              prompt: prompt, 
              max_tokens: 100,   // Output max length (longer is more expensive)
             temperature: 0.5, // randomness setting (can be set between 0 and 1)
          });

         // console.log(response.data.choices[0].text); // uncomment this (1/2) to test
          return response.data.choices[0].text
      }


      // generateFood(); // uncomment this (2/2) to test
    }
  }
})