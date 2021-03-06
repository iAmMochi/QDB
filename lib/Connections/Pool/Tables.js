
const Connection = require("../../Connections/Connection");

const Path = require("path");
const SQL  = require("better-sqlite3");

module.exports = (Pool, PathURL, BaseOptions) => {
    try {
        const Main = new SQL(PathURL);

        Main.prepare("SELECT name FROM 'sqlite_master' WHERE type = 'table' AND name NOT LIKE 'sqlite_%';")
        .all().map(Entry => Entry.name).forEach((Table, _i, All) => {
            const Identifier = All.length > 1 ? Table :
            Path.basename(PathURL).split(".")[0];

            Pool.Store.set(Identifier,
                new Connection(PathURL, {
                    ...Pool.ValOptions.Exclusives[Identifier] || BaseOptions,
                    Identifier, Table
                }, Pool)
            );
        });

        Main.close();
    } catch (_) {}
}
