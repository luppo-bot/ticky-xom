const server = require("../../models/Suggestion");
    
  module.exports = class SetSuggestion extends Interaction {
  constructor() {
    super({
      name: "setsuggestions",
      description: "configure the suggestion system.",
      options: [
        {
          type: 'CHANNEL',
          name: "channel",
          description: "mention a channel or leave empty to remove it",
          required: true,
          channelTypes: ['GUILD_NEWS', 'GUILD_TEXT'],
          required: false
        },
      ],
    });
  }

    async exec(int) {

        let data = await server.findById(int.guildId);

        if (!data) data = new server({
            _id: int.guildId
        });

        const channel = int.options.getChannel('channel')

        if (!channel) {
            if (!data.channel.suggestions)
                return int.reply({
                    content: `No configuration found, mention a channel to set the suggestion system`,
                    ephemeral: true
                });

            data.channel.suggestions = null;
            await data.save();

            return int.reply({
                content: `The suggestion system has been successfully disabled`
            });
        }

        if (channel.id == data.channel.suggestions)
            return int.reply({
                content: `This is already the suggestion channel`,
            });

        data.channel.suggestions = channel.id;
        await data.save();

        return int.reply({
            content: `The suggestion channel has been successfully set up [ ${channel} ]`
        });
    }
};
