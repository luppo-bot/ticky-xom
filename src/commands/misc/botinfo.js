const { MessageEmbed, MessageButton, MessageActionRow, Client } = require("discord.js");
const moment = require("moment");
const Bot = require("../../struct/Bot");
const ms = require('ms');
const chalk = require('chalk');


module.exports = class botinfo extends Interaction {
  constructor() {
  super({
      name: "botinfo",
      description: "show bot information!",
      
    });
  }
  async exec(int) {
    

    let embed = new MessageEmbed()
    .setTitle(`Help`)  
    .setColor("#2f3136")

      embed

      .addField(':stopwatch: Uptime', `${ms(this.client.uptime)}`, true)
      .addField('<a:statusping:1008817677499912376> WebSocket Ping', `${this.client.ws.ping}ms`, true)
      .addField('<:ram:1008822055812210918> Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
      .addField('<:developer:1008449049717911654> Developers', `<@755566952449310842>`, true)
      .addField('<:server:1008816761493262420> Guild Count', `${this.client.guilds.cache.size} guilds`, true)
      .addField(`<:user:1008816981929107457> User Count`, `${this.client.users.cache.size} users`, true)
      .addField('<:node:994985829913067571> Node', `${process.version} on ${process.platform} ${process.arch}`, true)
      .addField('<:channel:1008818899137089596> Channel Count', `${this.client.channels.cache.size}`, true)
      .addField('<:slashcommand:1008821061523087410> Command Count', `${this.client.commands.map(c => c.name).length}`, true)
      .setTimestamp()
      .setColor("#3498DB");

    const row = new MessageActionRow()
        .addComponents(
         new MessageButton()
         .setLabel("Invite")
         .setStyle("LINK")
         .setURL(`https://discord.com/oauth2/authorize?client_id=1009839129862869062&permissions=8&scope=bot%20applications.commands`)
         .setEmoji("989105142219563008")
        )
        .addComponents(
          new MessageButton()
          .setLabel("Support")
          .setStyle("LINK")
          .setURL(`https://discord.gg/UybeVq66hF`)
          .setEmoji("989105545946497055")
         )


    return int.reply({ embeds: [embed], components: [row] });
  }
};
