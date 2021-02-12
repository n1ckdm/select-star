"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var _8ball_1 = require("8ball");
var Discord = require("discord.js");
var lib_1 = require("./lib");
dotenv.config();
var bot = new Discord.Client();
var TOKEN = process.env.TOKEN;
bot.login(TOKEN);
bot.on('message', function (msg) {
    if (msg.author.bot)
        return false;
    if (msg.mentions.has(bot.user.id) && msg.content.endsWith("?")) {
        msg.reply(_8ball_1.default());
    }
});
lib_1.default();
