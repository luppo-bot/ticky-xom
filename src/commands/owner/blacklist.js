
// BLACKLIST COMMAND
const db = require('quick.db')

  module.exports = class Blacklist extends Interaction {
  constructor() {
    super({
      name: "blacklist",
      description: "restrict a user from using slash commands",
      options: [{
        type: 'SUB_COMMAND',
        name: 'add',
        description: 'Add a user to your blacklist list',
        options: [{
            type: 'USER',
            name: 'user',
            description: 'Tag the user that you want to blacklist',
            required: true
        }]
    }, {
        type: 'SUB_COMMAND',
        name: 'remove',
        description: 'Remove a user out of your blacklist list',
        options: [{
            type: 'USER',
            name: 'user',
            description: 'Tag the user that you want to un-blacklist',
            required: true
        }]
    }, {
        type: 'SUB_COMMAND',
        name: 'list',
        description: 'List all of the users that is blacklisted'
    }],
    });
  }
    
    async exec(int) {

        try {

            await int.deferReply({ ephemeral: true }) // defer'ring the reply so nobody will be able to see it

            // GLOBAL DECLARATIONS
            const sbc = int.options.getSubcommand() // get the subcommand

            const user = await int.options.getUser('user') // get the user option

            const yourID = '836499734058237982' // your discord id
            const fetchOwner = await client.users.fetch(yourID) // fetch the developer of the bot to tag them for bootyful message


            // BLACKLIST
            if (sbc === 'add') {
                /* -------------- CODE -------------- */
                const userDB = await db.get(`blacklist_${user.id}`) // fetch the database

                if (int.user.id !== yourID) return int.editReply({ content: `> **Only ${fetchOwner.tag} can use this command**` }) // if the user interaction isn't you return an error
                if (user.id === yourID) return int.editReply({ content: '> **You can\'t blacklist this user**' }) // return an error if the blacklister is trying to blacklist you, i'm just gonna put my id since im gonna use this command in the future


                if (userDB) {
                    return int.editReply({ content: `> **<@${fetchOwner.id}> You have already blacklisted this user**` })
                } else {
                    const banDate = Number(String(Date.now()).slice(0, -3))
                    await db.set(`blacklist_${user.id}`, banDate) // blacklist the user
                    return int.editReply({ content: `> **<@${fetchOwner.id}> You have successfully blacklisted <@${user.id}>**` }) // return successfully message
                }

                /* -------------- END OF CODE -------------- */
            }

            // UNBLACKLIST
            if (sbc === 'remove') {
                const userDB = await db.get(`blacklist_${user.id}`) // fetch the database

                if (!userDB) {
                    return int.editReply({ content: `> **<@${user.id}> is not blacklisted**` }) // the tagged user isnt blacklisted
                } else {
                    await db.delete(`blacklist_${user.id}`)
                    return int.editReply({ content: `> **I have successfully removed <@${user.id}> from blacklist list**` })
                }
            }

            // LIST
            if (sbc === 'list') {
                const fetchDB = await db.fetchAll() // fetching the blacklisted users

                let blacklistList = ''; // the message the are going to be sent

                if (fetchDB.length === 0) {
                    blacklistList += '> ┠╴***There are no blacklisted user***' // there are no blacklisted user
                } else {
                    blacklistList += (await Promise.all(fetchDB.map(async (user, count) => { // map all of the blacklisted users
                        const fetchUser = await client.users.fetch(user.ID.split('_')[1]) 

                        return `> **${count+1}** ┠╴***${fetchUser.tag} ━  <t:${user.data}:F>***`
                    }))).join('\n')
                }

                return int.editReply({ content: blacklistList })
            }


        } catch (err) {
            console.log(err)
            int.editReply({ content: '> **An error occurred, try again the command later.**' })
        }

    }
}
// -------------------------------------------------------------------------------------------------
