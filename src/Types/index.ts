export interface IHumanEntity {
    id: string;
    nome: string;
    email: string;
    dataDeNascimento: string;
}

////////////////////////////////////////////////////////////////////////////////////

export enum ITeacherPerks {
    REACT = "React",
    REDUX = "Redux",
    CSS = "CSS",
    TESTES = "Testes",
    TS = "TypeScript",
    POO = "Programação Orientada a Objetos",
    BACK_END = "Backend",
}

export interface ITeacher extends IHumanEntity {
    perks: ITeacherPerks[];
}

/////////////////////////////////////////////////////////////////////////////////////

export interface IStudent extends IHumanEntity {
    hobbies: string[];
}

/////////////////////////////////////////////////////////////////////////////////////

export enum IModules {
    "Não iniciado",
    "Módulo 1",
    "Módulo 2",
    "Módulo 3",
    "Módulo 4",
    "Módulo 5",
    "Módulo 6",
    "Módulo 7",
}

export interface IMission {
    id: string;
    nome: string;
    dataDeInicio: string;
    dataDeTermino: string;
    modulo: IModules;
    alunos: IStudent[];
    docentes: ITeacher[];
}

/////////////////////////////////////////////////////////////////////////////////////
