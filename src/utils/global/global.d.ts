// global.d.ts
import { Logger } from "winston";

declare global {
  var log: Logger;
  function die(): void;
}

export {};
