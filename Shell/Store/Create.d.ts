
declare const Create: {
    Usage: string = "qdb <database> create <name>";
    Description: string = "Adds an additional table in the given database file.";
    Examples: string[] = [
        "qdb Users.qdb create Users",
        "qdb ./Internal/Guilds.qdb create Profiles"
    ];

    Arguments: number = 1;

    Execute: (Path: any, Arguments: any) => true | void;
};

export = Create;
