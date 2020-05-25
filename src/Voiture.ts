const newVoiture = (nom:string, km:number) => { // constructeur
    return {
        nom, //attribut d'instance
        km, //attribut d'instance
        foo : () => console.log(nom, km) // methode d'instance
    }
}

class Voiture {

    public nom:string //attribut d'instance
    protected km:number  //attribut d'instance

    constructor(nom:string, km:number){ // Constructeur
        this.nom = nom
        this.km = km
    }

    foo = () => console.log(this.nom, this.km)

    public rouler(){
        console.log(`Je roule, km=`, this.km++)
    }
}

class VoitureElectrique extends Voiture{

    constructor(nom:string, km:number){ // Constructeur
        super(nom,km)
    }

    public rouler(){
        console.log(`Je roule mais electrique,${this.nom} km=${this.km++}`)
    }

    public charger() {
        console.log("... en charge")
    }
}

const voiture:Voiture = new Voiture("fiat", 0)

const voitureE:Voiture = new VoitureElectrique("Tesla",0)

//voitureE.charger()

for (let i=0; i<4; i++) {
    voiture.rouler()
    voitureE.rouler()
}
voiture.foo()
