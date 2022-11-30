import { Command } from 'commander';
import list from './commands/list';
import { Commands } from './types';

const program = new Command();

program
  .version('0.0.1')
  .description('Simple CLI tool to manage expo packages in your project')
  .option('-l, --list [value]', 'list all SDK packages')
  .parse(process.argv);

const options = program.opts<Commands>();

if (options.list) list(options.list);
