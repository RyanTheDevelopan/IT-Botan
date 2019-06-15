import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "goodbye"


    help (): string {

        return "Make me wish you farewell";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)
            msgObject.channel.send(`${msgObject.author.toString()}
https://cdn.discordapp.com/attachments/532701026042511362/575402255344336906/undertale_text_box.gif`);
        }
    }