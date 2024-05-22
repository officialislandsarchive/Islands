const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

// Define price data structure
let priceData = [
    // List of items with their initial prices
];

// Function to update price of an item
function updatePrice(itemName, newPrice) {
    // Find the item and update its price
}

// Create Discord client
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
        // Parse command
        const args = message.content.split(' ');
        // Validate command
        if (args.length !== 3) {
            message.reply('Invalid command! Usage: !updateprice [item] [new_price]');
            return;
        }

        // Extract item name and new price from command
        const itemName = args[1];
        const newPrice = parseInt(args[2]);

        // Validate price
        if (isNaN(newPrice) || newPrice < 0) {
            message.reply('Invalid price! Please provide a valid positive number.');
            return;
        }

        // Update price and send request to Replit server
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

// Log in the bot
client.login('MTI0MjYxNTgzNDE1ODA0MzEzNg.GtcNC4.jyQgI9rO7mbx6TecqsdWHGdeBhfCjWuPE3RGug');
