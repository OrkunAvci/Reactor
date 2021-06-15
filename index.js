/* eslint-disable no-unused-vars */
const Discord = require(`discord.js`);
const client = new Discord.Client();

const fs = require(`fs`);

const {
	token,
	channelName
} = require(`./config.json`);

let {
	prefix
} = require(`./config.json`);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(f => f.endsWith(`.js`));

for (const cf of commandFiles) {
	const command = require(`./commands/${cf}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! Bot is up and ready!`);
});

client.on('message', message => {

	const messageChannel = message.guild.channels.cache.find(
		(c) => c.name === channelName
	);
	if (message.channel === messageChannel && !message.content.startsWith(prefix) && !message.author.bot) {
		message.react("🇦");
		message.react("🇧");
		message.react("🇨");
		message.react("🇩");
		message.react("🇪");
		return;
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (command === `prefix`) {
		prefix = args[0];
	} else if (client.commands.get(command) === undefined) {
		message.reply(`no ${command} command exists. Refer to documentation.`)
			.then((msg) => {
				msg.delete({
					timeout: 3000
				});
			});
	} else {
		client.commands.get(command).execute(message, args);
	}

});

client.login(token);