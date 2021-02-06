export function Autocomplete(data){

    window.Autocomplete = {
        default: data,
        filtered: [] 
    };
    this.data = window.Autocomplete;

    this.filterWithRegex = (userInput) => {
        const regexPattern = new RegExp(userInput, 'gi');
        this.data.default.forEach((item) => {
            // If RegEx matches occupation string -> store string in the Array
            if(item.search(regexPattern) >= 0) this.data.filtered.push(item)
        })

        console.log("filterWithRegex", this.data.filtered)
        return this.data.filtered;
    }

    this.resetData = () => this.data.filtered = [];

    this.getHTML = (userInput) => {
        this.resetData();
        const dataToParse = userInput ? this.filterWithRegex(userInput) : this.data.default;

        // Generate HTML
        const section = document.createElement("section");
        const input = document.querySelector("input");

        dataToParse.forEach((item) => {
            const paragraph = document.createElement("div");
            const highlightedText = item.replace(userInput, `<u class='highlight'><b >${userInput}</b></u>`) 
            paragraph.innerHTML = highlightedText;
            paragraph.onclick = () => input.value = item;
            section.appendChild(paragraph);
        });

        return section;
    }
}