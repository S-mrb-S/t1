import { INSERT_BOOKS } from "../../sql/book";
import { DUPLICATE_TABLE } from "../../sql/codes";
import { mysqlConnection } from "../config/conn";

export function saveBook(title: string, description: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        console.log("Saving a book, t: " + title + " desc: " + description);

        mysqlConnection.query(INSERT_BOOKS, [title, description], function (err: any, result: any) {
            if (err) {
                if (err.code === DUPLICATE_TABLE) {
                    console.error("Duplicate entry error: A book with this title already exists.");
                    resolve(false);
                } else {
                    console.error("Error inserting record: ", err);
                    reject(err);
                }
            } else {
                console.log("[saving] 1 record inserted");
                resolve(true);
            }
        });
    });
}