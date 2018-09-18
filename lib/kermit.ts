import commander, { CommanderStatic } from "commander"

import { CommandLoader } from "./commands/command.loader"

const bootstrap = () => {
  const { version } = require("../package.json")

  const program: CommanderStatic = commander

  program.version(version)

  CommandLoader.load(program)

  commander.parse(process.argv)
}

bootstrap()
