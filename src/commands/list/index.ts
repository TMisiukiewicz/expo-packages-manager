import { table } from 'table';
import fs from 'fs';
import isUsingExpo from '../../helpers';
import { PACKAGES_LIST } from '../../utils/consts';
import generatePackageList from '../../helpers/generatePackageList';

const list = (): void => {
  const data = fs.readFileSync('./package.json', {
    encoding: 'utf-8',
  });
  const { dependencies } = JSON.parse(data);
  const isExpoApp = isUsingExpo(dependencies);

  if (isExpoApp) {
    console.log(
      table(generatePackageList(PACKAGES_LIST, dependencies), {
        columns: [{ alignment: 'left' }, { alignment: 'center' }],
      }),
    );
  }
};

export default list;
