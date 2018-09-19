import { CommanderStatic } from "commander"

import { AbstractCommand } from "./command.abstract"

export class InfoCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command("info")
      .alias("i")
      .description("Display Kermit CLI details")
      .action(async () => {
        await this.action.handle()
      })
  }
}
