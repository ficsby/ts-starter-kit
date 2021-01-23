interface IUser {
    name: string;
    id: number;
}

export class User implements IUser {
    name: string;

    id: number;

    constructor(name?: string, id?: number) {
        this.name = name || '';
        this.id = id || 0;
    }
}
