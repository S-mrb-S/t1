import { getMode } from './mode.js';

const findEnvFileInSubdirectories = (startDir: string): string | null => {
  const files = $.fs.readdirSync(startDir);
  const envPath = getMode() === 'production' ? '.env' : '.env.dev';

  if (files.includes(envPath)) {
    return $.path.join(startDir, envPath);
  }

  const foundPath = files.reduce<string | null>((acc, file) => {
    if (acc) return acc;

    const fullPath = $.path.join(startDir, file);
    const stat = $.fs.statSync(fullPath);

    if (stat.isDirectory()) {
      return findEnvFileInSubdirectories(fullPath);
    }

    return null;
  }, null);

  return foundPath;
};

export const envFilePath = findEnvFileInSubdirectories(process.cwd());
