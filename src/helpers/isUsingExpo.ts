import fs from 'fs';
import logMessage from './logMessage';

const isUsingExpo = (): boolean => {
  fs.readFile('./package.json', { encoding: 'utf-8' }, (error, data) => {
    if (error !== null) {
      logMessage('Cannot find package.json file.', 'error');

      return false;
    } else {
      const { dependencies } = JSON.parse(data);

      if (!Object.keys(dependencies).includes('expo')) {
        logMessage(
          "Seems like you don't have Expo installed in your project.",
          'error',
        );

        return false;
      }
    }
  });

  return true;
};

export default isUsingExpo;
