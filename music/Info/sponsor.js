const {MessageEmbed} =require("discord.js")
const config = require("../../botconfig/config.json")
var ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
const { swap_pages2	 } = require("../../handlers/functions");
module.exports = {
	name: "sponsor",
	category: "🔰 Info",
	aliases: [""],
	description: "Shows the sponsor of this BoT",
	useage: "sponsor",
	run: async (client, message, args) => {
	try{
			let embed1 = new MessageEmbed()
		    .setColor(ee.color)
		    .setTitle("BERO-HOST.de | German Hosting")
		    .setURL("http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato")
		    .setDescription(`
Second Sponsor of This Bot is:
**BERO-HOST** THE BEST HOSTER
<:arrow:934482036377419866> BERO-HOST.de is sponsoring them with some free / cheaper Hosting Methods,
<:arrow:934482036377419866> Thanks to them, we are able to host our Website, Bots and GAME SERVERS
<:arrow:934482036377419866> Our suggestion is, if you want to host Bots / Games / Websites, then go to [BERO-HOST.de](http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato)

**What they are offering:**
<:arrow:934482036377419866> **>>** Minecraft Hosting, CounterStrike: Global Offensive, Garry's Mod, ARK, ARMA 3, ...
<:arrow:934482036377419866> **>>** Cheap and fast Domains
<:arrow:934482036377419866> **>>** WEBHOSTING
<:arrow:934482036377419866> **>>** TEAMSPEAK SERVERS
<:arrow:934482036377419866> **>>** Linux & Windows Root Servers

[**Discord Server:**](https://discord.bero-host.de)
[**Website:**](http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato)
[**__SPONSOR LINK!__**](https://milrato.eu/img/paysafecard.png)
`)
		    .setImage("https://cdn.bero-host.de/img/logo/bero_white.png")
		    .setFooter("BERO-HOST", "https://imgur.com/jXyDEyb.png")
		
		let embed2 = new MessageEmbed()
			.setColor(ee.color)
			.setTimestamp()
			.setFooter("Bittmax.de | Code  'x10' == -5%", "https://imgur.com/UZo3emk.png")
			.setImage("https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png")
			.setTitle("Bittmax")
			.setURL("https://bittmax.de")
			.setDescription(`
<:arrow:934482036377419866> Bittmax is providing us, like BERO-HOST with free Discord Bot-Hosting technologies

<:arrow:934482036377419866> If you use the code: **\`x10\`** their, then you'll get at least 5% off everything!

<:arrow:934482036377419866> Check out their [Website](https://bittmax.de) and their [Discord](https://discord.gg/GgjJZCyYKD) to get your own Bot too!`);
			swap_pages2(client, message, [embed1, embed2])
		} catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(":x: ERROR | An Error Occurred")
            .setDescription(`\`\`\`${String(JSON.stringify(e)).substr(0, 2000)}\`\`\``)
        );
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/FQGXbypRf8
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
