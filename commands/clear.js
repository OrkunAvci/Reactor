module.exports = {
	name: "clear",
	description: "bulk delete",
	execute(message, args) {

		const numToDelete = parseInt(args[0]);

		if (isNaN(numToDelete)) {
			return message.reply(`arguments can only be numbers. Try --clear 5.`);
		} else if (numToDelete < 2 || 100 < numToDelete) {
			return message.reply(`number must be between 2 and 100, and bot cannot delete messages older than two weeks.`);
		}

		message.channel.bulkDelete(args[0])
			.then(() => {
				return message.channel.send(`Deleted up to ${numToDelete} messages.`);
			})
			.then((msg) => {
				msg.delete({
					timeout: 3000
				});
			});
	}
};