import { table } from 'table';
import fs from 'fs';
import { isUsingExpo, generatePackageList, logMessage } from '../../helpers';
import { PACKAGES_LIST } from '../../utils/consts';
import { Commands } from '../../types';

const list = (type: Commands['list'] = 'all'): void => {
  const listTypes = ['all', 'installed'];
  const value = typeof type === 'boolean' ? 'all' : type;

  if (!listTypes.includes(value)) {
    logMessage(
      `Value ${value} is incorrect. Accepted values: ${listTypes.join(', ')}.`,
      'error',
    );

    return;
  }

  const data = fs.readFileSync('./package.json', {
    encoding: 'utf-8',
  });
  const { dependencies } = JSON.parse(data);
  const isExpoApp = isUsingExpo(dependencies);

  if (isExpoApp) {
    console.log(
      table(generatePackageList(PACKAGES_LIST, dependencies, value), {
        columns: [{ alignment: 'left' }, { alignment: 'center' }],
      }),
    );
  }
};

export default list;
