/**
 * Script de gestion de la serre clandestine
 * Respect de la rigueur et de la maintenabilité
 */
/* --- GESTION DU MODE CLANDESTIN PERSISTANT --- */
// Vérification immédiate au chargement
(function() {
    const savedMode = localStorage.getItem('clandestineMode');
    if (savedMode === 'true') {
        document.body.classList.add('clandestine-mode');
    }
})();
// A. FONCTION POUR APPLIQUER LE MODE (On l'appelle au clic ou au chargement)
function toggleClandestineMode(state) {
    if (state === 'active') {
        document.body.classList.add('clandestine-mode');
        localStorage.setItem('siteMode', 'dark'); // On enregistre "dark"
    } else {
        document.body.classList.remove('clandestine-mode');
        localStorage.setItem('siteMode', 'light'); // On enregistre "light"
    }
}

// B. AU CHARGEMENT : On vérifie la mémoire du navigateur
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('siteMode');
    if (savedMode === 'dark') {
        toggleClandestineMode('active');
    }
});

// C. LE DÉCLENCHEUR (Ton bouton de recherche)
const searchBtn = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');

function setClandestine(active) {
    if (active) {
        document.body.classList.add('clandestine-mode');
        localStorage.setItem('clandestineMode', 'true');
    } else {
        document.body.classList.remove('clandestine-mode');
        localStorage.setItem('clandestineMode', 'false');
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const code = searchInput.value.toLowerCase();
        if (code === 'root') setClandestine(true);
        if (code === 'day' || code === 'exit') setClandestine(false);
        searchInput.value = '';
    });
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