
declare const Erase: {
    Usage: string = "qdb <database> erase <name>";
    Description: string = "Drops the table given by the name attribute.";
    Examples: string[] = [
        "qdb Users.qdb erase Users",
        "qdb ./Internal/Guilds.qdb erase Profiles"
    ];

    Arguments: number = 1;

    Execute: (Path: any, Arguments: any) => true | void;
}

export = Erase;
