import { IModules, IStudent, ITeacher, IMission } from "../../Types/index";
import { v4 } from "uuid";
import moment from "moment";

export abstract class Mission implements IMission {
    public id: string;
    public alunos: IStudent[] = [];
    public docentes: ITeacher[] = [];

    constructor(
        public readonly nome: string,
        public dataDeInicio: moment.Moment,
        public dataDeTermino: moment.Moment,
        public modulo: IModules
    ) {
        this.id = v4();
    }

    public getIdentifier(): string {
        return this.id;
    }

    public getName(): string {
        return this.nome;
    }

    public getStartDate(): moment.Moment {
        return this.dataDeInicio;
    }

    public getEndDate(): moment.Moment {
        return this.dataDeTermino;
    }

    public getCurrentModule(): number | undefined {
        return this.modulo === 0 ? undefined : this.modulo;
    }

    public addTeacher(teacher: ITeacher) {
        this.docentes.push(teacher);
    }

    public addStudent(student: IStudent) {
        this.alunos.push(student);
    }
}
