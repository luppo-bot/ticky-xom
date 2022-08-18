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

      .addField('Uptime', `${ms(this.client.uptime)}`, true)
      .addField('WebSocket Ping', `${this.client.ws.ping}ms`, true)
      .addField('Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
      .addField('Owner', `<@755566952449310842>`, true)
      .addField('Guild Count', `${this.client.guilds.cache.size} guilds`, true)
      .addField(`User Count`, `${this.client.users.cache.size} users`, true)
      .addField('Node', `${process.version} on ${process.platform} ${process.arch}`, true)
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
