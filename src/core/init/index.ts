import { InitReq } from '#core/init/requirements';
import { LogFileChecker } from '#core/misc/logBakChecker';

export class InitCore {
  public constructor() {
    this.initialize();
  }

  private initialize(): void {
    void this.loadRequirements();
    void this.loadGlobal();
    void this.checkLogFiles();
    void this.setupExitHandler();
  }

  private loadRequirements(): void {
    try {
      new InitReq().init();
    } catch (error) {
      console.error('Error loading requirements:', error);
    }
  }

  private loadGlobal(): void {
    try {
      void import('#core/global/index');
    } catch (error) {
      console.error('Error loading global:', error);
    }
  }

  private checkLogFiles(): void {
    try {
      new LogFileChecker();
    } catch (error) {
      console.error('Error checking log files:', error);
    }
  }

  private setupExitHandler(): void {
    try {
      void import('#core/misc/onexit');
    } catch (error) {
      console.error('Error setting up exit handler:', error);
    }
  }
}
