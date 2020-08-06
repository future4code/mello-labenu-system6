import { Mission } from "./Factories/Mission";
import { IMission, IModules } from "../Types";

export class DayMission extends Mission implements IMission {
    constructor(
        public readonly nome: string,
        public readonly dataDeInicio: string,
        public readonly dataDeTermino: string,
        public readonly modulo: IModules
    ) {
        super(nome, dataDeInicio, dataDeTermino, modulo);
    }
}
