export interface IFilterImovelDTO{
    situacao: string;
    tipo: string;
    estado:string,
    cidade:string,
    bairro: string,
    valor: {
        apos: number;
        ate: number; 
    }
    quartos: number,
    banheiros:number,
    vagas: number
    


}