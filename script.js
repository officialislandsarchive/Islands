document.querySelector('.credits-btn .btn').addEventListener('click', function() {
    const members = [
        {
            name: "dawginator4000",
            title: "Game Developer",
            description: "The mastermind behind our immersive game experiences.",
            image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459480902893568/noFilter.png?ex=6654d2bd&is=6653813d&hm=7bfe898697c99da6f8c200e62343b164c4985b7a62ef180fad4d19462f7006bd&"
        },
        {
            name: "PartlyScientific",
            title: "Community Server Founder",
            description: "A visionary leader who brought our community together.",
            image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459593259913308/noFilter.png?ex=6654d2d8&is=66538158&hm=f412d58d1768475274a5ed10961719e952db67580211fb3468e5f2e7066ce88e&"
        },
        {
            name: "riskyworld",
            title: "Community Server Founder",
            description: "A dedicated advocate for our community's growth and success.",
            image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459686461542470/noFilter.png?ex=6654d2ee&is=6653816e&hm=0619b98e5dc10fa6cd1420ee2802ca7a377bf26bb1aa67c084226f0804847e27&"
        },
        {
            name: "Xx_Gamer462",
            title: "Website Manager/Developer",
            description: "The genius behind our sleek and functional website design.",
            image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459862811054222/noFilter.png?ex=6654d318&is=66538198&hm=42616a4e58ce752027cbd83803ffd3db443216cf581d77e7c83a1d92f7413c71&"
        }
    ];

    members.forEach(member => {
        console.log(`${member.name} - ${member.title}: ${member.description}`);
        console.log(`Image: ${member.image}`);
    });
});
let modal = document.getElementById('myModal');
let creditsModal = document.getElementById('creditsModal');
let searchButton = document.getElementById("search");
let searchEntry = document.getElementById("searchInput");

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
}

fetchJson()

function openModal(category) {
    if (category === 'credits') {
        creditsModal.style.display = "block";
    } else {
        modal.style.display = "block";
        let list = document.getElementById("modalItems");
        list.innerHTML = "";

        items[category].forEach(function(item) {
            var itemBox = document.createElement("div");
            itemBox.classList.add("item-box");

            let itemName = document.createElement("span");
            itemName.classList.add("item-name");
            itemName.textContent = item.name;

            let coinValue = document.createElement("span");
            coinValue.classList.add("coin-value");
            coinValue.textContent = "Coin Value: " + item.value;

            itemBox.appendChild(itemName);
            itemBox.appendChild(coinValue);
            list.appendChild(itemBox);
        });

        document.getElementById("modalTitle").textContent = category.charAt(0).toUpperCase() + category.slice(1);
    }
}

function closeModal(modalId = 'myModal') {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal || event.target == creditsModal) {
        modal.style.display = "none";
        creditsModal.style.display = "none";
    }
}

function handleSearch() {
    let keyword = searchEntry.value.toLowerCase();
    let results = [];

    for (let key in items) {
        items[key].forEach(function(x) {
            x = x.name
    
            if (x.toLowerCase().includes(keyword)) {
                results.push({name: x, value: "5"});
            }
        })
    }

    openModelFromArray(results);
    console.log(results);
}

function openModelFromArray(array) {
    modal.style.display = "block";

    let list = document.getElementById("modalItems");
    list.innerHTML = "";

    array.forEach(function(item) {
        let itemBox = document.createElement("div");
        itemBox.classList.add("item-box");
    
        let itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;
    
        let coinValue = document.createElement("span");
        coinValue.classList.add("coin-value");
        coinValue.textContent = "Coin Value: " + getCoinValue(item.name);
    
        itemBox.appendChild(itemName);
        itemBox.appendChild(coinValue);
        list.appendChild(itemBox);
    })

    document.getElementById("modalTitle").textContent = "Results";
}

function getCoinValue(name) {
    for (let key in items) {
        items[key].forEach(function(val) {
            if (val.name.toLowerCase() == name.toLowerCase()) {
                return val.value;
            }
        })

        for (let i = 0; i < items[key].length; i++) {
            val = items[key][i];
            if (val.name == name) {
                return val.value;
            }
        }
    }
}

searchButton.onclick = handleSearch

function updateJson(data) {
  console.log(data)
    for (let key in items) {
        for (let key2 in items[key]) {
            let priceVal = data[items[key][key2].name]
            items[key][key2].value = priceVal
        }
    }
}

function fetchJson() {
    fetch(serverUrl)
    .then(response => response.text())
    .then(data => {
        let Jsondata = JSON.parse(data)
        updateJson(Jsondata)
        console.log(Jsondata)
    })
    .catch(error => {
        // Log any errors
        console.log('Error:', error);
    });
}
