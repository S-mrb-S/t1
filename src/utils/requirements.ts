// init, requirements
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename); // این برای بدست اوردن مسیر فولدر های دیگه مثل بیلد یا دیست هست
export const logDir = path.join('log'); // or __dirname

(function () {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
})();
