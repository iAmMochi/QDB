import Transaction from "../Utility/Transaction";
import Selection from "../Utility/Selection";

type Pathlike = string;
type DataModel = Object|Boolean;

declare class Connection {
    constructor (PathURL: string, RawOptions: any, _Pool: any);
    
    public get Size (): number;
    public get CacheSize (): number;
    public get Indexes (): any[];
    public Disconnect (): Connection;
    
    private get _Ready (): boolean;
    private _Resolve(Pathlike: Pathlike): Array<string>;
    private _Patch(Key: string | number, Val: any | any[]): any;
    private _CastPath(Frame: any | any[], Pathlike: any[], Item?: any): any;

    public AsObject(): any;
    public ToIntegratedManager(Pathlike?: Pathlike, Holds?: Function): any;
    public Transaction(): Transaction;
    public Set(KeyOrPath: Pathlike, Value: any | any[] | DataModel | any): Connection;
    public Fetch(KeyOrPath: Pathlike, Cache?: boolean): any | any[] | DataModel | any;
    public Evict(...Keys: Pathlike[]): Connection;
    public Erase(...Keys: Pathlike[]): Connection;
    public Exists(Key: Pathlike, Cache?: boolean): boolean;
    public Each(Fn: Function): Connection;
    public Find(Fn: Function): any | any[] | DataModel;
    public Select(FnOrPath?: Function | Pathlike): Selection;
    public Push(KeyOrPath: Pathlike, ...Values: any[]): number;
    public Shift(KeyOrPath: Pathlike, ...Values: any[]): number | any;
    public Pop(KeyOrPath: Pathlike): any;
    public Remove(KeyOrPath: Pathlike, Fn: Function): number;
    public Slice(KeyOrPath: Pathlike, Start?: number, End?: number): number;
    public Ensure(KeyOrPath: Pathlike, Input: any | any[] | any | any, Merge?: boolean): boolean;
    public Modify(KeyOrPath: Pathlike, Fn: Function): any | any[] | DataModel;
    public Invert(KeyOrPath: Pathlike): boolean;
}

export = Connection;