import { AbstractAnimal } from "./Animal";
import { Nageur } from './Nageur';
import { Volatile } from "./Volatile";

export class MartinPecheur extends AbstractAnimal implements Nageur, Volatile{

    constructor(nom:string){
        super("Martin Pecheur", nom)
    }

    public nager(){
        this.action("**Plonge**")
    }

    public voler(){
        this.action("**s'envole avec un dauphin bebe dans le bec**")
    }

    public manger(){
        this.action("Miam le dauphin et nike la physique!!!")
    }
}