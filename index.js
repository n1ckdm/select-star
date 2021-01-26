require('dotenv').config();

const eightball = require('8ball')
const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('message', msg => {
    if (message.author.bot) return false;
    
    if (message.mentions.has(client.user.id) && msg.content.endsWith("?")) {
        msg.reply(eightball());
    }
})