import {
    clearPushListener,
    clearSearchText,
    setSearchFocus,
    showClearTextButton
} from "./searchBar.js";
import {
    getSearchTerm,
    retrieveSearchResults
} from "./dataFunction.js";
import {
    deleteSearchResults,
    buildSearchResults,
    clearStatsLine,
    setStatsLine
} from "./searchResults.js";
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    //set the focus
    setSearchFocus();
    //3 listeners clear text
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

//Procedural workflow function

const submitTheSearch = (event) => {
    event.preventDefault();
    //delete search results to display new results
    deleteSearchResults();
    //processs the search
    processTheSearch();
    //set the focus
    setSearchFocus();
}

const processTheSearch = async () => {
    //clear stats line
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) {
        //build search results
        buildSearchResults(resultArray);
    }
    //set stats line
    setStatsLine(resultArray.length);
}