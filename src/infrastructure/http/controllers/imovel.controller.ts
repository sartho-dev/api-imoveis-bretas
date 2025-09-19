import type { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateImovelCase } from "../../../application/use-case/imovel-case/create-imovel.case";
import { FilterImovelCase } from "../../../application/use-case/imovel-case/filter-imovel.case";

export const ImovelController = {

    async hello(req: Request, res: Response){
        res.json({
            Message: "Ola funcionando server"
        })
    },

    async create(req: Request, res: Response){
       
        try {
    
            const createImovelCase = container.resolve(CreateImovelCase)

            //body deve seguir ImovelDTO
            const imovelDTO = req.body

            await createImovelCase.execute(imovelDTO)

            res.status(200).json({
                Message: "Imovel criado com sucesso."
            })    
        } catch (error) {
            console.log("Erro:", error)
            res.status(500).json({
                Message: "Erro ao criar o imovel."
            })    
        }
    },

    async filter(req: Request, res:Response){

        try {

            const filterImovelCase = container.resolve(FilterImovelCase)

            const filterDTO = req.body

            const imoveis = await filterImovelCase.execute(filterDTO)

            res.status(200).json({
                Message: "Imoveis filtrados com sucesso.",
                data: imoveis
            })
            
        } catch (error) {
            console.error(error);
            res.status(500).json({
                Message: "Erro ao filtrar imoveis."
            })
            
        }

    }
}