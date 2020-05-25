export interface Animal {
    manger():void
}

export abstract class AbstractAnimal implements Animal {

    private static count = 0;

    constructor(protected type:string, protected nom:string){
        AbstractAnimal.count++
    }

    public abstract manger():void;

    public action(msg:string){
        console.log(`${this.nom} le ${this.type}: ${msg}`)
    }

    public static getCount = ()=> AbstractAnimal.count

}