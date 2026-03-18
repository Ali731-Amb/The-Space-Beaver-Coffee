/**
 * RECUERDO : SYSTÈME DE GESTION DU BARRAGE SPATIAL
 * Centralise le mode clandestin, la persistance et les effets spéciaux.
 */

/* ==========================================================================
   1. INITIALISATION & PERSISTANCE (Sécurité au chargement)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('clandestineMode');
    
    // Si le mode était actif avant de changer de page, on le remet direct
    if (savedMode === 'true') {
        document.body.classList.add('clandestine-mode');
    }
    
    // On initialise les écouteurs de la barre de recherche
    initSearchConsole();
});

/* ==========================================================================
   2. LOGIQUE DU MODE CLANDESTIN (Le coeur du piratage)
   ========================================================================== */
function setClandestineMode(active) {
    const searchInput = document.querySelector('.search-box input');

    if (active) {
        // Phase 1 : Animation de chargement/glitch
        document.body.classList.add('activating-ia');
        if (searchInput) {
            searchInput.value = "PIRATAGE EN COURS...";
            searchInput.disabled = true;
        }

        // Phase 2 : Basculement après 1.2s
        setTimeout(() => {
            document.body.classList.remove('activating-ia');
            document.body.classList.add('clandestine-mode');
            localStorage.setItem('clandestineMode', 'true');
            
            if (searchInput) {
                searchInput.disabled = false;
                searchInput.value = "ACCÈS ACCORDÉ";
                setTimeout(() => searchInput.value = "", 2000);
            }
            console.log("Secteur Alpha déverrouillé. 🪵🚀");
        }, 1200);

    } else {
        // Retour immédiat au mode jour (Beige)
        document.body.classList.remove('clandestine-mode');
        localStorage.setItem('clandestineMode', 'false');
        if (searchInput) searchInput.value = "SYSTÈME RESTAURÉ";
    }
}

/* ==========================================================================
   3. GESTION DES ENTRÉES (Barre de recherche & Touche Entrée)
   ========================================================================== */
function initSearchConsole() {
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    if (!searchBtn || !searchInput) return;

    const checkCode = () => {
        const val = searchInput.value.toLowerCase().trim();
        
        if (val === 'root') {
            setClandestineMode(true);
        } else if (val === 'day' || val === 'exit' || val === 'lumiere') {
            setClandestineMode(false);
        } else {
            // Petit flash rouge sur l'input en cas d'erreur
            searchInput.style.borderColor = "red";
            setTimeout(() => searchInput.style.borderColor = "", 500);
        }
    };

    searchBtn.addEventListener('click', checkCode);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkCode();
    });
}

/* ==========================================================================
   4. EFFETS SPÉCIAUX (Payload & Alcool)
   ========================================================================== */
const payloadBtn = document.querySelector('.btn-main'); // Ton bouton principal

if (payloadBtn) {
    payloadBtn.addEventListener('click', (e) => {
        // Si on est en mode clandestin, on active l'effet spécial
        if (document.body.classList.contains('clandestine-mode')) {
            e.preventDefault(); // Empêche de quitter la page
            
            payloadBtn.innerText = "ERREUR: SYSTÈME IVRE";
            
            // Création de l'alerte invasive
            const alertBox = document.createElement('div');
            alertBox.className = 'payload-alert';
            alertBox.innerHTML = `
                <div class="alert-content">
                    <h1>⚠️ ALERTE CRITIQUE ⚠️</h1>
                    <p>Injection du payload terminée...</p>
                    <p>Statut : Castor ivre détecté sur le pont 42.</p>
                    <p>S.O.U.L.E. PROTOCAL : ACTIVÉ</p>
                </div>
            `;
            document.body.appendChild(alertBox);

            // Tremblement d'écran
            document.body.classList.add('screen-shake');

            // Nettoyage automatique
            setTimeout(() => {
                alertBox.remove();
                document.body.classList.remove('screen-shake');
                payloadBtn.innerText = "ACCÉDER AU SECTEUR";
            }, 3000);
        }
    });
}