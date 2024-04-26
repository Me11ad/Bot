require('dotenv').config();
const { Telegraf } = require('telegraf');
const axios = require('axios')

const bot = new Telegraf("7029601267:AAHByV5mCYf1Hpqr5Wh_nxq3m9L1H3r36bM");
bot.start((ctx) => ctx.reply('Отправьте свою геолокацию для знания погоды'));


bot.on ('message',async (ctx) => {
    if(ctx.message.location){
        const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&lang=ru&appid=b3e8e66d34e5a4fe0ed12782ec604b30&units=metric`
        const response = await axios.get(weatherAPIUrl);
        ctx.reply(`${response.data.name}: ${response.data.weather[0].main} ${response.data.main.temp} °C`);
    }
  } )

  bot.launch();