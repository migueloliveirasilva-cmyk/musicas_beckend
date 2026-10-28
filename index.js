import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import "dotenv/config"

const app = express();
app.get("comandoSelect", (request, response) => { "SELECT * FROM musicas_miguel"})
sql.query(comandoSelect, (error, data) => { })
app.listen
export default app