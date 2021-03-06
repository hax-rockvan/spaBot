const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class BughornCommand extends BaseCommand {
  constructor() {
    super("bughorn", "bugcards", []);
  }

  async run(client, message, args) {
    const bughorn = new Discord.MessageEmbed()
      .setColor("#d00000")
      .setTitle("Bug Cards - Horn")
      .setDescription("Bug Horn Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/448864/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853722227714162728/bug_horn.png"
      );

    message.channel.send(bughorn);
  }
};
