export const deleteSearchResults = () => {
    const parentElem = document.getElementById("searchResults");
    let child = parentElem.lastElementChild;
    while(child){
        parentElem.removeChild(child);
        child = parentElem.lastElementChild;
    }
}

export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
        const reusltContents = document.createElement("div");
        reusltContents.classList.add("resultContents");
        if (result.img) {
            const resultImage = createResultImage(result);
            reusltContents.append(resultImage);
        }
        const resultText = createResultText(result);
        reusltContents.append(resultText);
        resultItem.append(reusltContents);
        const searchResults = document.getElementById("searchResults");
        searchResults.append(resultItem);
    });
}

const createResultItem = (result) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
    const resultTitle = document.createElement("div");
    resultTitle.classList.add("resultTitle");
    const link = document.createElement("a");
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = "_blank";
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
}

const createResultImage = (result) => {
    const resultImage = document.createElement("div");
    resultImage.classList.add("resultImage");
    const img = document.createElement("img");
    img.src = result.img;
    img.alt = result.title;
    resultImage.append(img);
    return resultImage;
}

const createResultText = (result) => {
    const resultText = document.createElement("div");
    resultText.classList.add("resultText");
    const resultDesc = document.createElement("p");
    resultDesc.classList.add("resultDescription");
    resultDesc.textContent = result.text;
    resultText.append(resultDesc);
    return resultText;
}

export const clearStatsLine = () => {
    document.getElementById("stats").textContent = "";
}

export const setStatsLine = (numberOfResults) => {
    const statsLine = document.getElementById("stats");
    if (numberOfResults) {
        statsLine.textContent = `Displaying ${numberOfResults} results.`
    } else {
        statsLine.textContent = "Sorry, no reuslts.";
    }
}