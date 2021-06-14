const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class ReptiletailCommand extends BaseCommand {
  constructor() {
    super("reptiletail", "reptilecards", []);
  }

  run(client, message, args) {
    const reptiletail = new Discord.MessageEmbed()
      .setColor("#EF93FF")
      .setTitle("Reptile Cards - Tail")
      .setDescription("Reptile Tail Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/1733/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853722977781940254/reptile_tail.png"
      );

    message.channel.send(reptiletail);
  }
};
