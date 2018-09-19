import { AbstractAction } from "./action.abstract"
import { platform, release } from "os"
import osName = require("os-name")
import chalk from "chalk"

export class InfoAction extends AbstractAction {
  public async handle() {
    await displaySystemInformation()
    await displayKermitInformation()
  }
}

const displaySystemInformation = async () => {
  console.info(chalk.green("[System Information]"))
  console.info("OS Version     :", chalk.blue(osName(platform(), release())))
  console.info("NodeJS Version :", chalk.blue(process.version))
}

const displayKermitInformation = async () => {
  console.info(chalk.green("[Kermit Information]"))

  // this is where we print out dependencies from Kermit
}
