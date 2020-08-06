import { ITeacher, ITeacherPerks } from "../Types/index";
import { Human } from "./Human";


export class Teacher extends Human implements ITeacher {
    constructor(
        public readonly nome: string,
        public readonly email: string,
        public readonly dataDeNascimento: string,
        public perks: ITeacherPerks[]
    ) {
        super(nome, email, dataDeNascimento);
    }
}
