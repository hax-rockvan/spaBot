const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class PlantcardsCommand extends BaseCommand {
  constructor() {
    super("plantcards", "plantcards", []);
  }

  run(client, message, args) {
    const plantcards = new Discord.MessageEmbed()
      .setColor("#06D6A0")
      .setTitle("Plant Cards")
      .setDescription("List of All Plant Cards information")
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
        },
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
        },
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
        },
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

    message.channel.send(plantcards);
  }
};
