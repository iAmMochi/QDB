
const QDB = require("../QDB");
const CLI = require("cli-color");

process.stdout.write(CLI.reset);
const {Trials, Tables} = require("./Seed")();
process.stdout.write(CLI.cyan.bold("Running benchmarks...\n"));

const Times = new Map();

for (const Trial of Trials) {
    const Test = Trial.split(".")[0];
    const Benchmark = require(`./Trials/${Trial}`);
    process.stdout.write(CLI.white(`· Sampling '${CLI.bold(Test)}' benchmark...`));

    Times.set(Test, {});

    // Test each table's performance
    for (const [Table, Size] of Tables) {
        const Connection = new QDB.Connection("Benchmark/Guilds.qdb", {
            Table
        });

        const TStart = process.hrtime();
        const Amount = Benchmark(Connection);
        const TEnd   = process.hrtime(TStart);

        const Time = TEnd[0] + (TEnd[1] / 1000000000);

        Times.get(Test)[Table] = {
            OpsPerSec: Amount / Time,
            Time, Amount, Size
        };
    }


    // Publish trial time
    const Current = Times.get(Test);
    process.stdout.write(CLI.erase.line);
    process.stdout.write(CLI.move(-31 - Test.length));

    process.stdout.write(CLI.magenta(CLI.bold(Test) +
        `\n  (${Math.round(Math.max(...Object.values(Current).map(M => M.OpsPerSec)))} ops/s)` +
        `\n  (Amount: ${Current[Object.keys(Current).pop()].Amount})`
    ));

    for (const Table in Current)
    process.stdout.write(CLI.white(
        `\n· ${CLI.bold(Table.padEnd(15))}` +
        CLI.green.bold(`${Current[Table].Time.toFixed(2)}s`)
    ));

    process.stdout.write("\n\n");
}

process.stdout.write(CLI.green("Completed running benchmarks!\n"));
