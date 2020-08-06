import { ITeacherPerks } from "../Types/index";
import { Human } from "./Factories/Human";

export class Teacher extends Human {
    constructor(
        nome: string,
        email: string,
        dataDeNascimento: moment.Moment,
        private perks: ITeacherPerks[]
    ) {
        super(nome, email, dataDeNascimento);
    }
}
