const { pattern } = require('pdfkit')
const { setCmd, bot, getCmd, delCmd } = require('../lib/index')

bot(
  {
    pattern: 'setcmd ?(.*)',
    desc: 'to set cmd',
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.sticker)
      return await message.send('*Reply to a sticker*')
    if (!match) return await message.send('*Example : setcmd ping*')
    const res = await setCmd(match, message.reply_message, message.id)
    return await message.send(res < 1 ? '_Failed_' : '_Successfully added more commands to Lou Magical KX Bot_')
  }
)

bot(
  {
    pattern: 'getcmd ?(.*)',
    desc: 'to get cmd',
    type: 'misc',
  },
  async (message, match) => {
    const res = await getCmd(message.id)
    if (!res.length) return await message.send('*Unfortunately you didnt add any cmd to The bot . regards Magical KX*')
    return await message.send('```' + res.join('\n') + '```')
  }
)

bot(
  {
    pattern: 'delcmd ?(.*)',
    desc: 'to del cmd',
    type: 'misc',
  },
  async (message, match) => {
    if (!match && (!message.reply_message || !message.reply_message.sticker))
      return await message.send('*Example :*\ndelcmd cmdName\nReply to a sticker')
    const res = await delCmd(match || message.reply_message, message.id)
    return await message.send(res < 1 ? '_Failed_' : '_Successfully deleted cmd_')
  }


)

bot(
  {
    pattern: 'changecmd ?(.*)',
    desc: 'to change cmd',
    type: 'misc',
  },

  async (message, match) => {
    if (!match && (!message.reply_message || !message.reply_message.sticker))
      return await message.send('*Example :*\nchangecmd cmdName\nReply to a sticker')
    const res = await delCmd(match || message.reply_message, message.id)
    return await message.send(res < 1 ? '_Failed to change bot name_' : '_Successfully changed bot cmd_')
  }
)