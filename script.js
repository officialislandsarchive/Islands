const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const modalTitle = document.getElementById('modalTitle');
const modalItems = document.getElementById('modalItems');
const searchButton = document.getElementById("search");
const searchEntry = document.getElementById("searchInput");

const serverUrl = '';

let items = {
    "ALL": [
        { name: "Item 1 - all", value: "10" },
        { name: "Item 2 - all", value: "20" }, 
    ],
    "COMBAT": [
        { name: "Item 1 - Combat", value: "10" },
        { name: "Item 2 - Combat", value: "20" },
        // Add more combat items here
    ],
    "MINERAL": [
        { name: "Item 1 - Mineral", value: "30" },
        { name: "Item 2 - Mineral", value: "40" },
        // Add more mineral items here
    ],
    "DECOR": [
        { name: "Item 1 - Decor", value: "50" },
        { name: "Item 2 - Decor", value: "60" },
        // Add more decor items here
    ],
    "TOOLS": [
        { name: "Item 1 - Tools", value: "70" },
        { name: "Item 2 - Tools", value: "80" },
        // Add more tools items here
    ],
    "CROPS": [
        { name: "Item 1 - Crops", value: "90" },
        { name: "Item 2 - Crops", value: "100" },
        // Add more crops items here
    ],
    "FLOWERS": [
        { name: "Item 1 - Flowers", value: "110" },
        { name: "Item 2 - Flowers", value: "120" },
        // Add more flowers items here
    ],
    "FOOD": [
        { name: "Item 1 - Food", value: "130" },
        { name: "Item 2 - Food", value: "140" },
        // Add more food items here
    ],
    "INDUSTRIAL": [
        { name: "Item 1 - Industrial", value: "150" },
        { name: "Item 2 - Industrial", value: "160" },
        // Add more industrial items here
    ],
    "ANIMALS": [
        { name: "Item 1 - Animals", value: "170" },
        { name: "Item 2 - Animals", value: "180" },
        // Add more animals items here
    ],
    "BLOCKS": [
        { name: "Item 1 - Blocks", value: "190" },
        { name: "Item 2 - Blocks", value: "200" },
        // Add more blocks items here
    ],
    "TOTEMS": [
        { name: "Item 1 - Totems", value: "210" },
        { name: "Item 2 - Totems", value: "220" },
        // Add more totems items here
    ],
    "LUMBER": [
        { name: "Item 1 - Lumber", value: "230" },
        { name: "Item 2 - Lumber", value: "240" },
        // Add more lumber items here
    ],
    "MISC": [
        { name: "Item 1 - Misc", value: "250" },
        { name: "Item 2 - Misc", value: "260" },
        // Add more misc items here
    ]
};


const creditsData = [
  {
    name: "Xx_Gamer462",
    surname: "",
    role: "Website Manager/Developer",
    description: "The one who manages everything!",
    image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459862811054222/noFilter.png?ex=6654d318&is=66538198&hm=42616a4e58ce752027cbd83803ffd3db443216cf581d77e7c83a1d92f7413c71&"
  }
];

fetchJson();

document.getElementById("creditsBtn").addEventListener("click", showCredits);
span.onclick = closeModal;
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
searchButton.onclick = handleSearch;

function openModal(category) {
    modal.style.display = "block";
    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    let allItems = [];
    for (const key in items) {
        if (items.hasOwnProperty(key)) {
            allItems = allItems.concat(items[key]);
        }
    }
    if (category === "ALL") {
        modalItems.innerHTML = allItems.map(item => `
            <div class="item-box">
                <span class="item-name">${item.name}</span>
                <span class="coin-value">Coin Value: ${item.value}</span>
            </div>
        `).join('');
    } else {
        modalItems.innerHTML = items[category].map(item => `
            <div class="item-box">
                <span class="item-name">${item.name}</span>
                <span class="coin-value">Coin Value: ${item.value}</span>
            </div>
        `).join('');
    }
}

function showCredits() {
    modal.style.display = "block";
    modalTitle.textContent = "Credits";
    modalItems.innerHTML = creditsData.map(person => `
        <div class="item-box">
            <img src="${person.image}" alt="${person.name}" class="credit-image">
            <div class="credit-details">
                <div class="credit-name">${person.name} ${person.surname}</div>
                <div class="credit-role">${person.role}</div>
                <div class="credit-description">${person.description}</div>
            </div>
        </div>
    `).join('');
}

function closeModal() {
    modal.style.display = "none";
}

function handleSearch() {
    const keyword = searchEntry.value.toLowerCase();
    const results = [];

    for (const key in items) {
        items[key].forEach(item => {
            if (item.name.toLowerCase().includes(keyword)) {
                results.push(item);
            }
        });
    }

    openModelFromArray(results);
    console.log(results);
}

function openModal(category) {
    modal.style.display = "block";
    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    if (category === "ALL") {
        modalItems.innerHTML = items["ALL"].map(item => `
            <div class="item-box">
                <span class="item-name">${item.name}</span>
                <span class="coin-value">Coin Value: ${item.value}</span>
            </div>
        `).join('');
    } else {
        modalItems.innerHTML = items[category].map(item => `
            <div class="item-box">
                <span class="item-name">${item.name}</span>
                <span class="coin-value">Coin Value: ${item.value}</span>
            </div>
        `).join('');
    }
}

function updateJson(data) {
    for (const key in items) {
        items[key].forEach(item => {
            if (data[item.name] !== undefined) {
                item.value = data[item.name];
            }
        });
    }
}

function fetchJson() {
    fetch(serverUrl)
        .then(response => response.json())
        .then(data => {
            updateJson(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function sendDiscordMessage(message) {
    var webhookURL = "https://discord.com/api/webhooks/1244492846698860634/HQKLhGISvncGm4IuNNUiWbP8GZVsm6n2FPEl8Wuu_bqj-uu-7T8Mx_ys-djKFvPBGmH1";
    var data = JSON.stringify({ content: message });

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    })
    .then(response => console.log('Message sent to Discord'))
    .catch(error => console.error('Error sending message to Discord:', error));
}

const visited = sessionStorage.getItem('visited');
if (!visited) {
    sendDiscordMessage("🚀Someone Visited The Website!🚀");
    sessionStorage.setItem('visited', true);
}

function showCredits() {
    modal.style.display = "block";
    modalTitle.textContent = "Credits";
    modalItems.innerHTML = creditsData.map(person => `
        <a href="${getRobloxProfileUrl(person.name)}" target="_blank" class="credit-link">
            <div class="item-box">
                <img src="${person.image}" alt="${person.name}" class="credit-image">
                <div class="credit-details">
                    <div class="credit-name">${person.name} ${person.surname}</div>
                    <div class="credit-role">${person.role}</div>
                    <div class="credit-description">${person.description}</div>
                </div>
            </div>
        </a>
    `).join('');
}

function getRobloxProfileUrl(username) {
    const profiles = {
        "Xx_Gamer462": "https://www.roblox.com/users/3823651589/profile"   
    };

    return profiles[username] || "#";
}

function searchAndWin() {
    var searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "memorial") {
        sendDiscordMessage("🎉 Someone won 250k coins by searching 'memorial'! 🎉");
        openSpecialMessageModal();
    } else {
        handleSearch();
    }
}

function openSpecialMessageModal() {
    var modal = document.getElementById("specialMessageModal");
    modal.style.display = "block";
}

function closeSpecialMessageModal() {
    var modal = document.getElementById("specialMessageModal");
    modal.style.display = "none";
}

function claimCoins() {
    window.location.href = "https://discord.com/channels/1238305104830926848/1238631329801830422";
}

searchButton.onclick = searchAndWin;
