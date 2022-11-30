import { table } from 'table';
import isUsingExpo from '../../helpers';
import { PACKAGES_LIST } from '../../utils/consts';
import generatePackageList from '../../helpers/generatePackageList';

const list = (): void => {
  const isExpoApp = isUsingExpo();

  if (isExpoApp) {
    console.log(table(generatePackageList(PACKAGES_LIST)));
  }
};

export default list;
