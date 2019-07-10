"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log("*In Spongebob* I'M READY!");
    client.user.setActivity('IT Botan | Beta? | ryan!help for help!');
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋🏻》welcome');
    if (!channel)
        return;
    channel.send(`:RyanSmirkNew:Heya ${member}. You're the ${client.users.size} user to join. Have a fun time here!:smirkingryan:`);
});
client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋🏻》welcome');
    if (!channel)
        return;
    channel.send(`:SadRyanNew:Goodbye **${client.user.tag}** :wave:. Wish ya didn't leave, ur departure is only making this ded server more ded. :shrug: Aw well.:sadryan:`);
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (msg.channel.type == "dm") {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config.commands || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQixzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBR3ZDLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVwRCxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUE7QUFFckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3JFLENBQUMsQ0FBQyxDQUFBO0FBR0YsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsRUFBRTtJQUVqQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDO0lBRTdFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixNQUFNLGdCQUFnQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksb0RBQW9ELENBQUMsQ0FBQztBQUNwSSxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUU7SUFDcEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQTtJQUM1RSxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGtIQUFrSCxDQUFDLENBQUM7QUFDN0ssQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRTtJQUN2QixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQUUsT0FBTztLQUFFO0lBRy9CLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO1FBQUUsT0FBTztLQUFFO0lBRXZDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTztLQUFFO0lBR2xFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQTtBQUdGLFNBQWUsYUFBYSxDQUFDLEdBQW9COztRQUc3QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzNDLEtBQUksTUFBTSxZQUFZLElBQUksUUFBUSxFQUFDO1lBRy9CLElBQUc7Z0JBR0MsSUFBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUM7b0JBR3BDLFNBQVM7aUJBQ1o7Z0JBR0QsTUFBTSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDcEQ7WUFDRCxPQUFNLFNBQVMsRUFBQztnQkFHWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7SUFFTCxDQUFDO0NBQUE7QUFFRCxTQUFTLFlBQVksQ0FBQyxZQUFvQjtJQUV0QyxJQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUssVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFBQyxPQUFPO0tBQUM7SUFHbEcsS0FBSSxNQUFNLFdBQVcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQW9CLEVBQUU7UUFFN0QsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsWUFBWSxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRXhFLE1BQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFpQixDQUFDO1FBRW5ELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDO0FBSUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDIn0=
