export class Endereco{
    public rua: string;
    public numero: number;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public cep: string;
    public pais: string;

    constructor(
        rua: string,
        numero: number,
        bairro: string,
        cidade: string,
        estado: string,
        cep: string,
        pais: string,
    ){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;   
        this.cep = cep;
        this.pais = pais;
    }



    static validarCep(cep:string):boolean {
        const regex = /^[0-9]{5}-?[0-9]{3}$/;
        return regex.test(cep);
        
    }

    




}