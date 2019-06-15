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
        msgObject.delete(0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQWlDdEMsQ0FBQztJQTlCRyxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLENBQUM7YUFDekMsUUFBUSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7YUFDNUIsUUFBUSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQzthQUN4QyxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO2FBQ25DLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO2FBQ2xDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsa0RBQWtELENBQUM7YUFDckUsUUFBUSxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQzthQUN6QyxRQUFRLENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDO2FBQ3pDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsNERBQTRELENBQUM7YUFDckYsUUFBUSxDQUFDLCtCQUErQixDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ25CLFFBQVEsQ0FBQyw0RkFBNEYsQ0FBQzthQUN0RyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBbkNELHVCQW1DQyJ9