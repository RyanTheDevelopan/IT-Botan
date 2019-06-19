"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var embed = new Discord.RichEmbed()
            .addField("help", "Displays this message")
            .addField("hey", "Greet meh")
            .addField("goodbye", "Wait, ur leaving?")
            .addField("8ball", "Use the 8ball.")
            .addField("diceroll", "Roll a die")
            .addField("purge", "Purge the streets of messages that're in ur way.")
            .addField("kicc", "Kiccs a bad boi's ass")
            .addField("ban", "Summons the Ban Buster")
            .addField("testCommand", "No reason for this command to exist, either than existing.")
            .setTitle("Ryan The Botan's Command List")
            .setAuthor(`${msgObject.author.username}`)
            .setThumbnail(`${msgObject.author.avatarURL}`)
            .setFooter("Ur mom")
            .setImage("https://cdn.discordapp.com/avatars/527118937473941504/d4ff963ab77427f7eb596ab93e421f27.png")
            .setColor(0xff0000);
        msgObject.channel.send(embed);
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQWdDdEMsQ0FBQztJQTdCRyxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQyxRQUFRLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDO2FBQ3pDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO2FBQzVCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7YUFDeEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQzthQUNuQyxRQUFRLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQzthQUNsQyxRQUFRLENBQUMsT0FBTyxFQUFFLGtEQUFrRCxDQUFDO2FBQ3JFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLENBQUM7YUFDekMsUUFBUSxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQzthQUN6QyxRQUFRLENBQUMsYUFBYSxFQUFFLDREQUE0RCxDQUFDO2FBQ3JGLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQzthQUN6QyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3pDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNuQixRQUFRLENBQUMsNEZBQTRGLENBQUM7YUFDdEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQWxDRCx1QkFrQ0MifQ==