const bart = [
   {
      id: 1,
      table: 101,
      drinks: ["mojito", "beer", "coke"],
      food: ["steak", "chicken", "pot stickers"],
      occupancy: 4,
      needsBooster: false,
      bill: 460,
      tip: '',
      occupied: true
   },
   {
      id: 2,
      table: 102,
      drinks: ["sprite", "coke zero", "orange juice"],
      food: ["bread sticks", "ceasar salad", "chicken tenders", "large lobster"],
      occupancy: 3,
      needsBooster: true,
      bill: 265,
      tip: '',
      occupied: true
   },
   {
      id: 3,
      table: 103,
      drinks: ["dirty"],
      food: ["dirty"],
      occupancy: 0,
      needsBooster: false,
      bill: '',
      tip: '',
      occupied: false
   }
]


for (calc of bart) {
   calc.tip = calc.bill * .2
}

console.log(bart)