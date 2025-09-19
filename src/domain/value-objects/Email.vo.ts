export class Email{
    public readonly email: string;
    
    constructor(email: string){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            throw new Error("Email inválido.");
        }
        this.email = email;
    }

    get value():string{
        return this.email

    }
}