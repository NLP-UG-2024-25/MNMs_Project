function updateLanguageInfo(language) {
    const info = document.getElementById("languageInfo");

    if (language === "minion") {
        info.textContent = `Minionese is the informal, playful language spoken by the Minions in Despicable Me. It is not a true constructed language but a mix of real languages such as English, Spanish, French, Italian, Korean, and Japanese. Created by filmmakers and voice actor Pierre Coffin, it is designed to sound funny and universally understandable. Instead of strict grammar, it uses recognizable words, exaggerated pronunciation, repetition, and tone to convey meaning. Words like “banana” and “gelato” are used directly, while other phrases are invented but resemble real speech. Context and emotion help viewers infer meaning, making Minionese a comedic, intuitive, and accessible language.`;
    } 
    else if (language === "gameofthrones") {
        info.textContent = `In Game of Thrones, Dothraki and High Valyrian are fully developed constructed languages created by linguist David J. Peterson for the TV adaptation, based on limited words from George R. R. Martin. Dothraki, spoken by nomadic warriors, was designed to sound harsh and practical, drawing influence from languages like Turkish, Russian, and Swahili, with structured grammar and a large vocabulary shaped for actor usability. High Valyrian functions as a prestigious, classical language similar to Latin, used in formal, scholarly, and noble contexts, with multiple derived dialects known as Low Valyrian. Unlike playful fictional speech, both are complete conlangs with real grammatical systems and learnable structure.`;
    } 
    else if (language === "pirate") {
        info.textContent = `Pirate speak is a stylized form of English shaped by popular culture, not a real historical language. Its modern image comes from media portrayals, especially Robert Newton’s performance in “Treasure Island” (1950). Historically, pirates spoke various languages and dialects depending on origin, including English, Spanish, and French. There was no single pirate language. Today’s pirate speech uses exaggerated patterns like “ye” for “you,” dropped consonants, and phrases such as “Ahoy!” These features create a recognizable, performative dialect that signals pirate identity rather than complex grammar. It is a cultural shorthand rather than a structured linguistic system.`;
    } 
    else {
        info.textContent = "Choose a language to see details...";
    }
}
let Langurl = "mainpage"
function changeTheme(selectedLanguage) {
    inputText.value = "";
    outputText.value = "";

    document.body.classList.remove('universal', 'minion-theme', 'valyrian-theme', 'pirate-theme');

    const inputBox = document.getElementById('inputText');
    const outputBox = document.getElementById('outputText');

    if (selectedLanguage === 'gameofthrones') {
        document.body.classList.add('valyrian-theme');
        Langurl = "valyrian"
    } else if (selectedLanguage === 'pirate') {
        document.body.classList.add('pirate-theme');
        Langurl = "pirate"
    } else if (selectedLanguage === 'minion') {
        document.body.classList.add('minion-theme');
        Langurl = "minion"
    }
    url = Baseurl + Langurl;
    updateLanguageInfo(selectedLanguage);
}

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.querySelector("button");

const Baseurl = "https://fun-trans.duckdns.org/";
const apiKey = "UG-5tud3nt-2026";

function handleTranslation() {
    if (Langurl == "mainpage") {
        alert("Choose the language!")
        return
    }
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