/**
 * Script de gestion de la serre clandestine
 * Respect de la rigueur et de la maintenabilité
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');

    // Le code secret pour activer l'IA de la serre
    const SECRET_KEY = "root"; 

    const toggleSecretGarden = () => {
    const value = searchInput.value.toLowerCase().trim();

    if (value === "overgrow") {
        // 1. On lance l'effet visuel de transition (Flash/Glitch)
        document.body.classList.add('activating-ia');
        searchInput.value = "CHARGEMENT...";
        searchInput.disabled = true; // On bloque l'input pendant l'anim

        // 2. On attend 1.5 seconde (le temps que l'IA "réfléchisse")
        setTimeout(() => {
            // 3. On bascule enfin dans le mode Néon/Clandestin
            document.body.classList.remove('activating-ia');
            document.body.classList.add('clandestine-mode');
            
            // On lance la mutation des textes que tu as déjà codée
            transformContent(); 
            
            searchInput.value = "ACCÈS ACCORDÉ";
            console.log("Protocole Botanique-Geek synchronisé. 🌿");
        }, 1500); 

    } else {
        // Petit effet d'erreur si le code est faux
        searchInput.style.borderColor = "red";
        setTimeout(() => searchInput.style.borderColor = "", 500);
    }
};

    /**
     * Change les noms des boissons et de l'équipage pour le mode secret
     */
    const transformContent = () => {
        // Change les noms des boissons (ex: Café -> Café à la Sève Mutante)
        const drinkNames = document.querySelectorAll('.card h3');
        drinkNames.forEach(name => {
            name.textContent += " [BOOSTÉ IA]";
        });

        // Change les rôles de l'équipage
        const roles = document.querySelectorAll('.role');
        roles.forEach(role => {
            role.textContent = "Cultivateur Bio-Hacker";
        });
    };

    searchBtn.addEventListener('click', toggleSecretGarden);
    
    // Permet de valider aussi avec la touche "Entrée"
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') toggleSecretGarden();
    });
});
