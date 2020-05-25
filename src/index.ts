import { Zoo } from "./animals/Zoo";
import { Chat } from "./animals/Chat";
import { Aigle } from './animals/Aigle';
import { Dauphin } from './animals/Dauphin';
import { MartinPecheur } from './animals/MartinPecheur';

const monZoo = new Zoo()
const libre = new Chat("Freedom")
monZoo.addAnimal(new Chat("Garfield"))
monZoo.addAnimal(new Chat("Tartuf"))
monZoo.addAnimal(new Chat("Muse"))
monZoo.addAnimal(new Chat("Lili"))

monZoo.addAnimal(new Aigle("Pigarle"))
monZoo.addAnimal(new MartinPecheur("Martin"))
monZoo.addAnimal(new Dauphin("Wili"))
//monZoo.addAnimalCage(new Animal("Animal", "JeanMich"))
monZoo.visiterCage()
monZoo.nourrirCage()
monZoo.bourinerLaVoliere()
monZoo.pisserDansLeBocale()
monZoo.efficacite()