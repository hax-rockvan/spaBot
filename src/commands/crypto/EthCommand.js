const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const axios = require("axios");

module.exports = class EthCommand extends BaseCommand {
  constructor() {
    super("eth", "crypto", []);
  }

  async run(client, message, args) {
    let ethData = async () => {
      let res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/ethereum"
      );

      let ethData = res.data;
      return ethData;
    };

    let eth = await ethData();

    const ethEmbed = new Discord.MessageEmbed()

      .setTitle(eth.name)
      .setAuthor(
        "CoinGecko",
        "https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"
      )
      .setURL("https://www.coingecko.com/en/coins/ethereum")
      .setThumbnail(
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
      )
      .setTimestamp()
      .setFooter("To The Moon!")
      .setDescription("Current ETH to PHP Rate")

      .addField(
        "ETH",
        Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
        }).format(eth.market_data.current_price.php),
        true
      )
      .addField(
        "Price Change Percentage 24h",
        `${eth.market_data.price_change_percentage_24h_in_currency.php} %`,
        true
      )
      .addField(
        "24h Low / 24h High",
        `${Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
        }).format(eth.market_data.low_24h.php)} / ${Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
        }).format(eth.market_data.high_24h.php)}`
      );

    message.channel.send(ethEmbed);
  }
};
