// Die Trying

const config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client({messageCacheMaxSize: 25, messageCacheLifetime: 300, messageSweepInterval: 150, fetchAllMembers: true, disabledEvents: ['TYPING_START', 'TYPING_STOP']});

client.on('ready', () => {
    console.log("I'm ready to roll.");
    console.log(config);
});

client.on('guildMemberAdd', (member) => {
    if (member.guild.id !== config.guild) return;
    if (member.user.bot) return;
    let role = member.guild.roles.get(config.roles.user);
    member.addRole(role);
});

client.on('message', (message) => {
    if (message.guild.id !== config.guild) return;
    if (message.content === "!ping") return message.reply("pong!");
});

client.login(config.token);
