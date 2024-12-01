/**
 * @link https://github.com/S-MRB-S
 *
 * @author MRB
 *
 */

/**
 * اضافه کردن سورس های پایدار و ورژن بندی پایدار برای هسته
 * قابلیت اضافه کردن ماژول ها به هسته با قابلیت خطا پذیری برای هر ماژول
 *
 * اضافه کردن فورکر برای هر ورژن بندی بسته به تعداد و حداکثر
 */

// --------------------------------------------------------------
// init libs, init and start core
// --------------------------------------------------------------
void ((): void => {
  new (class {
    public constructor() {
      void this.initialize();
    }

    public async initialize(): Promise<void> {
      console.log('Application is initializing...');

      /**
       * init global lib
       */
      await import('#lib/index');

      await this.start();
    }

    #run(): void {
      console.log('Running the application...');
      $.core();
    }

    public async start(): Promise<void> {
      /**
       * init file for index (current file)
       */
      await import('#core/init/index');
      this.#run();
    }
  })();
})();
