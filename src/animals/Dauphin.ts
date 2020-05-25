import { AbstractAnimal } from "./Animal";
import { Nageur } from "./Nageur";

export class Dauphin extends AbstractAnimal implements Nageur {

    constructor(nom:string){
        super("Dauphin", nom)
    }

    public nager(){
        this.action("Glou Glou")
    }

    public manger(){
        this.action("Miam la meduse")
    }
}