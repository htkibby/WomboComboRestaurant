const totals = [
   {
      id: 1,
      table: 708,
      food: ["Pizza", "Pasta", "Soup", "Hamburger", "Cake"],
      drinks: ["Beer", "wine", "water", "coke", "milk"],
      occupancy: 5,
      needsBooster: true,
      bill: 300,
      tip:"",
      occupied: true
  },
  {
      id: 2,
      table: 709,
      food: ["Cheese plate", "fruit", "tacos"],
      drinks: ["water"],
      occupancy: 3,
      needsBooster: false,
      bill: 125,
      tip:"",
      occupied: true  
  },
  {
      id: 3,
      table: 710,
      food: ["salad", "burrito", "the special", "steak"],
      drinks: ["hot toddy","mule","beer"],
      occupancy: 4,
      needsBooster: true,
      bill: 155,
      tip:"",
      occupied: true
  },
  {
   id: 4,
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
   occupied: true
},
{
   id: 5,
   table: 004,
   drinks: ["Lemonade", "Texas Tea", "Sweet Tea", "Lemonade Tea"],
   food: ["Chicken Strips", "Mac-n-Cheese", "Surf-n-Turf", "Pie"],
   occupancy: 4,
   needsBooster: true,
   bill: 159,
   tip: "",
   occupied: true,
},
{
   id: 6,
   table: 005,
   drinks: ["Sprite", "Coke", "Orange Soda"],
   food: ["Peperoni Pizza"],
   occupancy: 4,
   needsBooster: false,
   bill: 340,
   tip: "",
   occupied: true
},
{
   id: 7,
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
   occupied: true
},
{
   id: 8,
   table: 101,
   drinks: ["mojito", " beer", " coke"],
   food: ["steak", " chicken", " pot stickers"],
   occupancy: 4,
   needsBooster: false,
   bill: 460,
   tip: '',
   occupied: true
},
{
   id: 9,
   table: 102,
   drinks: ["sprite", " coke zero", " orange juice"],
   food: ["bread sticks", " ceasar salad", " chicken tenders", " large lobster"],
   occupancy: 3,
   needsBooster: true,
   bill: 265,
   tip: '',
   occupied: true
},
{
   id: 10,
   table: 103,
   drinks: ["dirty"],
   food: ["dirty"],
   occupancy: 0,
   needsBooster: false,
   bill: 0,
   tip: '',
   occupied: false
},
{
   id: 11,
   table: 104,
   drinks: ["dirty"],
   food: ["dirty"],
   occupancy: 0,
   needsBooster: false,
   bill: 590,
   tip: '',
   occupied: false
},
{
   id: 12,
   table: 201,
   drinks:["water","soda","beer"],
   food:["vegetable rice","green chicken","noodle soup"],
   occupancy: 6,
   needsBooster: true,
   bill: 510,
   tip:"",
   occupied: true
},
{
   id: 13,
   table: 202,
   drinks:["cold water","pepsi"],
   food:[" mix vegetable ","spicy chicken"," white soup"],
   occupancy: 6,
   needsBooster: true,
   bill: 370,
   tip:"",
   occupied: true
},
{
   id: 14,
   table: 203,
   drinks:["water","coke","orange drink"],
   food:["noodles","steak","pizza"],
   occupancy: 4,
   needsBooster: false,
   bill: 510,
   tip:"",
   occupied: true
}
]

let htmlTotals = ``

let sumTotalBill = 0
totals.forEach(element => {
   sumTotalBill += element.bill;
})
htmlTotals += `<p class="totalBoxes">The Big Brother Restaurant has earned <b>$${sumTotalBill}</b> so far tonight.</p>`

let sumTotalTip = 0
totals.forEach(element => {
   sumTotalTip += element.bill *.2;
})


htmlTotals += `<p class="totalBoxes">The Big Brother Restaurant waiters have earned <b>$${sumTotalTip.toFixed(2)}</b> in tips tonight, see no liveable wage is viable!</p>`

document.getElementById('restaurantTotals').innerHTML = htmlTotals