const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

let priceData = [
    { name: "Wheat", value: [] },
    { name: "Tomato", value: [] },
    { name: "Carrot", value: [] },
    { name: "Berry", value: [] },
    { name: "Onion", value: [] },
    { name: "Red Flowers", value: [] },
    { name: "Yellow Flowers", value: [] },
    { name: "Blue Flowers", value: [] },
    { name: "Tall Grass", value: [] },
    { name: "Stone Brick", value: [] },
    { name: "Wood", value: [] },
    { name: "Wood Plank", value: [] },
    { name: "Pine Wood", value: [] },
    { name: "Pine Wood Plank", value: [] },
    { name: "Grass Block", value: [] },
    { name: "Glass Pane", value: [] },
    { name: "Glass Pane (Colored)", value: [] },
    { name: "Clay", value: [] },
    { name: "Clay (Colored)", value: [] },
    { name: "Red Rug", value: [] },
    { name: "Wood Stairs", value: [] },
    { name: "Pine Stairs", value: [] },
    { name: "Stone Stairs", value: [] },
    { name: "Brick Stairs", value: [] },
    { name: "Wood Fence", value: [] },
    { name: "Pine Fence", value: [] },
    { name: "Ladder", value: [] },
    { name: "Pine Door", value: [] },
    { name: "Stone Totem", value: [] },
    { name: "Coal Totem", value: [] },
    { name: "Iron Totem", value: [] },
    { name: "Clay Totem", value: [] },
    { name: "Wheat Totem", value: [] },
    { name: "Tomato Totem", value: [] },
    { name: "Carrot Totem", value: [] },
    { name: "Onion Totem", value: [] },
    { name: "Medium Chest", value: [] },
    { name: "Steel Rod", value: [] },
    { name: "Conveyor Belt", value: [] },
    { name: "Left Conveyor", value: [] },
    { name: "Right Conveyor", value: [] },
    { name: "Industrial Chest", value: [] },
    { name: "Industrial Oven", value: [] },
    { name: "Industrial Sawmill", value: [] },
    { name: "Industrial Smelter", value: [] },
    { name: "Workbench Tier 1", value: [] },
    { name: "Workbench Tier 2", value: [] },
    { name: "Anvil", value: [] },
    { name: "Sawmill", value: [] },
    { name: "Stonecutter", value: [] },
    { name: "Coloring Station", value: [] },
    { name: "Campfire", value: [] },
    { name: "Cooking Table", value: [] },
    { name: "Floral Bench", value: [] },
    { name: "Small Furnace", value: [] },
    { name: "Small Chest", value: [] },
    { name: "Dough", value: [] },
    { name: "Berry Dough", value: [] },
    { name: "Bread", value: [] },
    { name: "Berry Pie", value: [] },
    { name: "Wheat Seeds", value: [] },
    { name: "Tomato Seeds", value: [] },
    { name: "Carrot Seeds", value: [] },
    { name: "Berry Seeds", value: [] },
    { name: "Onion Seeds", value: [] },
    { name: "Red Flower Seeds", value: [] },
    { name: "Yellow Flower Seeds", value: [] },
    { name: "Blue Flower Seeds", value: [] },
    { name: "Sapling", value: [] },
    { name: "Pine Sapling", value: [] },
    { name: "Green Slime Balls", value: [] },
    { name: "Blue Slime Balls", value: [] },
    { name: "Pink Slime Balls", value: [] },
    { name: "Green Gear", value: [] },
    { name: "Blue Gear", value: [] },
    { name: "Pink Gear", value: [] },
    { name: "Wooden Axe", value: [] },
    { name: "Wooden Pickaxe", value: [] },
    { name: "Wooden Sword", value: [] },
    { name: "Plow", value: [] },
    { name: "Stone Axe", value: [] },
    { name: "Stone Pickaxe", value: [] },
    { name: "Iron Axe", value: [] },
    { name: "Iron Pickaxe", value: [] },
    { name: "Coal", value: [] },
    { name: "Iron Ore", value: [] },
    { name: "Iron", value: [] }
];

function updatePrice(itemName, newPrice) {
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.content.startsWith('!updateprice')) {
        const args = message.content.split(' ');
        if (args.length !== 3) {
            message.reply('Invalid command! Usage: !updateprice [item] [new_price]');
            return;
        }

        const itemName = args[1];
        const newPrice = parseInt(args[2]);

        if (isNaN(newPrice) || newPrice < 0) {
            message.reply('Invalid price! Please provide a valid positive number.');
            return;
        }

        if (updatePrice(itemName, newPrice)) {
            try {
                const response = await axios.post('https://replit.com/@officialislands/SelfassuredRundownCallback', {
                    itemName,
                    newPrice
                });
                message.reply(response.data.message);
            } catch (error) {
                console.error('Error updating price:', error);
                message.reply('Error updating price');
            }
        } else {
            message.reply(`Item '${itemName}' not found.`);
        }
    }
});

client.login('MTI0MjYxNTgzNDE1ODA0MzEzNg.GIyNnY.ZYrkDUPE2QpPYOHY3z6RsZYqbz8-m85bHVvFRU');
