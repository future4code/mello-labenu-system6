import { Human } from "./Factories/Human";
import { IStudent } from "../Types/index";

export class Student extends Human implements IStudent {
    constructor(
        public readonly nome: string,
        public readonly email: string,
        public readonly dataDeNascimento: string,
        public hobbies: string[]
    ) {
        super(nome, email, dataDeNascimento);
    }
}
