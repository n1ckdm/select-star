import * as dotenv from 'dotenv';
import eightball from '8ball';
import * as Discord from 'discord.js';

import { echo } from './lib';

dotenv.config();

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('message', msg => {
    if (msg.author.bot) return false;

    if (msg.mentions.has(bot.user.id) && msg.content.endsWith("?")) {
        msg.reply(eightball());
    }

    if (msg.mentions.has(bot.user.id) && msg.content.includes("check library")) {
        msg.reply(echo())
    }
})