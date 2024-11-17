import { call } from "#modules/c-call";
import { Request, Response } from "express";

export const dropBookController = async (req: Request, res: Response) => {
  try {
    const result = await call("drop_v5");
    res.send({ success: result });
  } catch (error) {
    log.error("Error on deleting: ", error);
    res.status(500).send("Error on deleting!");
  }
};