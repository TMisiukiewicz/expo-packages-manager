import logMessage from './logMessage';

const isUsingExpo = (dependencies: Record<string, string>): boolean => {
  if (!Object.keys(dependencies).includes('expo')) {
    logMessage(
      "Seems like you don't have Expo installed in your project.",
      'error',
    );

    return false;
  }

  return true;
};

export default isUsingExpo;
