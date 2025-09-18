export interface ICreateImovelDTO{
    tipo:string;
    endereco:{
        rua: string,
        numero: number,
        bairro: string,
        cidade: string,
        estado: string,
        cep: string,
        pais: string,
    }

    area:{
        metrosQuadrados: number;
    }
    
    quartos: number;
    banheiros: number;
    suites: number;
    vagas: number;

    valor: {
        valor:number;
    }

    situacao: string;
    disponivel: boolean; 
    id?: number;
    andar?: number

}