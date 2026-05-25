function updateLanguageInfo(language) {
    const info = document.getElementById("languageInfo");

    if (language === "minion") {
        info.textContent = `The language spoken by the Minions in "Despicable Me" is known informally as "Minionese." Unlike fully constructed languages, Minionese is a playful hybrid of multiple real-world languages, including English, Spanish, French, Italian, and even bits of Korean or Japanese.

It was developed by the filmmakers and voice actors (notably Pierre Coffin) to sound humorous and universally understandable. Rather than strict grammar, it relies on recognizable words, exaggerated pronunciation, and emotional tone.

For example, words like "banana" or "gelato" are used directly, while other phrases are invented but resemble real languages. The structure is loose and adaptive—grammar rules are inconsistent, and meaning is often conveyed through intonation, repetition, and visual context.

Minionese works because it taps into linguistic familiarity without requiring comprehension. Viewers can often guess the meaning based on similarity to known words, making it a highly effective comedic tool rather than a formal language.`;
    } 
    else if (language === "gameofthrones") {
        info.textContent = `In Game of Thrones, languages such as Dothraki and High Valyrian are among the most fully developed fictional languages in modern media. Originally, author George R. R. Martin created only a few words, but for the TV adaptation, linguist David J. Peterson expanded them into complete systems.

Dothraki is spoken by a nomadic warrior culture and was designed to sound harsh and practical. It has thousands of words and draws inspiration from real languages such as Turkish, Russian, and Swahili. Its grammar is functional but constrained to remain pronounceable for actors.

High Valyrian, on the other hand, serves as a classical or elite language—similar to Latin in medieval Europe. It is no longer commonly spoken in everyday life within the story but is used in education, nobility, and formal contexts. Over time, it evolved into multiple dialects (Low Valyrian), reflecting historical linguistic change.

These languages work as true constructed languages (conlangs), with defined grammar, vocabulary, and phonology. Unlike Minionese, they can be learned and used for real communication.`;
    } 
    else if (language === "pirate") {
        info.textContent = `Pirate speak is not a real historical language but a stylized dialect of English shaped by popular culture. Its modern form comes largely from portrayals of pirates in films and literature, especially the influence of actor Robert Newton in the 1950 film "Treasure Island."

Historically, real pirates in the so-called Golden Age of Piracy (17th–18th centuries) would have spoken various dialects of English, Spanish, French, or other languages, depending on their origin. There was no unified "pirate language."

Modern pirate speak works through recognizable lexical patterns and phonetic shifts. Common features include dropping consonants ("sailin"), substituting words ("ye" instead of "you"), and stock phrases ("Ahoy!").

These features create a shared, performative dialect that signals identity rather than conveying linguistic complexity. It is essentially a cultural shorthand for piracy, not a true language system.`;
    } 
    else {
        info.textContent = "Choose a language to see details...";
    }
}

function changeTheme(selectedLanguage) {

    document.body.classList.remove('universal', 'minion-theme', 'valyrian-theme', 'pirate-theme');

    const inputBox = document.getElementById('inputText');
    const outputBox = document.getElementById('outputText');

    if (selectedLanguage === 'universal') {
        inputBox.style.display = 'none';
        outputBox.style.display = 'none';
    } else {
        inputBox.style.display = 'block';
        outputBox.style.display = 'block';
    }

    if (selectedLanguage === 'gameofthrones') {
        document.body.classList.add('valyrian-theme');
    } else if (selectedLanguage === 'pirate') {
        document.body.classList.add('pirate-theme');
    } else if (selectedLanguage === 'minion') {
        document.body.classList.add('minion-theme');
    }

    updateLanguageInfo(selectedLanguage);
}

///tu narazie tylko minionki, pewnie trzeba bedzie to podpiąć do tych motywów?
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.querySelector("button");

const url = "https://fun-trans.duckdns.org/minion";
const apiKey = "UG-5tud3nt-2026";

function handleTranslation() {
    const textToTranslate = inputText.value;

    fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "text": textToTranslate
            })
    })
    .then(response => response.text())
    .then(response => {
        const translatedData = response;
        console.log(translatedData)
        outputText.value = translatedData;
    })
    .catch(error => {
        console.error("Translation failed:", error);
        outputText.value = "Error: Could not connect to the API.";
    });
}

translateBtn.addEventListener("click", handleTranslation);