
declare const Rename: {
    Usage: string = "qdb <database> rename <name> <new-name>";
    Description: string = "Alters the selected table and renames it to a given string.";
    Examples: string[] = [
        "qdb Users.qdb rename Users Customers",
        "qdb ./Internal/Guilds.qdb rename Profiles Instances"
    ];

    Arguments: number = 2;

    Execute: (Path: any, Arguments: any) => Promise<true | void>;
}

export = Rename;
