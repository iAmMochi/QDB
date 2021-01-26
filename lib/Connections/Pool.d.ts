
declare class Pool {
    constructor(PathURL: string, PoolOptions: any);

    public Select(Base: string): any;
    public Disconnect(): Pool;
}

export = Pool;