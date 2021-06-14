const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class ReminderCommand extends BaseCommand {
  constructor() {
    super("reminder", "help", []);
  }

  async run(client, message, args) {
    const reminder = new Discord.MessageEmbed()
      .setColor("#ffff3f")
      .setTitle("Important Reminder")
      .setDescription("Sexty needs to pay P1,200 to Rockvan");
    message.channel.send(reminder);
  }
};
