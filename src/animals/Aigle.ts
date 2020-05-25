import { AbstractAnimal } from "./Animal";
import { Volatile } from "./Volatile";

export class Aigle extends AbstractAnimal implements Volatile{

    constructor(nom:string){
        super("Aigle", nom)
    }

    public voler(): void {
        this.action("aye biliveuh aye ken flieuh");
    }

    public manger(): void {
        this.action("hiii hiii la musaraigne");
    }

}