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

const creditsData = [
  {
   name: "dawginator4000",
    surname: "",
    role: "Game Developer",
    description: "The one who makes the magic happen!",
    image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459480902893568/noFilter.png?ex=6654d2bd&is=6653813d&hm=7bfe898697c99da6f8c200e62343b164c4985b7a62ef180fad4d19462f7006bd&"
  },
  {
    name: "PartlyScientific",
    surname: "",
    role: "Community Server Founder",
    description: "The one who keeps the community together!",
    image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459593259913308/noFilter.png?ex=6654d2d8&is=66538158&hm=f412d58d1768475274a5ed10961719e952db67580211fb3468e5f2e7066ce88e&"
  },
  {
    name: "riskyworld",
    surname: "",
    role: "Community Server Founder",
    description: "The one who leads the community!",
    image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459686461542470/noFilter.png?ex=6654d2ee&is=6653816e&hm=0619b98e5dc10fa6cd1420ee2802ca7a377bf26bb1aa67c084226f0804847e27&"
  },
  {
    name: "Xx_Gamer462",
    surname: "",
    role: "Website Manager/Developer",
    description: "The one who manages everything!",
    image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459862811054222/noFilter.png?ex=6654d318&is=66538198&hm=42616a4e58ce752027cbd83803ffd3db443216cf581d77e7c83a1d92f7413c71&"
  },
  {
    name: "jopkljokez2",
    surname: "",
    role: "Website Developer",
    description: "The one who adds the magic touch!",
    image: "https://cdn.discordapp.com/attachments/1091908728992837704/1244474341123559454/noFilter.png?ex=66553e8c&is=6653ed0c&hm=7b373d3915f106afe38e2806416774fa3ab9e19af75ab3a03d6a59bbde04f623&"
  },
];

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
    modalItems.innerHTML = items[category].map(item => `
        <div class="item-box">
            <span class="item-name">${item.name}</span>
            <span class="coin-value">Coin Value: ${item.value}</span>
        </div>
    `).join('');
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
    return `https://www.roblox.com/users/${username}/profile`;
}

document.getElementById("creditsBtn").addEventListener("click", showCredits);

const quoteOfTheDay = { text: "As America celebrates Memorial Day, we pay tribute to those who have given their lives in our nation's wars.", author: "" };

function getQuoteOfTheDay() {
    return quoteOfTheDay;
}
window.onload = function() {
    const quoteElement = document.getElementById('quoteText'); 
    const authorElement = document.getElementById('quoteAuthor');
    const quote = getQuoteOfTheDay(); 
    if (quoteElement && authorElement && quote) { 
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `${quote.author ? `- ${quote.author}` : ''}`;
    } else {
        console.error('Failed to display the quote of the day.');
    }
};

function searchAndWin() {
    var searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "testing") {
        sendDiscordMessage("🎉 Someone won 250k coins by searching 'testing'! 🎉");
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
    var webhookURL = "https://discord.com/api/webhooks/1244721272726749194/aPvhvGgOOzfB1y3DRviIsFaHZFTzCd0ANz3eEs3UjfDL4ewlzv9xcvy5jHMplVHFd8Oe";
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
