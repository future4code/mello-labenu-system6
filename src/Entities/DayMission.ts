import { Mission } from "./Factories/Mission";
import { IModules } from "../Types";

export class DayMission extends Mission {
    constructor(
        nome: string,
        dataDeInicio: moment.Moment,
        dataDeTermino: moment.Moment,
        modulo: IModules
    ) {
        super(nome, dataDeInicio, dataDeTermino, modulo);
    }
}
