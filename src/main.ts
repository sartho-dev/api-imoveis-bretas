import { app } from "./infrastructure/http/server";
import "reflect-metadata"

app.listen(3000, () =>{
    console.log("Rodando na porta 3000")
})