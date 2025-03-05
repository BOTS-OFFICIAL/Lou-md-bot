const { bot } = require('../lib/')

bot(
  {
    pattern: 'dev ?(.*)',
    desc: 'To check dev',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```getting  dev info!```')
    const end = new Date().getTime()
    return await message.send('*Hey i am Lou MD created by Magical Kx\nName: Magical KX\nAGE: 21\nCITY: MUTARE\nHOBBY: PROGRAMMING AND CODING\nREPO: https//github.com/BOTS-OFFICIAL/lou-md-bot\nCONTACTS: wa.me/263789432940')
  }
)