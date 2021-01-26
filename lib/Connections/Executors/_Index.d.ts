
declare const _Index: {
    Schema: (Connection: any) => boolean;
    FetchAll: (Connection: any) => number;
    SweepInterval: (Connection: any) => Function;
    BackupInterval: (Connection: any) => Function;
};

export = _Index;