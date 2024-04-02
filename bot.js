const { Telegraf } = require('telegraf');
const axios = require('axios')

const bot = new Telegraf("7029601267:AAHByV5mCYf1Hpqr5Wh_nxq3m9L1H3r36bM");
bot.start((ctx) => ctx.reply('Welcome'));



// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.on ('message',async (ctx) => {
    if('ctx.message.location'){
        const weatherAPIUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=2c6164b68c36483a35e3c1df1fe1b827`
        const response = await axios.get(weatherAPIUrl);
        ctx.reply(`${response.data.name}: ${response.data.weather[0].main} ${response.data.main.temp} °C`);
    }
  } )

  bot.launch();