
declare const Erase: {
    Usage: string;
    Description: string;
    Examples: string[];

    Arguments: number;

    Execute: (Path: any, Arguments: any) => true | void;
}

export = Erase;
