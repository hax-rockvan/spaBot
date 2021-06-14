const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class BirdmouthCommand extends BaseCommand {
  constructor() {
    super("birdmouth", "birdcards", []);
  }

  async run(client, message, args) {
    const birdmouth = new Discord.MessageEmbed()
      .setColor("#EF476F")
      .setTitle("Bird Cards - Mouth")
      .setDescription("Bird Mouth Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/149200/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853721374409359360/bird_mouth.png"
      );

    message.channel.send(birdmouth);
  }
};
