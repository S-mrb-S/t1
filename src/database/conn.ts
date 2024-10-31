import mysql from "mysql";
import { config } from "../config/get";

// Just for create database file
export const con = mysql.createConnection({
  host: config.sv,
  user: config.user,
  password: config.password
});

export const mysqlConnection = mysql.createConnection({
  host: config.sv,
  user: config.user,
  password: config.password,
  database: config.database, // created before
  multipleStatements: config.multipleStatements,
});