
import { con } from "./conn";

export default function () {
  con.connect(function (err: any) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mrb", function (err: any, result: any) {
      if (err) throw err;
      console.log("Database created");
    });
  });
}