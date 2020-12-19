import DataSchema from "./lib/Utility/Schema";
import PartialConnection from "./lib/Connections/PartialConnection";
import Connection from "./lib/Connections/Connection";
import Pool from "./lib/Connections/Pool";

export = {
    PartialConnection: PartialConnection,
    Connection:        Connection,
    Pool:              Pool,
    
    Schema: DataSchema.Schema,

    Model: (Id) => {
        if (typeof Id === "string") return null;
        return DataSchema.ModelStore.resolve(Id);
    }
}