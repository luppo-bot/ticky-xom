module.exports = class InteractionCreate extends Event {
  constructor() {
    super({
      name: "interactionCreate",
      once: false,
    });
  }
  async exec(interaction) {
    if (interaction.guild) {
      const data = await this.client.getGuild({
        _id: interaction.guildId,
      });
      /* Slash commands */
      if (interaction.isCommand())
        return this.client.emit("slashCommands", interaction, data);
      /* User commands (when right click on an username) */
      if (interaction.isContextMenu())
        return this.client.emit("slashCommands", interaction, data);

      if (interaction.isButton())
        return this.client.emit("buttonPress", interaction, data);

     // ADD THIS INTO YOUR INTERACTION CREATE EVENT
     const fetchBlacklist = await db.get(`blacklist_${interaction.user.id}`) // fetch the interaction user if they are blacklisted

     if(fetchBlacklist) {
    return interaction.reply({ content: `> **Sorry <@${interaction.user.id}> but you are currently blacklisted from using this bot**`})
}
// -------------------------------------------------------------------------------------------------

    }
  }
};
