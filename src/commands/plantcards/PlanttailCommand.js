const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class PlanttailCommand extends BaseCommand {
  constructor() {
    super("planttail", "plantcards", []);
  }

  run(client, message, args) {
    const planttail = new Discord.MessageEmbed()
      .setColor("#06D6A0")
      .setTitle("Plant Cards - Tail")
      .setDescription("List of Plant Tail Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/143259/axie/axie-full-transparent.png"
      )
      .addFields(
        {
          name: "Tail Cards",
          value: "(Part Name / Skill Name) - (Energy/Attack/Defense)",
        },
        {
          name: "Carrot/Carrot Hammer - 1/70/40",
          value: "Draw a card if this Axie's shield doesn't break this round.",
          inline: true,
        },
        {
          name: "Cattail/Cattail Slap - 0/20/30",
          value: "Draw a card if struck by a Beast, Bug, or Mech card.",
          inline: true,
        },
        {
          name: "Hatsune/Leek Leak - 1/60/80",
          value: "When hit, disable the attacker's ranged cards next round.",
          inline: true,
        },
        {
          name: "Yam/Gas Unleash - 1/30/20",
          value:
            "Apply poison each time this card is used to attack or defend.",
          inline: true,
        },
        {
          name: "Potato Leaf/Aqua Deflect - 1/70/80",
          value:
            "Cannot be targeted by Aquatic cards if this Axie has teammates remaining.",
          inline: true,
        },
        {
          name: "Hot Butt/Spicy Surprise - 1/90/50",
          value: "Disable target's mouth cards next round.",
          inline: true,
        }
      );

    message.channel.send(planttail);
  }
};
