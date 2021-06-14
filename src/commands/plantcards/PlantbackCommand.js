const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class PlantbackCommand extends BaseCommand {
  constructor() {
    super("plantback", "plantcards", []);
  }

  run(client, message, args) {
    const plantback = new Discord.MessageEmbed()
      .setColor("#06D6A0")
      .setTitle("Plant Cards - Back")
      .setDescription("List of Plant Back Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/143259/axie/axie-full-transparent.png"
      )
      .addFields(
        {
          name: "Back Cards",
          value: "(Part Name / Skill Name) - (Energy/Attack/Defense)",
        },
        {
          name: "Turnip/Turnip Rocket - 1/60/80",
          value: "Target a bird if comboed with 2 or more cards.",
          inline: true,
        },
        {
          name: "Shitake/Shroom's Grace - 1/0/40",
          value: "Heal this Axie for 120 HP.",
          inline: true,
        },
        {
          name: "Bidens/Cleanse Scent - 0/0/50",
          value: "Remove all debuffs from this Axie.",
          inline: true,
        },
        {
          name: "Watering Can/Aqua Stock - 1/45/80",
          value: "Gain 1 energy if this Axie is struck by an Aquatic card.",
          inline: true,
        },
        {
          name: "Mint/Refresh - 0/0/50",
          value:
            "Remove all debuffs from a teammate if its directly in front (same row) of this Axie.",
          inline: true,
        },
        {
          name: "Pumpkin/October Treat - 1/0/115",
          value: "Draw a card if this Axie's shield doesn't break this round.",
          inline: true,
        }
      );

    message.channel.send(plantback);
  }
};
