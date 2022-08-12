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
        occupied: false,
        occupancy: 0,
        needsBooster: false,
        bill: 159,
        tip: "",
    },
];
//console.log(pepper);

let htmlCalcPepper = ``

let sumBillPepper = 0
pepper.forEach(element => {
    sumBillPepper += element.bill;
})
htmlCalcPepper += `<p>pepperholomew has earned Big Brother Restaurant <b>$${sumBillPepper}</b>.`

let sumTipPepper = 0
pepper.forEach(element => {
    sumTipPepper += element.bill * .2;
})
htmlCalcPepper += `<p>pepperholomew has earned <b>$${sumTipPepper}</b> in tips.</p>`

for (calc of pepper) {
    calc.tip = calc.bill * .2
    //    htmlCalcPepper += `pepperholomew has an estimated $${calc.tip} in tips for the night.`
}


let htmlWaiterPepper = "Pepper Tables<ul>";
let htmlEmptyPepper = ``;
for (const waiter of pepper) {
    console.log(waiter)
    if (waiter.occupied === true && waiter.needsBooster === true) {
        htmlWaiterPepper += `<li><b>Table</b> ${waiter.table}</<li>`;
        htmlWaiterPepper += `<li>drinks: ${waiter.drinks}</<li>`;
        htmlWaiterPepper += `<li>food: ${waiter.food}</<li>`;
        htmlWaiterPepper += `<li><b>Table Needs a Booster Seat!</b></<li>`;
        htmlWaiterPepper += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`;
    } else if (waiter.occupied === true) {
        htmlWaiterPepper += `<li><b>Table</b> ${waiter.table}</<li>`;
        htmlWaiterPepper += `<li>drinks: ${waiter.drinks}</<li>`;
        htmlWaiterPepper += `<li>food: ${waiter.food}</<li>`;
        htmlWaiterPepper += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`;
    } else if (waiter.bill === 0) {
        htmlEmptyPepper += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
        htmlEmptyPepper += `<p><b>NEVER SERVE THIS GROUP OF PEOPLE AGAIN CAUSE THEY DID NOT PAY ME - SINCERELY pepperHOLOMEW</b></p><br></br>`
    } else {
        htmlEmptyPepper += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
        htmlEmptyPepper += `<ul><li>Final Bill $${waiter.bill}</li>`
        htmlEmptyPepper += `<li>Final Tip $${calc.tip}</li></ul><br></br>`
    }
}

htmlWaiterPepper += "</ul>";
/*for (const boosterSeat of pepper) {
    if (boosterSeat === boosterSeat.needsBooster === true)
        console.log(boosterSeat.needsBooster)
}*/
let pepperTip = 0;
for (calc of pepper) {
    pepperTip += calc.bill * 2;
    console.log(pepperTip);
}
document.getElementById('waitersj').innerHTML = htmlWaiterPepper
document.getElementById('emptyTables3').innerHTML = htmlEmptyPepper
document.getElementById('totals3').innerHTML = htmlCalcPepper




/*document.getElementById('waitertk').innerHTML = htmlWaiter
document.getElementById('waiterec').innerHTML = htmlWaiter
document.getElementById('waiteryogi').innerHTML = htmlWaiter*/
