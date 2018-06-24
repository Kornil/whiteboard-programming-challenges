// first create an array with all inputed strings
// split all the string in array by space
// remove all duplicates and turn it into a single string
// input: "bob" "alice" "john" "bob bob dan"
// output: "bob alice john dan"
const deduplicateString = (...string) =>
    [...new Set(
        [...string]
            .join(" ")
            .split(" ")
        )
    ].join(" ");
