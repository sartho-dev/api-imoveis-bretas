export class Dinheiro{
    public valor: number;

    constructor(
        valor: number,
    ){
        this.valor = valor;
    }

    static validarValor(valor:number){
        if(valor < 0){
            return false;
        }
    }
}