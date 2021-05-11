/* eslint-disable no-unused-vars */
module.exports = {
	name: "prep",
	description: "sets up the server for use",
	execute(message, args) {
		message.guild.channels.create(`announcements`,{
			type: `text`,
			reason: `This channel is read-only for everyone. Only Admins can write here.`,
			permissionOverwrites: [
				{
					id: message.guild.roles.everyone,
					allow: [`VIEW_CHANNEL`, `READ_MESSAGE_HISTORY`],
					deny: [`SEND_MESSAGES`, `CREATE_INVITE`]
				}
			]
		})
		.then(console.log)
		.catch(console.error);

	}
};