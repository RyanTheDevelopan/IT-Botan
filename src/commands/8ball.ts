import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "8ball"


    help (): string {

        return "Use the 8ball";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            var fortunes = [
                "Yes",
                "No",
                "Maybe so?",
                "Idk",
                "Frick no",
                "Maybe sometime",
                "Shut the fuck up",
                "https://cdn.discordapp.com/attachments/532701026042511362/575402909152313344/undertale_text_box.gif"
            ];


            if (args[1]) msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else msgObject.channel.send("Heh. But could you, probably, ACTUALLY ask me an ACTUAL question?");
        }
        
    }