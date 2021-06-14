const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class PlantmouthCommand extends BaseCommand {
  constructor() {
    super("plantmouth", "plantcards", []);
  }

  run(client, message, args) {
    const plantmouth = new Discord.MessageEmbed()
      .setColor("#06D6A0")
      .setTitle("Plant Cards - Mouth")
      .setDescription("List of Plant Mouth Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/143259/axie/axie-full-transparent.png"
      )
      .addFields(
        {
          name: "Mouth Cards",
          value: "(Part Name / Skill Name) - (Energy/Attack/Defense)",
        },
        {
          name: "Serious/Vegetal Bite - 1/30/30",
          value:
            "Steal 1 energy from your opponent when comboed with another card.",
          inline: true,
        },
        {
          name: "ZigZag/Drain Bite - 1/55/55",
          value: "Heal this Axie by the damage this card inflicts.",
          inline: true,
        },
        {
          name: "Herbivore/Vegan Diet - 1/65/65",
          value:
            "Heal this Axie by the damage this card inflicts on a Plant target.",
          inline: true,
        },
        {
          name: "Silence Whisper/Forest Spirit - 1/0/40",
          value: "Heal front teammate for 190 HP.",
          inline: true,
        }
      );

    message.channel.send(plantmouth);
  }
};
