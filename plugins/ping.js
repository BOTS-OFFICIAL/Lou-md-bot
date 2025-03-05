const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```lou-md-bot 𝐈𝐒 𝐏𝐢𝐧𝐠𝐢𝐧𝐠!!!```')
    const end = new Date().getTime()
    return await message.send('*𝐏𝐨𝐧𝐠 🏓*\n ```' + (end - start) + '``` *ms*')
  }
)
