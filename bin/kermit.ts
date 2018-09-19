#!/usr/bin/env node
import * as commander from 'commander';

import { CommandLoader } from '../commands/command.loader';

const bootstrap = ({ version }: {version: string}): void => {
  const program: commander.CommanderStatic = commander
  program.version(version, '-v, --version')
  CommandLoader.load(program)
  commander.parse(process.argv)
};

bootstrap(require('../package.json'));
