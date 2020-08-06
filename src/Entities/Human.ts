import { IHumanEntity } from "../Types";
import { v4 } from "uuid";

export abstract class Human implements IHumanEntity {
    id: string;

    constructor(
        public readonly nome: string,
        public readonly email: string,
        public readonly dataDeNascimento: string
    ) {
        this.id = v4();
    }
}
