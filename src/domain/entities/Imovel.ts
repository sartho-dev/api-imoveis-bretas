import { Endereco } from "../value-objects/Endereco.vo";
import {  Dinheiro } from "../value-objects/Dinheiro.vo";
import { Area } from "../value-objects/Area.vo";

export class Imovel{

    public tipo: string; 
    public endereco: Endereco;
    public area: Area;
    public quartos: number;
    public banheiros: number;
    public suites: number;
    public vagas: number;
    public valor: Dinheiro;
    public situacao: string;
    public disponivel: boolean; 
    public id?: number;
    public andar?: number

    constructor(
        
        tipo: string,
        endereco: Endereco,
        area: Area,
        quartos: number,
        banheiros: number,
        suites: number,
        vagas: number,
        valor: Dinheiro,
        situacao: string,
        disponivel: boolean,
        andar?: number,
        id?: number,
        
    ){  
        this.id = id;
        this.tipo = tipo;
        this.endereco = endereco;
        this.area = area;
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.suites = suites;
        this.vagas = vagas;
        this.andar = andar;
        this.valor = valor;
        this.situacao = situacao;
        this.disponivel = disponivel;
    }

}