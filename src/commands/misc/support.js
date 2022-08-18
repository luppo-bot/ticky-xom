const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = class Support extends Interaction {
    constructor() {
    super({
        name: "support",
        description: "get support server link of bot",
        
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
        .setAuthor({ name: "Support!"})
        .setDescription("```\nJoin My Support server!```")
        .setTimestamp()

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Support")
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=1007212537076535376&permissions=8&scope=bot%20applications.commands`)
                    .setEmoji("🔗")
                    .setStyle("LINK")
            ) 
        
        int.reply({ embeds: [embed], components: [row] });
    }
}

