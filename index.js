require('dotenv').config();

const eightball = require('8ball')
const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('message', msg => {
    if (msg.author.bot) return false;

    if (msg.mentions.has(bot.user.id) && msg.content.endsWith("?")) {
        msg.reply(eightball());
    }
})