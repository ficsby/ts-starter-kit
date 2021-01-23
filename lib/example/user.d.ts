interface IUser {
    name: string;
    id: number;
}
export declare class User implements IUser {
    name: string;
    id: number;
    constructor(name?: string, id?: number);
}
export {};
