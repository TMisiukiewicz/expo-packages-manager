import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.1')
  .description('Simple CLI tool to manage expo packages in your project')
  .option('-l, --list', 'list all SDK packages')
  .parse(process.argv);
