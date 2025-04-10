import mysl from "mysql";


export const db = mysl.createConnection({
    host: "localhost",
    user: "root",
    password: "Papelhigienico1!",
    database: "projeto_api"
});