const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
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

      .addField('Uptime', `${ms(client.uptime)}`, true)
      .setFooter(`ID:`);

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
