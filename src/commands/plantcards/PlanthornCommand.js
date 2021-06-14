const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class PlanthornCommand extends BaseCommand {
  constructor() {
    super("planthorn", "plantcards", []);
  }

  run(client, message, args) {
    const planthorn = new Discord.MessageEmbed()
      .setColor("#06D6A0")
      .setTitle("Plant Cards - Horn")
      .setDescription("List of Plant Horn Cards information")
      .setThumbnail(
        "https://storage.googleapis.com/assets.axieinfinity.com/axies/143259/axie/axie-full-transparent.png"
      )
      .addFields(
        {
          name: "Horn Cards",
          value: "(Part Name / Skill Name) - (Energy/Attack/Defense)",
        },
        {
          name: "Bamboo Shoot/Bamboo Clan - 1/80/70",
          value: "Increased 20% damage when chained with another plant card.",
          inline: true,
        },
        {
          name: "Beech/Wooden Stab - 1/105/40",
          value: "Deal 120% damage if this Axie's shield breaks.",
          inline: true,
        },
        {
          name: "Rose Bud/Healing Aroma - 1/0/40",
          value: "Heal this Axie for 120 HP.",
          inline: true,
        },
        {
          name: "Strawberry Shortcake/Sweet Party - 2/0/0",
          value:
            "Heal front teammate for 270 HP. If there are no front teammates, heal this Axie instead.",
          inline: true,
        },
        {
          name: "Cactus/Prickly Trap - 1/110/20",
          value: "Deal 120% damage if this Axie attacks last.",
          inline: true,
        },
        {
          name: "Watermelon/Seed Bullet - 1/30/30",
          value: "Target the fastest enemy.",
          inline: true,
        }
      );

    message.channel.send(planthorn);
  }
};
