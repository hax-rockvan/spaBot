const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MultiaccountCommand extends BaseCommand {
  constructor() {
    super('multiaccount', 'help', []);
  }

  async run(client, message, args) {
    const multiaccount = new Discord.MessageEmbed()
      .setColor('#ffff3f')
      .setTitle('Multi Account')
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/458900645970313216/853283460793499668/attach.png'
      );
    message.channel.send(multiaccount);
  }
};
