/* eslint-disable no-unused-vars */
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
      await message.delete();
      await channel.messages.fetch({limit: 100})
        .then((messages) => {
          const messagesArr = messages.array();

          for (const msg of messagesArr) {
            msg.react("🇦");
            msg.react("🇧");
            msg.react("🇨");
            msg.react("🇩");
            msg.react("🇪");
          }

          return messages.size;
        })
        .then((msgNum) => {
          return channel.send(`Reacting to ${msgNum} messages.`);
        })
        .then((msg) => {
          msg.delete({
            timeout: 3000
          });
        });
      return;
    } else {
      message.reply("Wrong channel. Try again.");
      return;
    }
  }
};