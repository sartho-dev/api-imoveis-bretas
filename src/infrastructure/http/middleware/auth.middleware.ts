import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

interface TokenPayload{
    id: number;
    iat:number;
    exp:number;
}

declare module "express-serve-static-core" {
    interface Request {
        userId?: number;
    }
}

export function authMiddleware(req:Request, res:Response, next:NextFunction){

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            Message: "Token não fornecido"
        })
    }

    const token = authHeader.split(" ")[1]

    if(!token){
        return res.json("Token nao fornecido")
    }

    try {
        const usuario = jwt.verify(token, "segredo123") as TokenPayload;

        req.userId = usuario.id

        next();

    } catch (error) {
        
        return res.status(401).json({
            Message: "Token expirado ou invalido"
        })
        
    }


}