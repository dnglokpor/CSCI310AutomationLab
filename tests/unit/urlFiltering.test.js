const filter = require("../../src/filterByTerm");

// Check Filter Function working properly
describe("Filter function", () => {
    test("Search by term functionality", () => {
        const input = [
            {id: 1, url: "https://www.url1.com"},
            {id: 2, url: "https://www.url2.com"},
            {id: 3, url: "https://www.link1.com"}
        ];
        const output = [
            {id: 3, url: "https://www.link1.com"}
        ];
        expect(filter.filterByTerm(input, "link")).toEqual(output);
        expect(filter.filterByTerm(input, "LINK")).toEqual(output);
    });
    // check if the test loop is throwing the right error
    test("Search term cannot be empty", () => {
        const input = [
            {id: 1, url: "https://www.url1.com"},
            {id: 2, url: "https://www.url2.com"},
            {id: 3, url: "https://www.link1.com"}
        ];
        expect(() => {
            filter.filterByTerm(input, null);
        }).toThrowError(Error("SearchTerm cannot be empty"));
    });
});