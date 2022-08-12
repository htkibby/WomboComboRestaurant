const pepper = [
    {
        id: 1,
        table: 003,
        drinks: ["Crown and Coke", " Royle Flush", " Margarita Pitcher "],
        food: [
            " Chicken and Rice",
            "Rib-Tips",
            "Sampler- Platter",
            "Veggies",
            "Meatloaf",
        ],
        occupied: true,
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
        occupied: true,
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
        occupied: true,
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
        occupied: true,
        occupancy: 2,
        needsBooster: true,
        bill: 159,
        tip: "",
    },
];
//console.log(pepper);

let htmlWaiter = "Pepper Tables<ul>";
for (const waiter of pepper) {
    console.log(waiter)
    if (waiter.occupied === true && waiter.needsBooster === true) {
        htmlWaiter += `<li><b>Table</b> ${waiter.table}</<li>`;
        htmlWaiter += `<li>drinks: ${waiter.drinks}</<li>`;
        htmlWaiter += `<li>food: ${waiter.food}</<li>`;
        htmlWaiter += `<li><b>Table Needs a Booster Seat!</b></<li>`;
        htmlWaiter += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`;
    } else if (waiter.occupied === true) {
        htmlWaiter += `<li><b>Table</b> ${waiter.table}</<li>`;
        htmlWaiter += `<li>drinks: ${waiter.drinks}</<li>`;
        htmlWaiter += `<li>food: ${waiter.food}</<li>`;
        htmlWaiter += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`;
    }
}
htmlWaiter += "</ul>";
/*for (const boosterSeat of pepper) {
    if (boosterSeat === boosterSeat.needsBooster === true)
        console.log(boosterSeat.needsBooster)
}*/
let pepperTip = 0;
for (calc of pepper) {
    pepperTip += calc.bill * 2;
    console.log(pepperTip);
}

/*document.getElementById('waitertk').innerHTML = htmlWaiter
document.getElementById('waitersj').innerHTML = htmlWaiter
document.getElementById('waiterec').innerHTML = htmlWaiter
document.getElementById('waiteryogi').innerHTML = htmlWaiter*/
