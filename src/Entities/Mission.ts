import { IMission, IModules } from "../Types/index";
import { v4 } from "uuid";

export abstract class Mission implements IMission {
    public readonly id: string;

    constructor(
        public readonly nome: string,
        public dataDeInicio: string,
        public dataDeTermino: string,
        public modulo: IModules
    ) {
        this.id = v4();
    }
}
