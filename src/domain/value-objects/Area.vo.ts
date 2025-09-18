export class Area{
    public metrosQuadrados: number;
    constructor(metrosQuadrados: number){

        if(metrosQuadrados <= 0){
            throw new Error("A área deve ser maior que 0.")
        }

        this.metrosQuadrados = metrosQuadrados;
    }

    
}