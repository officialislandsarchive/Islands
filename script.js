const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const modalTitle = document.getElementById('modalTitle');
const modalItems = document.getElementById('modalItems');
const searchButton = document.getElementById("search");
const searchEntry = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll('.btn'); 

const serverUrl = '';

let items = {
    "ALL": [],
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
  { "name": "Apple Tree Sapling", "value": "0" },
    { "name": "Blackberry Seeds", "value": "0" },
    { "name": "Blueberry Seeds", "value": "0" },
    { "name": "Candy Cane Seed", "value": "0" },
    { "name": "Chili Pepper Seeds", "value": "0" },
    { "name": "Large Crate of Pineapple", "value": "0" },
    { "name": "Lemon Tree Sapling", "value": "0" },
    { "name": "Orange Tree Sapling", "value": "0" },
    { "name": "Pineapple Seeds", "value": "0" },
    { "name": "Pumpkin Seeds", "value": "0" },
    { "name": "Radish Seeds", "value": "0" },
    { "name": "Red Berry Seeds", "value": "0" },
    { "name": "Rice Seeds", "value": "0" },
    { "name": "Seaweed Seeds", "value": "0" },
    { "name": "Starfruit Seeds", "value": "0" },
    { "name": "Void Parasite Seeds", "value": "0" },
    { "name": "Watermelon Seeds", "value": "0" }
    ],
    "FLOWERS": [
   { "name": "Black Chrysanthemum - Limited", "value": "0" },
    { "name": "Black Hibiscus", "value": "0" },
    { "name": "Black Lavender", "value": "0" },
    { "name": "Black Lily", "value": "0" },
    { "name": "Blue Chrysanthemum", "value": "0" },
    { "name": "Blue Hibiscus", "value": "0" },
    { "name": "Blue Hyacinth", "value": "0" },
    { "name": "Blue Lavender", "value": "0" },
    { "name": "Blue Lily", "value": "0" },
    { "name": "Blue Rose - Limited", "value": "0" },
    { "name": "Chrome Chrysanthemum", "value": "0" },
    { "name": "Chrome Lavender", "value": "0" },
    { "name": "Cyan Chrysanthemum", "value": "0" },
    { "name": "Cyan Daisy", "value": "0" },
    { "name": "Cyan Hyacinth", "value": "0" },
    { "name": "Cyan Lavender", "value": "0" },
    { "name": "Cyan Lily", "value": "0" },
    { "name": "Dark Green Daffodil", "value": "0" },
    { "name": "Dark Green Daisy", "value": "0" },
    { "name": "Dark Green Lavender", "value": "0" },
    { "name": "Dark Green Lily", "value": "0" },
    { "name": "Dark Green Tulip", "value": "0" },
    { "name": "Fertile Black Chrysanthemum", "value": "0" },
    { "name": "Fertile Black Hibiscus", "value": "0" },
    { "name": "Fertile Black Lavender", "value": "0" },
    { "name": "Fertile Black Lily", "value": "0" },
    { "name": "Fertile Blue Chrysanthemum", "value": "0" },
    { "name": "Fertile Blue Hibiscus", "value": "0" },
    { "name": "Fertile Blue Hyacinth", "value": "0" },
    { "name": "Fertile Blue Lavender", "value": "0" },
    { "name": "Fertile Blue Lily", "value": "0" },
    { "name": "Fertile Blue Rose", "value": "0" },
    { "name": "Fertile Chrome Chrysanthemum", "value": "0" },
    { "name": "Fertile Chrome Lavender", "value": "0" },
    { "name": "Fertile Cyan Chrysanthemum", "value": "0" },
    { "name": "Fertile Cyan Daisy", "value": "0" },
    { "name": "Fertile Cyan Hyacinth", "value": "0" },
    { "name": "Fertile Cyan Lavender", "value": "0" },
    { "name": "Fertile Cyan Lily", "value": "0" },
    { "name": "Fertile Dark Green Daffodil", "value": "0" },
    { "name": "Fertile Dark Green Daisy", "value": "0" },
    { "name": "Fertile Dark Green Lavender", "value": "0" },
    { "name": "Fertile Dark Green Lily", "value": "0" },
    { "name": "Fertile Dark Green Tulip", "value": "0" },
    { "name": "Fertile Light Green Chrysanthemum", "value": "0" },
    { "name": "Fertile Light Green Daffodil", "value": "0" },
    { "name": "Fertile Light Green Daisy", "value": "0" },
    { "name": "Fertile Light Green Hibiscus", "value": "0" },
    { "name": "Fertile Light Green Hyacinth", "value": "0" },
    { "name": "Fertile Light Green Lavender", "value": "0" },
    { "name": "Fertile Light Green Tulip", "value": "0" },
    { "name": "Fertile Orange Daffodil", "value": "0" },
    { "name": "Fertile Orange Hibiscus", "value": "0" },
    { "name": "Fertile Orange Hyacinth", "value": "0" },
    { "name": "Fertile Orange Lavender", "value": "0" },
    { "name": "Fertile Orange Tulip", "value": "0" },
    { "name": "Fertile Pink Chrysanthemum", "value": "0" },
    { "name": "Fertile Pink Daffodil", "value": "0" },
    { "name": "Fertile Pink Hibiscus", "value": "0" },
    { "name": "Fertile Pink Lavender", "value": "0" },
    { "name": "Fertile Pink Rose", "value": "0" },
    { "name": "Fertile Pink Tulip", "value": "0" },
    { "name": "Fertile Purple Chrysanthemum", "value": "0" },
    { "name": "Fertile Purple Hibiscus", "value": "0" },
    { "name": "Fertile Purple Lavender", "value": "0" },
    { "name": "Fertile Purple Rose", "value": "0" },
    { "name": "Fertile Red Chrysanthemum - Limited", "value": "0" },
    { "name": "Fertile Red Daffodil - Limited", "value": "0" },
    { "name": "Fertile Red Daisy - Limited", "value": "0" },
    { "name": "Fertile Red Hyacinth", "value": "0" },
    { "name": "Fertile Red Lavender", "value": "0" },
    { "name": "Fertile Red Lily - Limited", "value": "0" },
    { "name": "Fertile Red Rose - Limited", "value": "0" },
    { "name": "Fertile Red Tulip - Limited", "value": "0" },
 { "name": "Fertile White Chrysanthemum", "value": "0" },
    { "name": "Fertile White Daffodil", "value": "0" },
    { "name": "Fertile White Daisy", "value": "0" },
    { "name": "Fertile White Hibiscus", "value": "0" },
    { "name": "Fertile White Lavender", "value": "0" },
    { "name": "Fertile White Rose - Limited", "value": "0" },
    { "name": "Fertile White Tulip", "value": "0" },
    { "name": "Fertile Yellow Daffodil", "value": "0" },
    { "name": "Fertile Yellow Daisy - Limited", "value": "0" },
    { "name": "Fertile Yellow Hyacinth - Limited", "value": "0" },
    { "name": "Fertile Yellow Lavender", "value": "0" },
    { "name": "Fertile Yellow Lily - Limited", "value": "0" },
    { "name": "Fertile Yellow Tulip - Limited", "value": "0" },
    { "name": "Light Green Chrysanthemum", "value": "0" },
    { "name": "Light Green Daffodil", "value": "0" },
    { "name": "Light Green Daisy", "value": "0" },
    { "name": "Light Green Hibiscus - Limited", "value": "0" },
    { "name": "Light Green Hyacinth", "value": "0" },
    { "name": "Light Green Lavender", "value": "0" },
    { "name": "Light Green Tulip", "value": "0" },
    { "name": "Orange Daffodil", "value": "0" },
    { "name": "Orange Hibiscus", "value": "0" },
    { "name": "Orange Hyacinth", "value": "0" },
    { "name": "Orange Lavender", "value": "0" },
    { "name": "Orange Tulip", "value": "0" },
    { "name": "Pink Chrysanthemum", "value": "0" },
    { "name": "Pink Daffodil", "value": "0" },
    { "name": "Pink Hibiscus", "value": "0" },
    { "name": "Pink Lavender", "value": "0" },
    { "name": "Pink Rose", "value": "0" },
    { "name": "Pink Tulip", "value": "0" },
    { "name": "Purple Chrysanthemum", "value": "0" },
    { "name": "Purple Hibiscus", "value": "0" },
    { "name": "Purple Lavender", "value": "0" },
    { "name": "Purple Rose", "value": "0" },
    { "name": "Red Chrysanthemum - Limited", "value": "0" },
    { "name": "Red Daffodil - Limited", "value": "0" },
    { "name": "Red Daisy - Limited", "value": "0" },
    { "name": "Red Hyacinth", "value": "0" },
    { "name": "Red Lavender", "value": "0" },
    { "name": "Red Lily - Limited", "value": "0" },
    { "name": "Red Rose - Limited", "value": "0" },
    { "name": "Red Tulip - Limited", "value": "0" },
    { "name": "White Chrysanthemum", "value": "0" },
    { "name": "White Daffodil", "value": "0" },
    { "name": "White Daisy", "value": "0" },
    { "name": "White Hibiscus", "value": "0" },
    { "name": "White Lavender", "value": "0" },
    { "name": "White Rose - Limited", "value": "0" },
    { "name": "White Tulip", "value": "0" },
    { "name": "Yellow Daffodil", "value": "0" },
    { "name": "Yellow Daisy - Limited", "value": "0" },
    { "name": "Yellow Hyacinth - Limited", "value": "0" },
    { "name": "Yellow Lavender", "value": "0" },
    { "name": "Yellow Lily - Limited", "value": "0" },
    { "name": "Yellow Tulip - Limited", "value": "0" }
    ],
    "FOOD": [
    { "name": "Bhutan Butter Tea", "value": "0" },
    { "name": "Blueberry Cookie", "value": "0" },
    { "name": "Carrot Cake", "value": "0" },
    { "name": "Chocolate Bar", "value": "0" },
    { "name": "Deviled Eggs", "value": "0" },
    { "name": "Dragon Roll", "value": "0" },
    { "name": "Fhanhorns Flower", "value": "0" },
    { "name": "Fhanhorns Pancakes", "value": "0" },
    { "name": "Fortune Cookie", "value": "0" },
    { "name": "Glass of Milk", "value": "0" },
    { "name": "Gondo Datshi", "value": "0" },
    { "name": "Jam Sandwich", "value": "0" },
    { "name": "Lollipop", "value": "0" },
    { "name": "Lunar Mooncake", "value": "0" },
    { "name": "Maple Syrup (Glitched)", "value": "0" },
    { "name": "Orange Candy", "value": "0" },
    { "name": "Philadelphia Roll", "value": "0" },
    { "name": "Potato and Duck Egg Scramble", "value": "0" },
    { "name": "Potato Salad", "value": "0" },
    { "name": "Roasted Honey Carrot", "value": "0" },
    { "name": "Starfruit Cake", "value": "0" },
    { "name": "Tai Nigiri", "value": "0" },
    { "name": "Tomato Soup", "value": "0" },
    { "name": "Truffle Avocado Toast", "value": "0" },
    { "name": "Truffle Pizza", "value": "0" },
    { "name": "Tuna Roll", "value": "0" }
    ],
    "INDUSTRIAL": "INDUSTRIAL": [
    { "name": "Ancient Slime String", "value": "0" },
    { "name": "And Gate", "value": "0" },
    { "name": "Automated Trough", "value": "0" },
    { "name": "Basic Fertilizer", "value": "0" },
    { "name": "Basic Sprinkler", "value": "0" },
    { "name": "Blast Furnace", "value": "0" },
    { "name": "Blue Page", "value": "0" },
    { "name": "Blue Sticky Gear", "value": "0" },
    { "name": "Bolt Factory Mold", "value": "0" },
    { "name": "Campfire", "value": "0" },
    { "name": "Coal Generator", "value": "0" },
    { "name": "Combiner", "value": "0" },
    { "name": "Conveyor Belt", "value": "0" },
    { "name": "Conveyor Ramp Down", "value": "0" },
    { "name": "Conveyor Ramp Up", "value": "0" },
    { "name": "Conveyor Sensor", "value": "0" },
    { "name": "Copper Bolt", "value": "0" },
    { "name": "Copper Ingot", "value": "0" },
    { "name": "Copper Plate", "value": "0" },
    { "name": "Copper Press", "value": "0" },
    { "name": "Copper Rod", "value": "0" },
    { "name": "Desert Chest", "value": "0" },
    { "name": "Desert Furnace", "value": "0" },
    { "name": "Drill", "value": "0" },
    { "name": "Expanded Diamond Chest", "value": "0" },
    { "name": "Filter Conveyor", "value": "0" },
    { "name": "Food Processor", "value": "0" },
    { "name": "Fuel Barrel Extractor", "value": "0" },
    { "name": "Fuel Barrel Filler", "value": "0" },
    { "name": "Gearbox", "value": "0" },
    { "name": "Gilded Steel Rod", "value": "0" },
    { "name": "Gold Ingot", "value": "0" },
    { "name": "Green Page", "value": "0" },
    { "name": "Green Sticky Gear", "value": "0" },
    { "name": "Industrial Chest", "value": "0" },
    { "name": "Industrial Flower Picker", "value": "0" },
    { "name": "Industrial Lumbermill", "value": "0" },
    { "name": "Industrial Merchant Teleseller", "value": "0" },
    { "name": "Industrial Milker", "value": "0" },
    { "name": "Industrial Nest", "value": "0" },
    { "name": "Industrial Oven", "value": "0" },
    { "name": "Industrial Polishing Station", "value": "0" },
    { "name": "Industrial Sawmill", "value": "0" },
    { "name": "Industrial Smelter", "value": "0" },
    { "name": "Industrial Stonecutter", "value": "0" },
    { "name": "Industrial Truffle Barrel", "value": "0" },
    { "name": "Industrial Washing Station", "value": "0" },
    { "name": "Input/Output Chest", "value": "0" },
    { "name": "Large Chest", "value": "0" },
    { "name": "Large Diamond Chest", "value": "0" },
    { "name": "Left Conveyor Belt", "value": "0" },
    { "name": "Medium Chest", "value": "0" },
    { "name": "Merger", "value": "0" },
    { "name": "Oil Barrel", "value": "0" },
    { "name": "Oil Fuel", "value": "0" },
    { "name": "Oil Refinery", "value": "0" },
    { "name": "Oil Tank", "value": "0" },
    { "name": "Pink Sticky Gear", "value": "0" },
    { "name": "Pipe", "value": "0" },
    { "name": "Pipe Junction", "value": "0" },
    { "name": "Plate Factory Mold", "value": "0" },
    { "name": "Polishing Station", "value": "0" },
    { "name": "Propeller", "value": "0" },
    { "name": "Pumpjack", "value": "0" },
    { "name": "Randomizer", "value": "0" },
    { "name": "Red Bronze Ingot", "value": "0" },
    { "name": "Red Bronze Refinery", "value": "0" },
    { "name": "Red Page", "value": "0" },
    { "name": "Right Conveyor Belt", "value": "0" },
    { "name": "Rod Factory Mold", "value": "0" },
    { "name": "Sap Boiler", "value": "0" },
    { "name": "Sapling Automatic Planter", "value": "0" },
    { "name": "Sawmill", "value": "0" },
    { "name": "Serpents Fang", "value": "0" },
    { "name": "Serpents Scale", "value": "0" },
    { "name": "Small Chest", "value": "0" },
    { "name": "Small Furnace", "value": "0" },
    { "name": "Solar Panel", "value": "0" },
    { "name": "Splitter", "value": "0" },
    { "name": "Splitter Conveyor", "value": "0" },
    { "name": "Steam Generator", "value": "0" },
    { "name": "Steel Bolt", "value": "0" },
    { "name": "Steel Ingot", "value": "0" },
    { "name": "Steel Mill", "value": "0" },
    { "name": "Steel Plate", "value": "0" },
    { "name": "Steel Press", "value": "0" },
    { "name": "Steel Rod", "value": "0" },
    { "name": "Stonecutter", "value": "0" },
    { "name": "Switch", "value": "0" },
    { "name": "Syrup Bottler", "value": "0" },
    { "name": "Tier 2 Conveyor Belt", "value": "0" },
    { "name": "Tier 2 Conveyor Ramp Down", "value": "0" },
    { "name": "Tier 2 Conveyor Ramp Up", "value": "0" },
    { "name": "Tier 2 Crate Packer", "value": "0" },
    { "name": "Tier 2 Input/Output Chest", "value": "0" },
    { "name": "Tier 2 Left Conveyor Belt", "value": "0" },
    { "name": "Tier 2 Right Conveyor Belt", "value": "0" },
    { "name": "Tier 2 Vending Machine", "value": "0" },
    { "name": "Timed Input-Output Chest", "value": "0" },
    { "name": "Totem Disabler", "value": "0" },
    { "name": "Tree Fruit Shaker", "value": "0" },
    { "name": "Vending Machine", "value": "0" },
    { "name": "Washing Station", "value": "0" },
    { "name": "Water Barrel", "value": "0" },
    { "name": "Water Catcher", "value": "0" },
    { "name": "Water Jug", "value": "0" },
    { "name": "Wool Vacuum", "value": "0" },
    { "name": "Xor Gate", "value": "0" }
],
   "ANIMALS": [
    { "name": "Animal Well-Being Kit", "value": "0" },
    { "name": "Blue Butterfly Jar", "value": "0" },
    { "name": "Blue Firefly Jar", "value": "0" },
    { "name": "Cat Pet Spawn Egg", "value": "0" },
    { "name": "Chicken Spawn Egg Tier 2", "value": "0" },
    { "name": "Chicken Spawn Egg Tier 3", "value": "0" },
    { "name": "Cow Spawn Egg Tier 2", "value": "0" },
    { "name": "Cow Spawn Egg Tier 3", "value": "0" },
    { "name": "Dog Pet Spawn Egg", "value": "0" },
    { "name": "Duck Spawn Egg Tier 2", "value": "0" },
    { "name": "Duck Spawn Egg Tier 3", "value": "0" },
    { "name": "Green Butterfly Jar", "value": "0" },
    { "name": "Green Firefly Jar", "value": "0" },
    { "name": "Horse Spawn Egg Tier 2", "value": "0" },
    { "name": "Horse Spawn Egg Tier 3", "value": "0" },
    { "name": "Koi", "value": "0" },
    { "name": "Penguin Pet Spawn Egg", "value": "0" },
    { "name": "Pig Spawn Egg Tier 2", "value": "0" },
    { "name": "Pig Spawn Egg Tier 3", "value": "0" },
    { "name": "Pink Rabbit", "value": "0" },
    { "name": "Purple Firefly Jar", "value": "0" },
    { "name": "Red Butterfly Jar", "value": "0" },
    { "name": "Red Firefly Jar", "value": "0" },
    { "name": "Sheep Spawn Egg Tier 2", "value": "0" },
    { "name": "Sheep Spawn Egg Tier 3", "value": "0" },
    { "name": "Silver Butterfly Jar", "value": "0" },
    { "name": "Spider Pet Spawn Egg", "value": "0" },
    { "name": "Turkey Spawn Egg Tier 2", "value": "0" },
    { "name": "Turkey Spawn Egg Tier 3", "value": "0" },
    { "name": "Vulture Spawn Egg Tier 2", "value": "0" },
    { "name": "Vulture Spawn Egg Tier 3", "value": "0" },
    { "name": "White Butterfly Jar", "value": "0" },
    { "name": "Yak Spawn Egg Tier 2", "value": "0" },
    { "name": "Yak Spawn Egg Tier 3", "value": "0" },
    { "name": "Yellow Butterfly Jar", "value": "0" }
],
"BLOCKS": [
    { "name": "Amethyst Block", "value": "0" },
    { "name": "Blue Coral Block", "value": "0" },
    { "name": "Blue Slime Block", "value": "0" },
    { "name": "Bone Block", "value": "0" },
    { "name": "Buffalkor Crystal Block", "value": "0" },
    { "name": "Candy Cane Block", "value": "0" },
    { "name": "Chrome Glass Block", "value": "0" },
    { "name": "Compact Ice", "value": "0" },
    { "name": "Compact Snow", "value": "0" },
    { "name": "Copper Block", "value": "0" },
    { "name": "Diamond Block", "value": "0" },
    { "name": "Glowing Blue Mushroom Block", "value": "0" },
    { "name": "Glowing Cyan Mushroom Block", "value": "0" },
    { "name": "Glowing Green Mushroom Block", "value": "0" },
    { "name": "Glowing Pink Mushroom Block", "value": "0" },
    { "name": "Gold Block", "value": "0" },
    { "name": "Green Slime Block", "value": "0" },
    { "name": "Ice", "value": "0" },
    { "name": "Ice Brick", "value": "0" },
    { "name": "Light Blue Coral Block", "value": "0" },
    { "name": "Magma Block", "value": "0" },
    { "name": "Mushroom Block", "value": "0" },
    { "name": "Obsidian", "value": "0" },
    { "name": "Opal Block", "value": "0" },
    { "name": "Pearl Block", "value": "0" },
    { "name": "Pink Coral Block", "value": "0" },
    { "name": "Pink Slime Block", "value": "0" },
    { "name": "Red Bronze Block", "value": "0" },
    { "name": "Respawn Block", "value": "0" },
    { "name": "Ruby Block", "value": "0" },
    { "name": "Sea Lantern", "value": "0" },
    { "name": "Spawn Block", "value": "0" },
    { "name": "Void Block", "value": "0" },
    { "name": "Void Grass Block", "value": "0" },
    { "name": "Void Sand Block", "value": "0" },
    { "name": "Void Stone Block", "value": "0" }
]
   "TOTEMS": [
    { "name": "Blackberry Bush Totem", "value": "0" },
    { "name": "Blueberry Bush Totem", "value": "0" },
    { "name": "Dragonfruit Totem", "value": "0" },
    { "name": "Obsidian Totem", "value": "0" },
    { "name": "Pineapple Totem", "value": "0" },
    { "name": "Pumpkin Totem", "value": "0" },
    { "name": "Red Berry Bush Totem", "value": "0" }
],
   "LUMBER": [
    { "name": "Birch Wood", "value": "0" },
    { "name": "Cherry Blossom Sapling", "value": "0" },
    { "name": "Cherry Blossom Wood", "value": "0" },
    { "name": "Hickory Wood", "value": "0" },
    { "name": "Maple Wood", "value": "0" },
    { "name": "Oak Wood", "value": "0" },
    { "name": "Palm Tree Sapling", "value": "0" },
    { "name": "Pine Wood", "value": "0" },
    { "name": "Spirit Sapling", "value": "0" },
    { "name": "Spirit Wood", "value": "0" }
],
    "MISC": [
    {"name": "10 Coin Bag", "value": "0"},
    {"name": "100 Coin Bag", "value": "0"},
    {"name": "1000 Coin Bag", "value": "0"},
    {"name": "Buffalkor Island Treasure Chest", "value": "0"},
    {"name": "Buffalkor Portal", "value": "0"},
    {"name": "Buffalkor Portal Shard", "value": "0"},
    {"name": "Cauldron 2021", "value": "0"},
    {"name": "Cauldron 2022", "value": "0"},
    {"name": "Cauldron 2023", "value": "0"},
    {"name": "Christmas Present 2020", "value": "0"},
    {"name": "Christmas Present 2021", "value": "0"},
    {"name": "Christmas Present 2022", "value": "0"},
    {"name": "Confetti Popper", "value": "0"},
    {"name": "Desert Island Treasure Chest", "value": "0"},
    {"name": "Desert Portal", "value": "0"},
    {"name": "Desert Portal Shard", "value": "0"},
    {"name": "Diamond Mines Portal", "value": "0"},
    {"name": "Diamond Mines Portal Shard", "value": "0"},
    {"name": "Dungeon Chest", "value": "0"},
    {"name": "Formula 86", "value": "0"},
    {"name": "Frosty Slime Ball", "value": "0"},
    {"name": "Glitterball", "value": "0"},
    {"name": "Glow Stick", "value": "0"},
    {"name": "Gold Envelope 2023", "value": "0"},
    {"name": "Gold Skorp Claw", "value": "0"},
    {"name": "Gold Skorp Scale", "value": "0"},
    {"name": "Green Butterfly Lantern", "value": "0"},
    {"name": "Infernal Dragon Egg", "value": "0"},
    {"name": "Iron Skorp Scale", "value": "0"},
    {"name": "Legacy Food Processor", "value": "0"},
    {"name": "Maple Isles Treasure Chest", "value": "0"},
    {"name": "Opened Cauldron 2021", "value": "0"},
    {"name": "Opened Cauldron 2022", "value": "0"},
    {"name": "Opened Cauldron 2023", "value": "0"},
    {"name": "Party Horn", "value": "0"},
    {"name": "Portal Crystal", "value": "0"},
    {"name": "Red Butterfly Lantern", "value": "0"},
    {"name": "Red Envelope 2022", "value": "0"},
    {"name": "Red Envelope 2023", "value": "0"},
    {"name": "Ruby Skorp Claw", "value": "0"},
    {"name": "Ruby Skorp Scale", "value": "0"},
    {"name": "Ruby Skorp Stinger", "value": "0"},
    {"name": "Serpent Egg", "value": "0"},
    {"name": "Skorp Serpents Scale", "value": "0"},
    {"name": "Skorp Serpents Tooth", "value": "0"},
    {"name": "Slime Island Treasure Chest", "value": "0"},
    {"name": "Slime Portal", "value": "0"},
    {"name": "Slime Portal Shard", "value": "0"},
    {"name": "Sparkler", "value": "0"},
    {"name": "Spirit Island Treasure Chest", "value": "0"},
    {"name": "Treasure Chest", "value": "0"},
    {"name": "Wizard Island Treasure Chest", "value": "0"},
    {"name": "Wizard Portal", "value": "0"},
    {"name": "Wizard Portal Shard", "value": "0"}
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


categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.textContent.toUpperCase(); 
        openModal(category);
    });
});

function openModal(category) {
    modal.style.display = "block";
    modalTitle.textContent = category; 
    if (category === "ALL") {
        const allItems = Object.values(items).flat(); 
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
