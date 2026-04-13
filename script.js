function changeTheme(selectedLanguage) {

    document.body.classList.remove('universal', 'minion-theme', 'valyrian-theme', 'pirate-theme', 'yoda-theme');
    if (selectedLanguage === 'universal') {
    
    } else if (selectedLanguage === 'gameofthrones') {
        document.body.classList.add('valyrian-theme');
    } else if (selectedLanguage === 'pirate') {
        document.body.classList.add('pirate-theme');
    } else if (selectedLanguage === 'minion') {
        document.body.classList.add('minion-theme');
    } else if (selectedLanguage === 'starwars') {
        document.body.classList.add('yoda-theme');
    }
}