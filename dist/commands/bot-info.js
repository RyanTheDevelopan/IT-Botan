"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class botinfo {
    constructor() {
        this._command = "bot-info";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var embed = new Discord.RichEmbed()
            .setTitle(`Made by Ryan Cortes#0138`)
            .addField(`Amount Of Servers`, `${client.guilds.size}`)
            .addField(`Account Created`, `December 25, 2018`)
            .addField(`User ID`, `527118937473941504`)
            .addField(`Status:`, `Online`)
            .setThumbnail(`${client.user.avatar}`)
            .setColor(0xff0000);
        msgObject.channel.send(embed);
    }
}
exports.default = botinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYm90LWluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFJdEMsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsVUFBVSxDQUFBO0lBd0J0QyxDQUFDO0lBckJELElBQUk7UUFFQSxPQUFPLDRFQUE0RSxDQUFDO0lBQ3hGLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFHekUsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQzthQUM1QyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQzthQUNoRCxRQUFRLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDO2FBQ3pDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO2FBQzdCLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQTFCTCwwQkEwQksifQ==