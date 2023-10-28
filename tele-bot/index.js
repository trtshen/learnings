const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

const bot = new TelegramBot(botToken, { polling: true });


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userInput = msg.text;

  const configuration = new Configuration({
    apiKey: openaiApiKey,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `The user asked:\n${userInput}\n\nChatGPT's response:`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.8,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    /* const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: ",
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    }); */

    // const chatGptResponse = response.data.choices[0].text.trim();
    console.log(response);
    bot.sendMessage(chatId, response.data);
  } catch (error) {
    console.log(JSON.stringify(error));
    console.error('Error:', error.message);
    bot.sendMessage(chatId, 'Oops! Something went wrong. Please try again.');
  }
});
