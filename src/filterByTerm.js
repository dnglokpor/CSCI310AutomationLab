function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) throw Error("SearchTerm cannot be empty");
    if (!inputArr.length) throw Error("InputArr cannot be empty"); // new line
    const regex = new RegExp(searchTerm);

    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}
  
module.exports = { filterByTerm: filterByTerm };