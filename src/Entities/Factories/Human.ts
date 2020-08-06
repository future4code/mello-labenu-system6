import { v4 } from "uuid";
import moment from "moment";
import { IHumanEntity } from "../../Types/index";

export abstract class Human implements IHumanEntity {
    public readonly id: string;

    constructor(
        public readonly nome: string,
        public email: string,
        public readonly dataDeNascimento: moment.Moment
    ) {
        this.id = v4();
    }
}
