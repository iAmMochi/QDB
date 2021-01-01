
declare const List: {
    Usage: string = "qdb <database> list";
    Description: string = "Lists this database's tables with the amount of rows for each table.";
    Examples: string[] = [
        "qdb Users.qdb list",
        "qdb ./Internal/Guilds.qdb list"
    ];

    Arguments: number = 0;

    Execute: (Path: any) => boolean;
}

export = List;
