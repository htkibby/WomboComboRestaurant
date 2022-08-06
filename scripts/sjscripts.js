const pepper = [
    {
        id: 1,
        table: 003,
        drinks: ["Crown and Coke", "Royle Flush", "Margarita Pitcher "],
        food: [
            "Chicken and Rice",
            "Rib-Tips",
            "Sampler- Platter",
            "Veggies",
            "Meatloaf",
        ],
        occupancy: 5,
        needsBooster: true,
        bill: 159,
        tip: "",
    },

    {
        id: 2,
        table: 004,
        drinks: ["Lemonade", "Texas Tea", "Sweet Tea", "Lemonade Tea"],
        food: ["Chicken Strips", "Mac-n-Cheese", "Surf-n-Turf", "Pie"],
        occupancy: 4,
        needsBooster: true,
        bill: 159,
        tip: "",
    },

    {
        id: 3,
        table: 005,
        drinks: ["Sprite", "Coke", "Orange Soda"],
        food: ["Peperoni Pizza"],
        occupancy: 4,
        needsBooster: false,
        bill: 340,
        tip: "",
    },

    {
        id: 4,
        table: 006,
        drinks: ["Red Wine", "White Wine"],
        food: [
            "Medium-Well Rib-eye Steak and Grilled Shrimp",
            "Well-Done Rib-eye Steak and Potatoe",
        ],
        occupancy: 2,
        needsBooster: true,
        bill: 159,
        tip: "",
    },
];

let pepperTip = 0;
for (calc of pepper) {
    pepperTip += calc.bill * 2;
}

console.log(pepperTip);
