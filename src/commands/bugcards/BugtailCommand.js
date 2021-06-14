const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class BugtailCommand extends BaseCommand {
  constructor() {
    super("bugtail", "bugcards", []);
  }

  async run(client, message, args) {
    const bugtail = new Discord.MessageEmbed()
      .setColor("#d00000")
      .setTitle("Bug Cards - Tail")
      .setDescription("Bug Tail Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/448864/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853722250350690315/bug_tail.png"
      );

    message.channel.send(bugtail);
  }
};
