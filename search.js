export function getMatchedResults(userInput, listOfStrings){
    let matchedResults = [];
    let regexPattern = new RegExp(userInput);
    listOfStrings.forEach((occupation) => {
        // If RegEx matches occupation string -> store string in the Array
        if(occupation.search(regexPattern) >= 0) matchedResults.push(occupation)
    })
    
    return matchedResults;
}
