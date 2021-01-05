
declare const Rename: {
    Usage: string;
    Description: string;
    Examples: string[];

    Arguments: number;

    Execute: (Path: any, Arguments: any) => Promise<true | void>;
}

export = Rename;
