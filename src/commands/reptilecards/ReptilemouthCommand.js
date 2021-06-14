const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class ReptilemouthCommand extends BaseCommand {
  constructor() {
    super("reptilemouth", "reptilecards", []);
  }

  run(client, message, args) {
    const reptilemouth = new Discord.MessageEmbed()
      .setColor("#EF93FF")
      .setTitle("Reptile Cards - Mouth")
      .setDescription("Reptile Mouth Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/1733/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853722959814066196/reptile_mouth.png"
      );

    message.channel.send(reptilemouth);
  }
};
