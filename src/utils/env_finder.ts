import { config } from './mode.js';

export const findEnvFileInSubdirectories = (
  startDir: string
): string | null => {
  const files = $.fs.readdirSync(startDir);
  const envPath = config.dev ? '.env.dev' : '.env';

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
