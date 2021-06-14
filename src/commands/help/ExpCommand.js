const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class ExpCommand extends BaseCommand {
  constructor() {
    super("exp", "help", []);
  }

  async run(client, message, args) {
    const exp = new Discord.MessageEmbed()
      .setTitle("Adventure Experience Guide")

      .setThumbnail("https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png")
      .setImage(
        "https://cdn.discordapp.com/attachments/835962729202319404/854085115537260574/experience_guide.png"
      );

    message.channel.send(exp);
  }
};
