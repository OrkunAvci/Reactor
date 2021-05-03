/* eslint-disable no-unused-vars */
const Discord = require(`discord.js`);
const client = new Discord.Client();

const fs = require(`fs`);

const {
	token,
	prefix
} = require(`./config.json`);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(f => f.endsWith(`.js`));

for (const cf of commandFiles) {
	const command = require(`./commands/` + cf);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! Bot is up and ready!`);
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (message.content === `--ping`) {
		message.channel.send('Pong.');
	} else if (message.content.includes(`?`)) {
		client.commands.get(`react_q`).execute(message);
	} else if (command === `react`) {
		client.commands.get(`react`).execute(message);
	} else if (command === `clear`) {
		client.commands.get(`clear`).execute(message, args);
	} else {
		return;
	}

});


client.login(token);