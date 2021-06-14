const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class AquatichornCommand extends BaseCommand {
  constructor() {
    super("aquatichorn", "aquaticcards", []);
  }

  async run(client, message, args) {
    const aquatichorn = new Discord.MessageEmbed()
      .setColor("#118AB2")
      .setTitle("Aquatic Cards - Horn")
      .setDescription("Aquatic Horn Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/54152/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853716243369295922/aquatic_horn.png"
      );

    message.channel.send(aquatichorn);
  }
};
