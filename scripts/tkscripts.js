const bart = [
   {
      id: 1,
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
      id: 2,
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

let htmlWaiter = '<p class="waiterTitle">Bart Tables</p><ul>';
let htmlEmpty = `<ul>`;
for (const waiter of bart) {
   console.log(waiter)
   if (waiter.occupied === true && waiter.needsBooster === true) {
      htmlWaiter += `<li><b>Table</b> ${waiter.table}</<li>`
      htmlWaiter += `<li>Drinks: ${waiter.drinks}</<li>`
      htmlWaiter += `<li>Food: ${waiter.food}</<li>`
      htmlWaiter += `<li>Bill: $${waiter.bill}</<li>`
      htmlWaiter += `<li><b>TABLE NEEDS A BOOSTER SEAT!</b></<li>`
      htmlWaiter += `<li>Occupancy: ${waiter.occupancy}</<li><br></br>`
   } else if (waiter.occupied === true) {
      htmlWaiter += `<li><b>Table</b> ${waiter.table}</<li>`
      htmlWaiter += `<li>Drinks: ${waiter.drinks}</<li>`
      htmlWaiter += `<li>Food: ${waiter.food}</<li>`
      htmlWaiter += `<li>Bill: $${waiter.bill}</<li>`
      htmlWaiter += `<li>Occupancy: ${waiter.occupancy}</<li><br></br>`
   }
}
htmlWaiter += '</ul>'
htmlEmpty += `</ul>`

document.getElementById('waitertk').innerHTML = htmlWaiter
document.getElementById('waitersj').innerHTML = htmlWaiter
document.getElementById('waiterec').innerHTML = htmlWaiter
document.getElementById('waiteryogi').innerHTML = htmlWaiter