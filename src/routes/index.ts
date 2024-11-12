import { AllApps } from "./apps/a.js";
import { loadRoutes } from "./misc/apps-routes.js";
import { Express } from "express";

export default async function (app: Express): Promise<void> {
  try {
    await loadRoutes(app, AllApps);
  } catch (error) {
    log.info("error! loading not complete.");
  }
}
