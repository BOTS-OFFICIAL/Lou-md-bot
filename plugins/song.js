const { bot, getJson ,song } = require('../lib')


bot({
    pattern: "song",
    desc: "Sends info about the query(of youtube video/audio).",
    category: "downloader",
    filename: __filename,
    use: '<faded-Alan walker.>',
},
async(Void, citel, text) => {
    if (!text) return citel.reply(`Use ${command} Back in Black`);
    let yts = require("../lib");
    let search = await yts(text);
    let anu = search.videos[0];
    let buttonMessage = {
        image: {
            url: anu.thumbnail,
        },
        caption: `
╔═════════•∞•═╗
│⿻ ${tlang().title} 
│  *Youtube Player* ✨
│⿻ *Title:* ${anu.title}
│⿻ *Duration:* ${anu.timestamp}
│⿻ *Viewers:* ${anu.views}
│⿻ *Uploaded:* ${anu.ago}
│⿻ *Author:* ${anu.author.name}
╚═•∞•═════════╝
⦿ *Url* : ${anu.url}
Powered by Magical KX
`,
        footer: tlang().footer,
        headerType: 4,
    };
    return Void.sendMessage(citel.chat, buttonMessage, {
        quoted: citel,
    });

}
)