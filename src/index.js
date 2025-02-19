require("dotenv").config();
const { token } = process.env;

const { join } = require("path");
const { CommandoClient } = require("discord.js-commando");

const client = new CommandoClient({
  owner: "682715516456140838",
  commandPrefix: "-",
});

client.once("ready", async () => {
  console.log("Gary is ready :)");

  client.user.setActivity(`${client.commandPrefix}help`, {
    type: "LISTENING",
  });

  client.registry
    .registerGroups([["misc", "Misc commands"]])
    .registerDefaults()
    .registerCommandsIn(join(__dirname, "commands"));
});

client.on("message", (message) => {
  if (
    message.channel.id == "885259801309876254" &&
    !message.content.startsWith(`${client.commandPrefix}suggest`)
  )
    message.delete();
});

client.login(token);
