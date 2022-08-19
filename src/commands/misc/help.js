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

      .addField("<:info:1007308847175712780> Information Commands", `help, whois, invite, support`)
      .addField("<:gears:1009169023495327784> Config Commands", `roles, set, unset, ticket-panel`)
      .addField(":tickets: Ticket Commands", `add, close, delete, open, remove, reopen, transcript`)

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
