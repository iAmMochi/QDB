
declare class _Selection {
    constructor (_Entries: any, _Holds: string);

    public get Keys (): any[];
    public get Values (): any[];
    public get AsObject (): any;
    public Retrieve (Key: any): any | any[] | any;
}

export = _Selection;