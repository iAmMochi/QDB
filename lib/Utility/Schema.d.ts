
declare class Schema {
    constructor (Id: string, Model: any, Serialiser: any);

    public get Serialise (): Function;
    public Instance (Target?: any): any;
}

export = Schema;