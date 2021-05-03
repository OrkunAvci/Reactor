const {
  channelName
} = require("../config.json");

module.exports = {
  name: "react",
  description: "add reactions to all messages in a specific channel",
  async execute(message) {
    const channel = message.guild.channels.cache.find((c) => c.name === channelName);

    if (!channel) {
      return message.reply("channel doesn't exist.");
    }

    if (message.channel === channel) {
      await message.channel.messages.fetch()
        .then((messages) => {
          const messagesArr = messages.array();

          for (const msg of messagesArr) {
            msg.react("🇦");
            msg.react("🇧");
            msg.react("🇨");
            msg.react("🇩");
            msg.react("🇪");
          }
        });
      return;
    } else {
      message.reply("Wrong channel. Try again.");
      return;
    }
  }
};