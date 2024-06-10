const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const modalTitle = document.getElementById('modalTitle');
const modalItems = document.getElementById('modalItems');
const searchButton = document.getElementById("search");
const searchEntry = document.getElementById("searchInput");

const serverUrl = 'https://5f5eb461-0a6a-4785-b438-d1291ff9ea1e-00-e5o1geiav5mz.riker.replit.dev:3001/';

let items = {
    "ALL": [
        { name: "Item 1 - all", value: "10" },
        { name: "Item 2 - all", value: "20" }, 
    ],
   "COMBAT": [
{ "name": "Ancient Longbow", "value": "0" },
{ "name": "Antler Hammer", "value": "0" },
{ "name": "Antler Shield", "value": "0" },
{ "name": "Aquamarine Sword", "value": "0" },
{ "name": "Azarathian Longbow", "value": "0" },
{ "name": "Cactus Spike", "value": "0" },
{ "name": "Candy Cane Scepter Weapon", "value": "0" },
{ "name": "Cursed Grimoire", "value": "0" },
{ "name": "Cursed Hammer", "value": "0" },
{ "name": "Cutlass", "value": "0" },
{ "name": "Diamond Great Sword", "value": "0" },
{ "name": "Diamond War Hammer", "value": "0" },
{ "name": "Frost Hammer", "value": "0" },
{ "name": "Frost Sword", "value": "0" },
{ "name": "Gilded Steel Hammer", "value": "0" },
{ "name": "Golden Shortbow", "value": "0" },
{ "name": "Granite Hammer", "value": "0" },
{ "name": "Hardened Bow Limb", "value": "0" },
{ "name": "Infernal Hammer", "value": "0" },
{ "name": "Iron Long Arrow", "value": "0" },
{ "name": "Iron Short Arrow", "value": "0" },
{ "name": "Iron Shortbow", "value": "0" },
{ "name": "Iron War Axe", "value": "0" },
{ "name": "Jolly Dagger", "value": "0" },
{ "name": "Kong's Axe", "value": "0" },
{ "name": "Lightning Scepter", "value": "0" },
{ "name": "Long Crossbow Bolt", "value": "0" },
{ "name": "Maple Shield", "value": "0" },
{ "name": "Natures Divine Longbow", "value": "0" },
{ "name": "Noxious Stinger", "value": "0" },
{ "name": "Obsidian Greatsword", "value": "0" },
{ "name": "Obsidian Hilt", "value": "0" },
{ "name": "Opal Sword Hilt", "value": "0" },
{ "name": "Poison Long Arrow", "value": "0" },
{ "name": "Pumpkin Hammer", "value": "0" },
{ "name": "Rageblade", "value": "0" },
{ "name": "Regen Potion", "value": "0" },
{ "name": "Ruby Staff", "value": "0" },
{ "name": "Ruby Sword", "value": "0" },
{ "name": "Serpents Bane", "value": "0" },
{ "name": "Serpents Hook", "value": "0" },
{ "name": "Slime Queens Scepter", "value": "0" },
{ "name": "Spellbook", "value": "0" },
{ "name": "Spirit Spellbook", "value": "0" },
{ "name": "Staff of Godzilla", "value": "0" },
{ "name": "Steel Long Arrow", "value": "0" },
{ "name": "Steel Short Arrow", "value": "0" },
{ "name": "Stone Long Arrow", "value": "0" },
{ "name": "Stone Short Arrow", "value": "0" },
{ "name": "Strength Potion", "value": "0" },
{ "name": "The Captain's Rapier", "value": "0" },
{ "name": "The Divine Dao", "value": "0" },
{ "name": "The Dragonslayer", "value": "0" },
{ "name": "The Reapers Crossbow", "value": "0" },
{ "name": "The Reapers Scythe", "value": "0" },
{ "name": "Tidal Spellbook", "value": "0" },
{ "name": "Toxin Potion", "value": "0" },
{ "name": "Trouts Fury", "value": "0" },
{ "name": "Void Potion", "value": "0" },
{ "name": "Wooden Mallet", "value": "0" }
     ],
"MINERAL": [
{ "name": "Amethyst Crystal", "value": "0" },
{ "name": "Aquamarine Shard", "value": "0" },
{ "name": "Buffalkor Crystal", "value": "0" },
{ "name": "Crystallized Aquamarine", "value": "0" },
{ "name": "Crystallized Gold", "value": "0" },
{ "name": "Crystallized Iron", "value": "0" },
{ "name": "Crystallized Obsidian", "value": "0" },
{ "name": "Diamond", "value": "0" },
{ "name": "Electrite", "value": "0" },
{ "name": "Enchanted Diamond", "value": "0" },
{ "name": "Infernal Flame", "value": "0" },
{ "name": "Opal", "value": "0" },
{ "name": "Pearl", "value": "0" },
{ "name": "Ruby", "value": "0" }
    ],
    "DECOR": [
    { "name": "Bell (Christmas)", "value": "0" },
    { "name": "Black Christmas Street Light", "value": "0" },
    { "name": "Black Mining Lantern", "value": "0" },
    { "name": "Blue Cup Gnome", "value": "0" },
    { "name": "Blue Glowing Mushroom", "value": "0" },
    { "name": "Blue Gnome Bag", "value": "0" },
    { "name": "Blue Nutcracker", "value": "0" },
    { "name": "Blue Ornament", "value": "0" },
    { "name": "Blue Standing Gnome", "value": "0" },
    { "name": "Brown Mining Lantern", "value": "0" },
    { "name": "Butterfly Event Archway", "value": "0" },
    { "name": "Butterfly Event Bench", "value": "0" },
    { "name": "Butterfly Festival Trophy", "value": "0" },
    { "name": "Candy Basket 2021", "value": "0" },
    { "name": "Candy Basket 2022", "value": "0" },
    { "name": "Candy Cane Fence", "value": "0" },
    { "name": "Candy Cane Lamp", "value": "0" },
    { "name": "Candy Cane Light Fence", "value": "0" },
    { "name": "Christmas Event 2022 Trophy", "value": "0" },
    { "name": "Christmas Fence Light", "value": "0" },
    { "name": "Christmas Tree", "value": "0" },
    { "name": "Cletus Ornament", "value": "0" },
    { "name": "Cletus Plushie", "value": "0" },
    { "name": "Cletus Scarecrow", "value": "0" },
    { "name": "Cobweb", "value": "0" },
    { "name": "Cookie Stocking", "value": "0" },
    { "name": "Cow Ornament", "value": "0" },
    { "name": "Cyan Glowing Mushroom", "value": "0" },
    { "name": "Cyan Mushroom Table", "value": "0" },
    { "name": "Cyan Outhouse", "value": "0" },
    { "name": "Cyan Trunk Chair", "value": "0" },
    { "name": "Dark Brown Nature Fridge", "value": "0" },
    { "name": "Draven Statue", "value": "0" },
    { "name": "Dumpling Chair", "value": "0" },
    { "name": "Dumpling Couch", "value": "0" },
    { "name": "DV Trophy", "value": "0" },
    { "name": "Dynamite Wall Decor", "value": "0" },
    { "name": "Elf Plushie", "value": "0" },
    { "name": "Elf Stocking", "value": "0" },
    { "name": "Evil Ghost", "value": "0" },
    { "name": "Fish Banner", "value": "0" },
    { "name": "Fish Festival Trophy 2021", "value": "0" },
    { "name": "Frog Topiary", "value": "0" },
    { "name": "Ghost Lantern", "value": "0" },
    { "name": "Gnome Plushie", "value": "0" },
    { "name": "Godzilla Trophy", "value": "0" },
    { "name": "Gold Mining Lantern", "value": "0" },
    { "name": "Gold Small Brazier", "value": "0" },
    { "name": "Gold Tall Brazier", "value": "0" },
    { "name": "Gravestone - All 3 Versions 2022", "value": "0" },
    { "name": "Gravestone 2021", "value": "0" },
    { "name": "Green and White Christmas Lantern", "value": "0" },
    { "name": "Green Candy Cluster", "value": "0" },
    { "name": "Green Christmas Street Light", "value": "0" },
    { "name": "Green Eyed Scarecrow", "value": "0" },
    { "name": "Green Glowing Mushroom", "value": "0" },
    { "name": "Green Nutcracker", "value": "0" },
    { "name": "Green Ornament", "value": "0" },
    { "name": "Group of Ghosts", "value": "0" },
    { "name": "Halloween Event Trophy 2022", "value": "0" },
    { "name": "Halloween Event Trophy 2023", "value": "0" },
    { "name": "Halloween Lantern", "value": "0" },
    { "name": "Happy Ghost", "value": "0" },
    { "name": "Islands First Anniversary Cake", "value": "0" },
    { "name": "Islands Second Anniversary Cake", "value": "0" },
    { "name": "Islands Third Anniversary Cake", "value": "0" },
    { "name": "Jack 0 Lantern", "value": "0" },
    { "name": "Jade Plushie", "value": "0" },
    { "name": "Kong Trophy", "value": "0" },
    { "name": "Light Brown Nature Fridge", "value": "0" },
    { "name": "Lion Lounge", "value": "0" },
    { "name": "Lucky Coin Bag", "value": "0" },
    { "name": "Lunar 2023 Rabbit Statue", "value": "0" },
    { "name": "Lunar Banner (Limited)", "value": "0" },
    { "name": "Lunar Drum", "value": "0" },
    { "name": "Lunar Gate", "value": "0" },
    { "name": "Lunar Lamp", "value": "0" },
    { "name": "Lunar Lantern Small", "value": "0" },
    { "name": "Lunar Rabbit Banner", "value": "0" },
    { "name": "Lunar Rabbit Plushie", "value": "0" },
    { "name": "Lying Closed Coffin", "value": "0" },
    { "name": "Lying Opened Coffin", "value": "0" },
    { "name": "Mansion Bed", "value": "0" },
    { "name": "Mansion Bench", "value": "0" },
    { "name": "Mansion Bust Blue", "value": "0" },
    { "name": "Mansion Bust Green", "value": "0" },
    { "name": "Mansion Bust Pink", "value": "0" },
    { "name": "Mansion Cabinet", "value": "0" },
    { "name": "Mansion Couch", "value": "0" },
    { "name": "Mansion Desk", "value": "0" },
    { "name": "Mansion Grandfather Clock", "value": "0" },
    { "name": "Mansion Rocking Horse", "value": "0" },
    { "name": "Mining Couch Green", "value": "0" },
    { "name": "Mining Couch Purple", "value": "0" },
    { "name": "Mining Entrance", "value": "0" },
    { "name": "Mining Event Trophy 2023", "value": "0" },
    { "name": "Mining Gem Bag", "value": "0" },
    { "name": "Mining Tool Bag", "value": "0" },
    { "name": "Mushroom Event Trophy 2023", "value": "0" },
    { "name": "Orange Ornament", "value": "0" },
    { "name": "Pig Ornament", "value": "0" },
    { "name": "Pink Glowing Mushroom", "value": "0" },
    { "name": "Pink Mushroom Table", "value": "0" },
    { "name": "Pink Outhouse", "value": "0" },
    { "name": "Pink Trunk Chair", "value": "0" },
    { "name": "Pirate Barrel", "value": "0" },
    { "name": "Pirate Cannon", "value": "0" },
    { "name": "Pirate Chair", "value": "0" },
    { "name": "Pirate Chandelier", "value": "0" },
    { "name": "Pirate Globe", "value": "0" },
    { "name": "Pirate Lamp", "value": "0" },
    { "name": "Pirate Ship", "value": "0" },
    { "name": "Pirate Ship Wheel", "value": "0" },
    { "name": "Pirate Table", "value": "0" },
    { "name": "Primordial Plushie Beanbag", "value": "0" },
    { "name": "Primordial Statue", "value": "0" },
    { "name": "Pumpkin Angry", "value": "0" },
    { "name": "Pumpkin Bed", "value": "0" },
    { "name": "Pumpkin Candle", "value": "0" },
    { "name": "Pumpkin Cat", "value": "0" },
    { "name": "Pumpkin Happy", "value": "0" },
    { "name": "Purple Nature Fridge", "value": "0" },
    { "name": "PVP Alpha Trophy", "value": "0" },
    { "name": "Rabbit Topiary", "value": "0" },
    { "name": "Rainbow Candy Cluster", "value": "0" },
    { "name": "Red Ornament", "value": "0" },
    { "name": "Red and Green Christmas Lantern", "value": "0" },
    { "name": "Red and White Christmas Lantern", "value": "0" },
    { "name": "Red Candy Cluster", "value": "0" },
    { "name": "Red Christmas Street Light", "value": "0" },
    { "name": "Red Cup Gnome", "value": "0" },
    { "name": "Red Dynamite Box", "value": "0" },
    { "name": "Red Gnome Bag", "value": "0" },
    { "name": "Red Mushroom Table", "value": "0" },
    { "name": "Red Nutcracker", "value": "0" },
    { "name": "Red Outhouse", "value": "0" },
    { "name": "Red Standing Gnome", "value": "0" },
    { "name": "Red Trunk Chair", "value": "0" },
    { "name": "Reindeer Plushie", "value": "0" },
    { "name": "Roblox Battles Trophy", "value": "0" },
    { "name": "Sandbag", "value": "0" },
    { "name": "Sandbag Pile", "value": "0" },
    { "name": "Sandbag Stack", "value": "0" },
    { "name": "Santa Plushie", "value": "0" },
    { "name": "Santa Stocking", "value": "0" },
    { "name": "Scarecrow Trophy", "value": "0" },
    { "name": "Shipwreck Podium", "value": "0" },
    { "name": "Slime Mural 5", "value": "0" },
    { "name": "Slime Ornament", "value": "0" },
    { "name": "Small Fire Chalice", "value": "0" },
    { "name": "Snow Globe", "value": "0" },
    { "name": "Snowflake Stocking", "value": "0" },
    { "name": "Snowman (Furniture)", "value": "0"},
    { "name": "Snowman Bean Bag", "value": "0" },
    { "name": "Snowman Couch", "value": "0" },
    { "name": "Snowman Stocking", "value": "0" },
    { "name": "Spooky Pumpkin", "value": "0" },
    { "name": "Stacked Lunar Lantern", "value": "0" },
    { "name": "Stacked Star Lunar Lantern", "value": "0" },
    { "name": "Standing Closed Coffin", "value": "0" },
    { "name": "Standing Opened Coffin", "value": "0" },
    { "name": "Star Lunar Lantern", "value": "0" },
    { "name": "Surprised Ghost", "value": "0" },
    { "name": "Tall Fire Chalice", "value": "0" },
    { "name": "Tall Snowman", "value": "0" },
    { "name": "Tan Nature Fridge", "value": "0" },
    { "name": "The Halloween Trophy", "value": "0" },
    { "name": "The Witches Trophy", "value": "0" },
    { "name": "Tidal Aquarium", "value": "0" },
    { "name": "Tiger Bean Bag", "value": "0" },
    { "name": "Tiger Coin Bag", "value": "0" },
    { "name": "Tiger Jacuzzi", "value": "0" },
    { "name": "Train Bed", "value": "0" },
    { "name": "White Nature Fridge", "value": "0" },
    { "name": "White Reindeer Plushie", "value": "0" },
    { "name": "Wide Snowman", "value": "0" },
    { "name": "Wooden Dynamite Box", "value": "0" },
    { "name": "Wraith Boss Plushie", "value": "0" },
    { "name": "Wreath", "value": "0" },
    { "name": "Yellow Cup Gnome", "value": "0" },
    { "name": "Yellow Eyed Scarecrow", "value": "0" },
    { "name": "Yellow Gnome Bag", "value": "0" },
    { "name": "Yellow Mushroom Table", "value": "0" },
    { "name": "Yellow Outhouse", "value": "0" },
    { "name": "Yellow Standing Gnome", "value": "0" },
    { "name": "Yellow Trunk Chair", "value": "0" }
    ],
    "TOOLS": [
  { "name": "Anvil", "value": "0" },
    { "name": "Brewing Stand", "value": "0" },
    { "name": "Christmas Shovel", "value": "0" },
    { "name": "Cletus Lucky Plow", "value": "0" },
    { "name": "Cletus Lucky Sickle", "value": "0" },
    { "name": "Cletus Lucky Watering Can", "value": "0" },
    { "name": "Diamond Axe", "value": "0" },
    { "name": "Diamond Pickaxe", "value": "0" },
    { "name": "Diamond Sickle", "value": "0" },
    { "name": "Electrical Workbench", "value": "0" },
    { "name": "Gilded Steel Axe", "value": "0" },
    { "name": "Gilded Steel Pickaxe", "value": "0" },
    { "name": "Gilded Steel Sickle", "value": "0" },
    { "name": "Golden Net", "value": "0" },
    { "name": "Iron Axe", "value": "0" },
    { "name": "Iron Fishing Rod", "value": "0" },
    { "name": "Iron Pickaxe", "value": "0" },
    { "name": "Iron Sickle", "value": "0" },
    { "name": "Leaf Clippers", "value": "0" },
    { "name": "Opal Axe", "value": "0" },
    { "name": "Opal Axe Hilt", "value": "0" },
    { "name": "Opal Pickaxe", "value": "0" },
    { "name": "Opal Pickaxe Hilt", "value": "0" },
    { "name": "Thomas Lucky Fishing Rod", "value": "0" },
    { "name": "Void Mattock", "value": "0" },
    { "name": "Void Mattock Hilt", "value": "0" },
    { "name": "Wire Tool", "value": "0" },
    { "name": "Workbench Tier 3", "value": "0" },
    { "name": "Workbench Tier 4", "value": "0" }
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
    const profiles = {
        "Xx_Gamer462": "https://www.roblox.com/users/3823651589/profile",
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
