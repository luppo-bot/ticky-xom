const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = class Invite extends Interaction {
    constructor() {
    super({
        name: "invite",
        description: "get invite link of bot",
        
      });
    }
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

     async exec(int) {

        const embed = new MessageEmbed()
        .setColor("#000001")
        .setAuthor({ name: "Invite!"})
        .setDescription("```\nInvite me to your server!```")
        .setTimestamp()

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setURL(`https://discord.com/oauth2/authorize?client_id=1009839129862869062&permissions=8&scope=bot%20applications.commands`)
                    .setEmoji("🔗")
                    .setStyle("LINK")
            ) 
        
        int.reply({ embeds: [embed], components: [row] });
    }
}
