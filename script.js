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

        if (value === SECRET_KEY) {
            document.body.classList.add('clandestine-mode');
            transformContent(); // On lance la mutation du texte
            console.log("IA System : Protocol Overgrow activated. 🌱");
        } else {
            console.warn("Accès refusé. Code incorrect.");
            // Petit effet de vibration si le code est faux
            searchInput.style.border = "2px solid red";
            setTimeout(() => searchInput.style.border = "", 500);
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
