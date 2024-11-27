import { Request, Response } from 'express';
import open from 'open';

import loadAllRouter from '#app/routes/index';
import { initApp } from '#app/routes/init';
import { localhostMover } from '#app/routes/localhostMover';
import { config } from '#config/env_get';
import swaggerDocs from '#config/swaggerDocs';

const options = {
  key: $.fs.readFileSync('keys/private.key'),
  cert: $.fs.readFileSync('keys/certificate.crt'),
};

export default function (): void {
  // app (express)
  const app = $.express();

  localhostMover(app);

  try {
    initApp(app);
  } catch (_) {
    log.error('unknown error when init app');
    die();
  } finally {
    loadAllRouter(app)
      .then(function () {
        $.https.createServer(options, app).listen(config.PORT, () => {
          // app.listen(config.PORT
          log.info('Server is running on port: ' + config.PORT);

          swaggerDocs(app, config.PORT.toString());

          void open(`https://127.0.0.1:${config.PORT}/docs`);
        });
      })
      .catch(function () {
        log.error('unknown error when init app');
        die();
      });
  }

  app.get('/test/sleep', (_req: Request, res: Response) => {
    // time out is 3 in all routers
    // but this codes run in background as well
    setTimeout(() => {
      res.json({ message: 'Data retrieved successfully!' });
      log.info('SLEEP1');
      quit();
    }, 5000);
    log.info('SLEEP2');
  });
}
