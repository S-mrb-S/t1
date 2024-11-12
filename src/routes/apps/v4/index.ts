import { Router } from "express";
import {
  getBookController,
  saveBookController,
  dropBookController,
} from "#controllers/index";
import checkAdmin from "./middleware/checkAdmin.js";
import { loginController } from "#controllers/admin/login";

const router = Router();

router.post("/login", loginController); // endpoint
router.get("/get", checkAdmin, getBookController);
router.post("/save", checkAdmin, saveBookController);
router.post("/drop", checkAdmin, dropBookController);

log.info("v4 router loaded");

export default router;
