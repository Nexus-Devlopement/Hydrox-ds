const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const db = require("quick.db")
const { MessageButton } = require("discord-buttons")
const { MessageActionRow } = require("discord-buttons")
const emoji = require('../../emoji.json')

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
    const prefix = db.get(`guild_${message.guild.id}_prefix`) || ',';
      //--------------------------------------S T A R T---------------------------------------
        const embed = new Discord.MessageEmbed()
        .setTitle(`<:arrow:934482036377419866> **__My Features__**`) 
        .setDescription("> One of the Best <:adminIcon:935066303218204742> **All In One Discord Bot!** **Moderation**, Info, **Utility**, **Economy**, And Also A New Awesome <a:D_CAFE_SETTINGS:933973988047200296> **Security** System! <a:r_dot:935066570630262854> Many **Minigames** And <:hydroxfun:935064533398093864> **Fun Commands** (200+) <a:D_CAFE_SETTINGS:933973988047200296> **Administration** and **Auto-Moderation** and Way Much More!")
      .addField("<:gc_intensethinking:935491892550959114> **__How Do You Use Me?__**",
      `>>> __Add The Bot To Your Discord Server__
      Type \`${prefix}howtouse\` And Get Information <a:D_CAFE_SETTINGS:933973988047200296>`)
      .addField("**<a:r_dot:935066570630262854>Uptime Command Info**", `>>> Uptimer Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A **Single** Command.,
        __Uptimer Commands__<:__:866155255644291083>
      \`add\` \`howtouse\` \`ping\` \`project\` \`remove\` \`stats\` \`total\` \`uptime\``)
      .addField(":chart_with_upwards_trend: **__STATS:__**",
      `>>> <a:scrown:935067053541453825> **${client.commands.map(a=>a).length} Commands**
     <:Discord:933249753955860490> on **${client.guilds.cache.size} Servers**
    <:hydroxuptime:935067594438873088> **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
        .setColor("RANDOM")
        .setImage('https://cdn.discordapp.com/attachments/884804762464305242/885426969070669824/standard_1.gif')
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`Requested By ${message.author.username}`)
        .setFooter("[Invite Bot](https://hydroxbot.xyz) | [Website](https://hydroxbot.xyz)")
        .setFooter('Page 1/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        const embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("" + "<:adminIcon:935066303218204742> Admin & Moderation | <a:yes:933239140718358558> **ENABLED**")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("⚡ Admin commands",`>>> \`addrole\`  \`auditlog\`  \`ban\`  \`dm\`  \`embed\`  \`hackban\`  \`kick\`  \`lock\`  \`nuke\`  \`removerole\`  \`addemoji\`  \`unban\`  \`unlock\`  \`welcometoggle\` \`idpassword\` `)
        .addField("🛠 Moderation",`>>> \`purge\`  \`resetwarns\`  \`Userid\`  \`lockchannel\`  \`mute\`  \`purge\`  \`say\`  \`setchat\`  \`slowmode\`  \`unlockchannel\`  \`unmute\`  \`warn\`  \`warnings\`  \`Userinfo\``)
        .setColor("RANDOM")
        .setFooter('Page 2/12', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        
        const embed2 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("" + "<:hydroxfun:935064533398093864> Fun & General | <a:yes:933239140718358558> **ENABLED**")
        .addField("🌝 Fun Commands", `>>> \`deepfry\`  \`coinflip\`  \`corona\` , \`drake\`  \`eightball\`  \`flipcoin\`  \`google\`  \`hack\`  \`hangman\`  \`hug\`  \`joke\`  \`meme\` \`ship\`  \`slap\`  \`snake\`  \`snipe\`  \`sudo\`  \`tictactoe\`  \`triggered\` \`trivia\`  \`tictactoe\`  \`youtube\` \`clyde\` \`afk\`  \`howgay\``)
        .addField("⚙ General Commands", `>>> \`afk\` \`akinator\` \`ascii\` \`base64\`, \`battleship\` \`caluclator\` \`choose\` \`colar\` \`country\` \`dashboard\` \`emojify\` \`fristmesssage\` \`invite\`  \`leaderboard\` \`postion\` \`reverse\` \`rps\` \`servericon\` \`servericon\` \`support\` \`trivia\` \`weather\` `)
       .addField("⌨ School Commands", `>>> \`gmail\` \`caluclator\` \`remind\` \`spacepics\`, \`note\` `)
        .setColor("RANDOM")
        .setFooter('Page 3/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        const embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("" + "<:hydroxuptime:935067594438873088> Uptime & Information | <a:yes:933239140718358558> **ENABLED**")
        .addField("📈 Uptime Commands",`>>> \`add\`  \`howtouse\`  \`ping\`  \`projects\`  \`remove\`  \`stats\`  \`total\`  \`uptime\``)
        .addField("📨 Information",`>>> \`botinfo\`   \`botinvite\`  \`report-bug\`  \`commandscount\`  \`developer\`  \`djs\`  \`feedback\`  \`github\`  \`help\`  \`info\`  \`roleinfo\`  \`serverinfo\`  \`userinfo\` \`status\` \`leaderboard\` \`covid\` \`firstmessage\` \`add-these\` \`trivia\` \`screenshot\``)
        .addField("⌨ Programming",`>>> \`coliru\`   \`compile\`  \`npm\`  \`github\`  \`httpsstatus\`  \`npmpgsize\` `)
        .setColor("RANDOM")
        .setFooter('Page 4/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        
        const embed4 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("Images | <a:yes:933239140718358558> **ENABLED**")
        .addField("**📷 Images Commands**", 
        `>>> \`3000years\` \`affect\` \`beautiful\` \`dog\` \`facepalm\` \`fire fox\` \`gay\` \`glass\` \`jail\` \`shit\` \`tweet\` \`changemymind\` \`fact\` \`cat\` \`map\` \`run\` \`rip\` \`grab\` \`imspeed\` \`simp\` \`seal\` \`trash\` \`like\` \`colourify\` \`scary\` \`smartcat\` \`stonks\` \`shame\` \`dislike\` \`captcha\` \`wasted\` \`triggered\` \`spank\``)
        .setColor("RANDOM")
        .setFooter('Page 5/11', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        const embed5 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle('<a:playing:933241885730938901> Music & Filter | <a:yes:933239140718358558> **ENABLED**')
        .addField("**🎵 Music Commands**", `>>> \`addprevious\` \`autoplay\` \`clearqueune\`  \`forward\` \`grab\` \`join\` \`jump\` \`loop\` \`loopqueue\` \`loopsong\` \`lyrics\` \`move\` \`moveme\` \`nowplaying\` \`pause\` \`play\` \`playlist\` \`playmusicmix\` \`playprevious\` \`playsc\` \`playskip\` \`playskipsc\` \`playtop\` \`queue\` \`queuestatus\` \`removedupes\` \`removetrack\` \`removevoteskip\` \`restart\` \`resume\` \`rewind\` \`search\` \`searchsc\` \`seek\` \`shufftle\` \`skip\` \`stop\` \`unshuffle\` \`volume\``)
        .addField("**🎥 Filter Commands**",`>>> \`3d\` \`bassboost\` \`china\` \`chipmunk\` \`cleareq\` \`clearfilter\` \`darthvader\` \`rqualizer\` \`nightcore\` \`pitch\` \`rate\` \`slowmo\` \`speed\` \`tremolo\` \`vibrate\` \`vibrato\``)
        .setColor("RANDOM")
        .setFooter('Page 6/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp() 

        const euembed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("" + "<:hydroxutility:935068214679965696> Utility & Economy | <a:yes:933239140718358558> **ENABLED**")
        .addField("<a:r_dot:935066570630262854> Utility", `>>> \`advice\` \`announce\` \`binary\` \`members\` \`membercount\` \`minecraft\` \`poll\` \`prefix\` \`rank\` \`serverinfo\` \`shortener\` \`whatsapp\` \`worldclock\` \`yt\` \`backupcreate\` \`backupload\` \`backupinfo\` \`hastbin\` \`iphonex\` \`anime\` `)
        .addField("<a:Money_Price:935490603909799957> Economy", `>>> \`addmoney\` \`balance\` \`beg\` \`daily\` \`deposite\` \`removemoney\` \`top\` \`withdraw\` \`pay\` \`avatarfusion\` \`sell\` \`slots\` \`weekly\` \`leaderboard\``)
        .setColor("RANDOM")
        .setFooter('Page 7/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
 
        const setupembed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`<:adminIcon:935066303218204742> Setup & SoundBoard | <a:yes:933239140718358558> **ENABLED**`)
        .addField("**💪 Setup Commands**", `>>> \`setupwelcome\` \`setchatbot\` \`setupcustomcommands\` \`deleltecustomcommand\` \`setprefix\` \`setupticket\` `)
        .addField("**🎙SoundBoard Comand**", `>>> \`ahh\` \`ahshit\` \`araara\` \`areyoucomedyme\` \`bruh\` \`fart\` \`gameover\` \`habhaikeselagi\` \`hellmpmotherfucker\` \`hoya\` \`john-cena\` \`lajkinab\` \`laugh\` \`margayamc\` \`nani\` \`nikallaude\` \`noob\` \`phintro\` \`pikachu\` \`rickroll\` \`sheesh\` \`suprise\` \`wow\` \`yeet\` `)
       .setColor("RANDOM")
        .setFooter('Page 8/12' , client.user.displayAvatarURL({ dynamic: true}))
       .setTimestamp()
   
        const ownere = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("<a:scrown:935067053541453825> Owner & Giveaway | <a:yes:933239140718358558> **ENABLED**")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("<a:scrown:935067053541453825> Owner & Giveaway | <a:yes:933239140718358558> **ENABLED**")
        .addField("**👑 Bot Owner Commands**", ">>> \`bottoken\` \`eval\` \`getseverinv\` \`reload\` \`serverlist\` \`leaveserver\` \`changeavatar\` \`changename\` \`changestatus\` \`block\` \`unblock\` ")
        .addField("**🎉 Giveaway**", ">>> \`start\` \`create` \`end\` \`reroll\`")
        .addField("**📤 Suggestion**", ">>> \`suggeest\` \`sreply\` \`setsuggest\`")
        .setColor("RANDOM")
        .setFooter('Page 9/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

         const automode = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("<:adminIcon:935066303218204742> AutoMod & Aura | <a:yes:933239140718358558> **ENABLED** ")
        .addField("**🔘 Aura Commds**", `>>> \`addword\` \`blacklistserver\` \`blacklistuser\` \`delword\` \`whitelistadd \` \`whitedelete\` \`whitelist\``)
        .addField("**⚙ AutoMod Comands**", `>>> \`antialt\`, \`antilink\` \`autooffcial\` \`autooffciald\` \`autorole\` \`roleall\` `)
        .setColor("RANDOM")
        .setFooter('Page 10/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        const expired = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`<:no:880293644408594443> This Help Menu is expired!\n Retype:\`${prefix}help\` To Do Again!`)
        .setColor("RANDOM")
        .setFooter('Page 11/12' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        let webembed = new Discord.MessageEmbed()
        .setThumbnail("https://images-ext-1.discordapp.net/external/qH66-srMQRwHwtX7OogMiSN7CJaUUlPkzwuug8ESYcU/https/cdn.discordapp.com/avatars/882311254423765012/877269f6723e666cd61e5316c5341935.webp?width=120&height=120")
        .setTitle('<:World_Wide_Web:935494706710867969> Web And Others!')
        .setColor('BLUE')
        .setDescription('[<:arrow:934482036377419866> Website](https://hydroxbot.xyz)\n [<:arrow:934482036377419866> Support Server](https://discord.gg/notsaksh) \n[<:arrow:934482036377419866> Paypal](https://paypal.me/notsakshyam6969/) \n [<:arrow:934482036377419866> Instagram](https://www.instagram.com/notsakshyam6969/) \n [<:arrow:934482036377419866> Github](https://github.com/NotSaksh) \n[<:arrow:934482036377419866> Source Code](https://www.youtube.com/watch?v=dQw4w9WgXcQab_channel=RickAstley)\n [<:arrow:934482036377419866> Youtube ](https://www.youtube.com/channel/UCgFuTFC-Nubq9EdBdBPAOUg) \n [<:arrow:934482036377419866> Community Server](https://discord.gg/notsaksh) \n [<:arrow:934482036377419866> Twitter ](https://twitter.com/notsakshyam6969)')
        .setFooter('Page 12/12' , client.user.displayAvatarURL({ dynamic: true}))
      .setTimestamp()
      .setColor("RANDOM")
      
        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin & Moderation')
        .setEmoji('880073997751058443')
        .setValue('option1')
        .setDescription('Use Admin & Moderation Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Fun , School & General')
        .setEmoji('880148009302765608')
        .setValue('option2')
        .setDescription('Use Fun , School & General Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Uptime , Information & Programming')
        .setEmoji('⏲')
        .setValue('option3')
        .setDescription('Use Uptime & Information & Programming Commands')

        let image = new MessageMenuOption()
        .setLabel('Image')
        .setEmoji('🎭')
        .setValue('image')
        .setDescription('Image Commands!')

        let music = new MessageMenuOption()
        .setLabel('Music & Filter')
        .setEmoji('🎶')
        .setValue('music')
        .setDescription('Use Music & Filter Commands!')

        let home = new MessageMenuOption()
        .setLabel('Home')
        .setEmoji('880149141920055296')
        .setValue('home')
        .setDescription('Return To Home')

        let owner = new MessageMenuOption()
        .setLabel('Owner , Giveaway & Suggestion')
        .setEmoji('862764025561481246')
        .setValue('owner')
        .setDescription('Use Onwer & Giveaway Commands!')

        let auto = new MessageMenuOption()
        .setLabel('Automode & Aura')
        .setEmoji('882186532960763927')
        .setValue('auto')
        .setDescription('Use Automode & Aura Commands!')

         let cmdsetup = new MessageMenuOption()
        .setLabel('Setup & SoundBoard')
        .setEmoji('💪')
        .setValue('setup')
        .setDescription('Use Setup & SoundBoard Commands!')

        let ue = new MessageMenuOption()
        .setLabel('Ultility & Economy')
        .setEmoji('💸')
        .setValue('ue')
        .setDescription('Use Ultility & Economy!')

        let web = new MessageMenuOption()
        .setLabel('Important Links !')
        .setEmoji("🌐")
        .setValue("web")
        .setDescription('Important Lnks & Website')


    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Hydrox Help Menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(home, option1, option2, option3, image, music, owner, auto, ue, cmdsetup,web)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => message.guild;
    let collector = Sendmenu.createMenuCollector(filter, { time : 180000 });
    collector.on("collect", (b, menu) => {
      if(b.clicker.id !== message.author.id) return b.reply.send(`:x: <@${b.clicker.id}> you can't use that!`, true)
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select, true)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select, true)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select, true)
        }

        if(b.values[0] == "image") {
          Sendmenu.edit(embed4, select, true)
        }

        if(b.values[0] == "music") {
          Sendmenu.edit(embed5, select, true)
        }

        if(b.values[0] == "owner") {
          Sendmenu.edit(ownere, select)
        }
        if(b.values[0] == "auto") {
         Sendmenu.edit(automode, select)
        }
        if(b.values[0] == "home") {
          Sendmenu.edit(embed, select, true)
        }
        if(b.values[0] == "web") {
          Sendmenu.edit(webembed, select)
        }
        if(b.values[0] == "ue") {
          Sendmenu.edit(euembed, select)
        }
        if(b.values[0] == "setup") {
          Sendmenu.edit(setupembed, select)
        }

        b.reply.defer();

    collector.on("end", (b) => {
        Sendmenu.edit(expired)
    })
    })
 //------------------------EVENT-----------------------------   
    /*client.on('clickMenu', (menu) => {
      if (menu.message.id === selector) {
        if (menu.clicker.user.id === message.author.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });*/
  }
}

