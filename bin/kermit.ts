#!/usr/bin/env node
import commander, { CommanderStatic } from 'commander';

import { CommandLoader } from '../commands/command.loader';

const bootstrap = ({ version }: {version: string}): void => {
  const program: CommanderStatic = commander;
  program.version(version);
  CommandLoader.load(program);
  commander.parse(process.argv);
};

bootstrap(require('../package.json'));
