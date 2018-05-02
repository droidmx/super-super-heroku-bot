const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
bot.on('message', message => {
    if (message.content === 'test') {
    	message.reply('working, active');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
