const modal = document.getElementById('myModal');
const modalTitle = document.getElementById('modalTitle');
const modalItems = document.getElementById('modalItems');
const searchButton = document.getElementById("search");
const searchEntry = document.getElementById("searchInput");
const serverUrl = 'https://5f5eb461-0a6a-4785-b438-d1291ff9ea1e-00-e5o1geiav5mz.riker.replit.dev:3001/';
const creditsData = [
            {
                name: "dawginator4000",
                surname: "",
                role: "Game Developer",
                description: "The one who makes the magic happen!",
                image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459480902893568/noFilter.png?ex=6654d2bd&is=6653813d&hm=7bfe898697c99da6f8c200e62343b164c4985b7a62ef180fad4d19462f7006bd&",
                robloxProfile: "https://www.roblox.com/users/5847760687/profile"
            },
            {
                name: "PartlyScientific",
                surname: "",
                role: "Community Server Founder",
                description: "The one who keeps the community together!",
                image: "https://cdn.discordapp.com/attachments/1239379916257230869/1244761242845974589/rIdK1DX.png?ex=665649be&is=6654f83e&hm=d03383a7029f6f30479fc28493793371b633221eb5b659cdd516e840d8c86dac&",
                robloxProfile: "https://www.roblox.com/users/1647767202/profile"
            },
            {
                name: "riskyworld",
                surname: "",
                role: "Community Server Founder",
                description: "The one who leads the community!",
                image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459686461542470/noFilter.png?ex=6654d2ee&is=6653816e&hm=0619b98e5dc10fa6cd1420ee2802ca7a377bf26bb1aa67c084226f0804847e27&",
                robloxProfile: "https://www.roblox.com/users/137462357/profile"
            },
            {
                name: "Xx_Gamer462",
                surname: "",
                role: "Website Manager/Developer",
                description: "The one who manages everything!",
                image: "https://cdn.discordapp.com/attachments/1239379916257230869/1241459862811054222/noFilter.png?ex=6654d318&is=66538198&hm=42616a4e58ce752027cbd83803ffd3db443216cf581d77e7c83a1d92f7413c71&",
                robloxProfile: "https://www.roblox.com/users/3823651589/profile"
            },
            {
                name: "jopkljokez2",
                surname: "",
                role: "Website Developer",
                description: "The one who adds the magic touch!",
                image: "https://cdn.discordapp.com/attachments/1091908728992837704/1244474341123559454/noFilter.png?ex=66553e8c&is=6653ed0c&hm=7b373d3915f106afe38e2806416774fa3ab9e19af75ab3a03d6a59bbde04f623&",
                robloxProfile: "https://www.roblox.com/users/1044649449/profile"
            },];

document.getElementById("creditsBtn").addEventListener("click", showCredits);

function showCredits() {
    modal.style.display = "block";
    modalTitle.textContent = "Credits";
    modalItems.innerHTML = creditsData.map(person => `
        <div class="item-box credit-item" data-url="${person.robloxProfile}">
            <img src="${person.image}" alt="${person.name}" class="credit-image">
            <div class="credit-details">
                <div class="credit-name">${person.name} ${person.surname}</div>
                <div class="credit-role">${person.role}</div>
                <div class="credit-description">${person.description}</div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.credit-item').forEach(item => {
        item.addEventListener('click', function() {
            window.open(this.getAttribute('data-url'), '_blank');
        });
    });
}

function closeModal() {
    modal.style.display = "none";
}

function closeSpecialMessageModal() {
    const modal = document.getElementById("specialMessageModal");
    modal.style.display = "none";
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});

searchButton.onclick = searchAndWin;

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
