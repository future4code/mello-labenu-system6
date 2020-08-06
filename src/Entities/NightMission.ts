import { Mission } from "./Factories/Mission";
import { IModules } from "../Types";

export class NightMission extends Mission {
    constructor(
        nome: string,
        dataDeInicio: moment.Moment,
        dataDeTermino: moment.Moment,
        modulo: IModules
    ) {
        super(`${nome}-na-night`, dataDeInicio, dataDeTermino, modulo);
    }
}
