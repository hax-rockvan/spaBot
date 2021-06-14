const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class DebuffCommand extends BaseCommand {
  constructor() {
    super("debuff", "statuseffect", []);
  }

  async run(client, message, args) {
    const debuff = new Discord.MessageEmbed()
      .setTitle("Status Effect - Debuffs")
      .setDescription(
        "Debuffs are status effects which affect your Axies negatively."
      )
      .setThumbnail("https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png")
      .setImage(
        "https://media.discordapp.net/attachments/835962729202319404/853668778720886844/Debuff.png?width=962&height=792"
      );
    message.channel.send(debuff);
  }
};
