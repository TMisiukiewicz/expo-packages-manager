const generatePackageList = (packageList: string[]): string[][] => {
  const list = [['Package name', 'Installed']];

  packageList.forEach((name) => {
    list.push([name, '']);
  });

  return list;
};

export default generatePackageList;
