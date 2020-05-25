import { AbstractAnimal, Animal } from "./Animal";
import { Volatile } from './Volatile';
import { Nageur } from "./Nageur";

export class Zoo {

    private cage    :Set<Animal> = new Set()
    private voliere :Set<Volatile> = new Set()
    private bocale  :Set<Nageur> = new Set()

    public addAnimalCage(animal:Animal){
        this.cage.add(animal)
    }

    public visiterCage(){
        this.cage.forEach(animal=>{
            console.log(animal)
        })
    }

    public nourrirCage(){
        this.cage.forEach(animal=>{
            animal.manger()
        })
    }

    public countCage(){
        return this.cage.size
    }

    public efficacite(){
        console.log(`Il y a ${this.countCage()} animaux en cage sur ${AbstractAnimal.getCount()} dans le monde`)
    }

    public addAnimalVoliere(oiseau:Volatile){
        this.voliere.add(oiseau)
    }

    public bourinerLaVoliere(){
        console.log('\nVous bouriner la voliere!!!')
        this.voliere.forEach(oiseau=>{
            oiseau.voler()
        })
    }

    public addAnimalBocal(nageur:Nageur){
        this.bocale.add(nageur)
    }

    public pisserDansLeBocale(){
        console.log("\nOupsi j'en pouvez plus")
        this.bocale.forEach(nageur=>{
            nageur.nager()
        })
    }

    public addAnimal(animal:any){
        if (animal.nager)  this.addAnimalBocal(animal)
        if (animal.voler) this.addAnimalVoliere(animal)
        if (animal.manger) this.addAnimalCage(animal)
    }

}