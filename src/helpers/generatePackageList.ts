import chalk from 'chalk';
import { Commands } from '../types';

const generatePackageList = (
  packageList: string[],
  installedDependencies: Record<string, string>,
  type: Commands['list'] = 'all',
): string[][] => {
  const list = [['Package name', 'Installed']];

  packageList.forEach((name) => {
    if (type === 'all') {
      list.push([
        name,
        Object.keys(installedDependencies).includes(name)
          ? chalk.green('✓')
          : '',
      ]);
    } else if (
      type === 'installed' &&
      Object.keys(installedDependencies).includes(name)
    ) {
      list.push([name, chalk.green('✓')]);
    }
  });

  return list;
};

export default generatePackageList;
