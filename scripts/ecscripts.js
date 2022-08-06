const James = [
    {
        id: 1,
        table: 708,
        food: ["Pizza", "Pasta", "Soup", "Hamburger", "Cake"],
        drinks: ["Beer", "wine", "water", "coke", "milk"],
        occupancy: 5,
        needsBooster: true,
        bill: 300,
        tip:""

    },
    {
        id: 2,
        table: 709,
        food: ["Cheese plate", "fruit", "tacos"],
        drinks: ["water"],
        occupancy: 3,
        needsBooster: false,
        bill: 125,
        tip:""  
    },
    {
        id: 3,
        table: 708,
        food: ["salad", "burrito", "the special", "steak"],
        drinks: ["hot toddy","mule","beer"],
        occupancy: 4,
        needsBooster: true,
        bill: 155,
        tip:""
    }
]

let jamestip = 0

for (calc of James) {
     jamestip += calc.bill * .2
} 

console.log(jamestip)