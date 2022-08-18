const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const moment = require("moment");
const Bot = require("../../struct/Bot");

module.exports = class help extends Interaction {
  constructor() {
  super({
      name: "help",
      description: "Return all commands!",
      
    });
  }
  async exec(int) {
    

    let embed = new MessageEmbed()
    .setTitle(`Help`)  
    .setColor("#2f3136")
    
    embed

      .addField("Information Commands", `help, whois, invite, support`)
      .addField("Config Commands", `roles, set, unset, ticket-panel`)
      .addField("Ticket Commands", `add, close, delete, open, remove, reopen, transcript`)
      .setFooter(`ID:`);

    const row = new MessageActionRow()
        .addComponents(
         new MessageButton()
         .setLabel("Invite")
         .setStyle("LINK")
         .setURL(`https://youtube.com`)
        )
        .addComponents(
          new MessageButton()
          .setLabel("Support")
          .setStyle("LINK")
          .setURL(`https://youtube.com`)
         )


    return int.reply({ embeds: [embed], components: [row] });
  }
};
