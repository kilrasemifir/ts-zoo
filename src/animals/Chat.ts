import { AbstractAnimal } from "./Animal";

export class Chat extends AbstractAnimal{

    constructor(nom:string){
        super("Chat", nom)
    }

    public manger(): void {
        this.action("Miaou les souris")
    }

    public dormir(){
        this.action("Le chat fait ce qu'il sait faire de mieux")
    }

    public chier(){
        this.action("Il chie dans les affaires propres")
    }
}