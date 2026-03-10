/**
 * Script de gestion de la serre clandestine
 * Respect de la rigueur et de la maintenabilité
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');

    // Le code secret pour activer l'IA de la serre
    const SECRET_KEY = "root"; 
if (localStorage.getItem('clandestineMode') === 'enabled') {
        applyClandestineStyle(true); // true pour dire "sans animation"
    }

    // --- ÉTAPE B : LA FONCTION DE TRANSFORMATION ---
    function applyClandestineStyle(immediate = false) {
        if (immediate) {
            document.body.classList.add('clandestine-mode');
            transformContent();
        } else {
            // Séquence avec animation (pour la première activation)
            document.body.classList.add('activating-ia');
            setTimeout(() => {
                document.body.classList.remove('activating-ia');
                document.body.classList.add('clandestine-mode');
                transformContent();
                localStorage.setItem('clandestineMode', 'enabled'); // ON SAUVEGARDE ICI
            }, 1200);
        }
    }

    const toggleSecretGarden = () => {
    const value = searchInput.value.toLowerCase().trim();

    if (value === "root") {
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
        console.log("Transformation des données terminée.");
    };

    searchBtn.addEventListener('click', toggleSecretGarden);
    
    // Permet de valider aussi avec la touche "Entrée"
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') toggleSecretGarden();
    });
});
/**
 * Effet de décryptage binaire au survol
 * S'active uniquement en mode clandestin
 */
const startHackerEffects = () => {
    const elementsToHack = document.querySelectorAll('h1, p, button, .card h3');

    elementsToHack.forEach(el => {
        // On sauvegarde le texte original dans un attribut data pour ne pas le perdre
        if (!el.dataset.original) el.dataset.original = el.innerText;
        
        el.addEventListener('mouseover', () => {
            // CONDITION CRUCIALE : On ne fait rien si on n'est pas en mode clandestin
            if (!document.body.classList.contains('clandestine-mode')) return;

            let iterations = 0;
            const originalText = el.dataset.original;
            
            const interval = setInterval(() => {
                el.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iterations) return originalText[index];
                        return Math.random() > 0.5 ? "1" : "0";
                    })
                    .join("");
                
                if(iterations >= originalText.length) clearInterval(interval);
                iterations += 1/3;
            }, 30);
        });
    });
};

// On appelle la fonction pour préparer les écouteurs d'événements
startHackerEffects();
const payloadBtn = document.querySelector('.cta-button');

if (payloadBtn) {
    payloadBtn.addEventListener('click', () => {
        // 1. On change le texte du bouton pour le côté "bourré"
        payloadBtn.innerText = "ERREUR: TROP D'ALCOOL DANS LE SERVEUR";
        
        // 2. On crée une alerte qui envahit l'écran
        const alertBox = document.createElement('div');
        alertBox.className = 'payload-alert';
        alertBox.innerHTML = `
            <div class="alert-content">
                <h1>⚠️ ALERTE CRITIQUE ⚠️</h1>
                <p>Injection du payload en cours...</p>
                <p>Statut : Castor ivre détecté sur le pont 42.</p>
                <p>01010011 01001111 01010101 01001100 01000101 (SOULE)</p>
            </div>
        `;
        document.body.appendChild(alertBox);

        // 3. On fait vibrer l'écran
        document.body.classList.add('screen-shake');

        // 4. On nettoie après 3 secondes
        setTimeout(() => {
            alertBox.remove();
            document.body.classList.remove('screen-shake');
            payloadBtn.innerText = "INJECTER_LE_PAYLOAD";
        }, 3000);
    });
}