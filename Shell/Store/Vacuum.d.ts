
declare const Vacuum: {
    Usage: string = "qdb <database> vacuum"; 
    Description: string = "Rebuilds this database, repacking it into a minimal amount of disk space.";
    Examples: string[] = [
        "qdb Guilds.qdb vacuum",
    ];

    Arguments: number = 0;

    Execute: (Path: any) => boolean;
}