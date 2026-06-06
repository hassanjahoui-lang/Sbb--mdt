// Ricezione messaggi dal client LUA
window.addEventListener('message', function(event) {
    let data = event.data;
    
    if (data.action === "open") {
        document.getElementById('ui-container').style.display = "block";
    } else if (data.action === "close") {
        document.getElementById('ui-container').style.display = "none";
    }
});

// Funzione per chiudere l'MDT premendo la barra inferiore (Home Indicator) o ESC
function closeMDT() {
    fetch(`https://${GetParentResourceName()}/close`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    });
}

document.onkeyup = function(data) {
    if (data.which == 27) { // Tasto ESC
        closeMDT();
    }
};

// Logica di navigazione delle App
function openApp(appType) {
    document.getElementById('app-view').classList.remove('hidden');
    
    let title = document.getElementById('app-title');
    let content = document.getElementById('app-content');
    
    if (appType === 'police') {
        title.innerText = "LSPD - Mobile Data Terminal";
        content.innerHTML = "<p>Qui andrà il database dei criminali, mandati e multe.</p>";
    } else if (appType === 'ems') {
        title.innerText = "EMS - Gestione Pazienti";
        content.innerHTML = "<p>Qui andrà il registro medico e le cartelle cliniche.</p>";
    } else if (appType === 'mechanic') {
        title.innerText = "Meccanico - Fatture e Ordini";
        content.innerHTML = "<p>Gestione riparazioni e ordini pezzi.</p>";
    } else if (appType === 'darkweb') {
        title.innerText = "Tor Network - Mercato Nero";
        document.getElementById('app-view').style.background = "#1a1a1a";
        document.getElementById('app-view').style.color = "#00ff00";
        content.innerHTML = "<p>Ordini armi illegali, droga per gang/mafie.</p>";
    }
}

function closeApp() {
    document.getElementById('app-view').classList.add('hidden');
    document.getElementById('app-view').style.background = "#f2f2f7";
    document.getElementById('app-view').style.color = "black";
}

// Orologio in tempo reale
setInterval(() => {
    let now = new Date();
    document.getElementById('clock').innerText = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
}, 1000);
