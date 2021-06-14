const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class AquaticbackCommand extends BaseCommand {
  constructor() {
    super("aquaticback", "aquaticcards", []);
  }

  async run(client, message, args) {
    const aquaticback = new Discord.MessageEmbed()
      .setColor("#118AB2")
      .setTitle("Aquatic Cards - Back")
      .setDescription("Aquatic back Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/54152/axie/axie-full-transparent.png"
      )
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853716221186932796/aquatic_back.png"
      );

    message.channel.send(aquaticback);
  }
};
