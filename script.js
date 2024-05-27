const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const modalTitle = document.getElementById('modalTitle');
const modalItems = document.getElementById('modalItems');
const searchButton = document.getElementById("search");
const searchEntry = document.getElementById("searchInput");

const serverUrl = 'https://5f5eb461-0a6a-4785-b438-d1291ff9ea1e-00-e5o1geiav5mz.riker.replit.dev:3001/';

let items = {
   "crops": [
        { name: "Wheat", value: "7" },
        { name: "Tomato", value: "10" },
        { name: "Carrot", value: "29" },
        { name: "Berry", value: "25" },
        { name: "Onion", value: "33" },
        { name: "Red Flowers", value: "1750" },
        { name: "Yellow Flowers", value: "1750" },
        { name: "Blue Flowers", value: "1750" },
        { name: "Tall Grass", value: "125" }
    ],

    "blocks": [
        { name: "Stone", value: "3" },
        { name: "Stone Brick", value: "50" },
        { name: "Wood", value: "50" },
        { name: "Wood Plank", value: "27.5" },
        { name: "Pine Wood", value: "100" },
        { name: "Pine Wood Plank", value: "50" },
        { name: "Grass Block", value: "2" },
        { name: "Glass Pane", value: "22" },
        { name: "Glass Pane (Colored)", value: "300" },
        { name: "Clay", value: "75" },
        { name: "Clay (Colored)", value: "650" },
        { name: "Red Rug", value: "50" },
        { name: "Wood Stairs", value: "25" },
        { name: "Pine Stairs", value: "40" },
        { name: "Stone Stairs", value: "38" },
        { name: "Brick Stairs", value: "60" },
        { name: "Wood Fence", value: "50" },
        { name: "Pine Fence", value: "250" },
        { name: "Ladder", value: "75" },
        { name: "Pine Door", value: "650" }
    ],

    "totems": [
        { name: "Stone Totem", value: "1500" },
        { name: "Coal Totem", value: "2000" },
        { name: "Iron Totem", value: "3000" },
        { name: "Clay Totem", value: "7500" },
        { name: "Wheat Totem", value: "1750" },
        { name: "Tomato Totem", value: "3500" },
        { name: "Carrot Totem", value: "4500" },
        { name: "Onion Totem", value: "6500" }
    ],

    "industrial": [
        { name: "Medium Chest", value: "10000" },
        { name: "Steel Rod", value: "2175" },
        { name: "Conveyor Belt", value: "2750" },
        { name: "Left Conveyor", value: "3150" },
        { name: "Right Conveyor", value: "3150" },
        { name: "Industrial Chest", value: "12500" },
        { name: "Industrial Oven", value: "30000" },
        { name: "Industrial Sawmill", value: "50000" },
        { name: "Industrial Smelter", value: "400000" }
    ],

    "stations": [
        { name: "Workbench Tier 1", value: "500" },
        { name: "Workbench Tier 2", value: "2250" },
        { name: "Anvil", value: "1000" },
        { name: "Sawmill", value: "1250" },
        { name: "Stonecutter", value: "2000" },
        { name: "Coloring Station", value: "2175" },
        { name: "Campfire", value: "350" },
        { name: "Cooking Table", value: "1750" },
        { name: "Floral Bench", value: "10000" },
        { name: "Small Furnace", value: "1500" },
        { name: "Small Chest", value: "1500" }
    ],

    "cooking": [
        { name: "Dough", value: "75" },
        { name: "Berry Dough", value: "300" },
        { name: "Bread", value: "150" },
        { name: "Berry Pie", value: "750" }
    ],

    "seeds": [
        { name: "Wheat Seeds", value: "75" },
        { name: "Tomato Seeds", value: "100" },
        { name: "Carrot Seeds", value: "275" },
        { name: "Berry Seeds", value: "7250" },
        { name: "Onion Seeds", value: "1250" },
        { name: "Red Flower Seeds", value: "3000" },
        { name: "Yellow Flower Seeds", value: "3000" },
        { name: "Blue Flower Seeds", value: "3000" },
        { name: "Sapling", value: "25" },
        { name: "Pine Sapling", value: "250" }
    ],

    "slimeIsland": [
        { name: "Green Slime Balls", value: "15" },
        { name: "Blue Slime Balls", value: "125" },
        { name: "Pink Slime Balls", value: "375" },
        { name: "Green Gear", value: "3250" },
        { name: "Blue Gear", value: "8500" },
        { name: "Pink Gear", value: "85000" }
    ],

    "tools": [
        { name: "Wooden Axe", value: "300" },
        { name: "Wooden Pickaxe", value: "300" },
        { name: "Wooden Sword", value: "500" },
        { name: "Plow", value: "250" },
        { name: "Stone Axe", value: "750" },
        { name: "Stone Pickaxe", value: "750" },
        { name: "Iron Axe", value: "2250" },
        { name: "Iron Pickaxe", value: "2250" }
    ],

    "ore": [
        { name: "Coal", value: "25" },
        { name: "Iron Ore", value: "12" },
        { name: "Iron", value: "75" }
    ],
};

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

function openModelFromArray(array) {
    modal.style.display = "block";
    modalTitle.textContent = "Results";
    modalItems.innerHTML = array.map(item => `
        <div class="item-box">
            <span class="item-name">${item.name}</span>
            <span class="coin-value">Coin Value: ${item.value}</span>
        </div>
    `).join('');
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
    sendDiscordMessage("🚀Someone Visited The Official Website!🚀");
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
