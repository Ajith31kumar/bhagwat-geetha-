const chapterSelect = document.getElementById("chapterSelect");
const verseSelect = document.getElementById("verseSelect");
const fetchButton = document.getElementById("fetchButton");
const slokaDiv = document.getElementById("sloka");

function populateOptions() {
    for (let i = 1; i <= 18; i++) {
        const chapterOption = document.createElement("option");
        chapterOption.value = i;
        chapterOption.textContent = `Chapter ${i}`;
        chapterSelect.appendChild(chapterOption);
    }

    for (let i = 1; i <= 72; i++) {
        const verseOption = document.createElement("option");
        verseOption.value = i;
        verseOption.textContent = `Verse ${i}`;
        verseSelect.appendChild(verseOption);
    }
}

async function fetchSloka() {
    const chapter = chapterSelect.value;
    const verse = verseSelect.value;
    const apiUrl = `https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        slokaDiv.textContent = data.slok;
    } catch (error) {
        slokaDiv.textContent = "Error fetching sloka.";
    }
}

populateOptions();

fetchButton.addEventListener("click", fetchSloka);