
declare class Transaction {
    constructor (_Connection: any);

    public Commit (): boolean;
    public Rollback (): boolean;
}

export = Transaction;