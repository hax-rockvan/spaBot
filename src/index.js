const { Client } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
/* const config = require("../slappey.json"); */
const client = new Client();
const bottoken = process.env['BOTTOKEN']
const prefix = process.env['PREFIX']
const keepAlive = require('./server.js');

async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  keepAlive();
  await client.login(process.env.bottoken);

  console.log(prefix)
};

