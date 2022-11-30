import chalk from 'chalk';

const generatePackageList = (
  packageList: string[],
  installedDependencies: Record<string, string>,
): string[][] => {
  const list = [['Package name', 'Installed']];

  packageList.forEach((name) => {
    list.push([
      name,
      Object.keys(installedDependencies).includes(name) ? chalk.green('✓') : '',
    ]);
  });

  return list;
};

export default generatePackageList;
