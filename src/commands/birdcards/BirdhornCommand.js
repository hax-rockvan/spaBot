const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class BirdhornCommand extends BaseCommand {
  constructor() {
    super("birdhorn", "birdcards", []);
  }

  async run(client, message, args) {
    const birdhorn = new Discord.MessageEmbed()
      .setColor("#EF476F")
      .setTitle("Bird Cards - Horn")
      .setDescription("Bird Horn Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/149200/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853721360881418260/bird_horn.png"
      );

    message.channel.send(birdhorn);
  }
};
