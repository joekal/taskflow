const motivations = [
    { id: 1, text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Admin Sarah", date: "Il y a 2h" },
    { id: 2, text: "Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre.", author: "Admin Marc", date: "Il y a 5h" },
    { id: 3, text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Admin Julie", date: "Hier" }
];

const grid = document.getElementById('motivation-grid');
const notifList = document.getElementById('notif-list');
const notifCount = document.getElementById('notif-count');
let count = 0;

// Afficher les cartes
function displayCards() {
    grid.innerHTML = motivations.map(m => `
        <div class="card">
            <div class="date"><i class="far fa-clock"></i> ${m.date}</div>
            <p>"${m.text}"</p>
            <div style="margin-top: 1.5rem; font-weight: bold; color: white;">— ${m.author}</div>
        </div>
    `).join('');
}

// Simuler une notification
function addNotification(msg) {
    count++;
    notifCount.innerText = count;
    const item = document.createElement('div');
    item.className = 'notif-item';
    item.innerHTML = `<strong>Nouveau post</strong> : ${msg.substring(0, 30)}...`;
    notifList.prepend(item);
}

function toggleNotifications() {
    const panel = document.getElementById('notif-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    if(panel.style.display === 'block') {
        count = 0;
        notifCount.innerText = "0";
    }
}

// Initialisation
displayCards();
setTimeout(() => addNotification("La persévérance est la clé du succès."), 2000);
setTimeout(() => addNotification("Croyez en vos rêves."), 5000);