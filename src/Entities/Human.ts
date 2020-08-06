import { IHumanEntity } from "../Types";
import { v4 } from "uuid";

export abstract class Human implements IHumanEntity {
    constructor(
        public nome: string,
        public email: string,
        public dataDeNascimento: string,
        public id = v4()
    ) {}
}
