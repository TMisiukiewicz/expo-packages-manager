import chalk from 'chalk';

type Log = 'success' | 'error' | 'warning';

const logMessage = (msg: string, type: Log = 'success'): void => {
  let logType = chalk.white.bold.bgGreen('SUCCESS');

  if (type === 'error') logType = chalk.white.bold.bgRed('ERROR');
  else logType = chalk.white.bold.bgYellow('WARNING');

  console.log(`${logType} ${msg}`);
};

export default logMessage;
