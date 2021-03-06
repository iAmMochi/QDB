
const Format = require("../Format");
const SQL    = require("better-sqlite3");

module.exports = {
    Usage: "qdb <database> erase <name>",
    Description: "Drops the table given by the name attribute.",
    Examples: [
        "qdb Users.qdb erase Users",
        "qdb ./Internal/Guilds.qdb erase Profiles"
    ],

    Arguments: 1,

    Execute: (Path, Arguments) => {

        const Connection = new SQL(Path);
        const Table = Arguments.shift();
        
        const ExistingTable = Connection.prepare("SELECT name FROM 'sqlite_master' WHERE type = 'table' AND name = ?;").get(Table);
        if (!ExistingTable) return console.log(`${Format.DIM("Error")}: there's no table with the name '${Table}'.`);

        Connection.prepare(`DROP TABLE '${Table}';`).run();
        console.log(`Successfully erased table '${Format.BOLD(Table)}'.`);
        Connection.close();

        return true;

    }
};
