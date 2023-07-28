import { Human } from "./Factories/Human";
import moment from "moment";

export class Student extends Human {
    constructor(
        nome: string,
        email: string,
        dataDeNascimento: moment.Moment,
        public hobbies: string[] = []
    ) {
        super(nome, email, dataDeNascimento);
    }

    public getAge(): number {
        return moment().diff(this.dataDeNascimento, "years");
    }
}
