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

let htmlWaiter = 'Bart Tables<ul>'
for (const waiter of bart) {
   console.log(waiter)
   if (waiter.occupied === true && waiter.needsBooster === true) {
      htmlWaiter += `<li><b>Table</b> ${waiter.table}</<li>`
      htmlWaiter += `<li>drinks: ${waiter.drinks}</<li>`
      htmlWaiter += `<li>food: ${waiter.food}</<li>`
      htmlWaiter += `<li><b>Table Needs a Booster Seat!</b></<li>`
      htmlWaiter += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`
   } else if (waiter.occupied === true) {
      htmlWaiter += `<li><b>Table</b> ${waiter.table}</<li>`
      htmlWaiter += `<li>drinks: ${waiter.drinks}</<li>`
      htmlWaiter += `<li>food: ${waiter.food}</<li>`
      htmlWaiter += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`
   }
}
htmlWaiter += '</ul>'

document.getElementById('waitertk').innerHTML = htmlWaiter
document.getElementById('waitersj').innerHTML = htmlWaiter
document.getElementById('waiterec').innerHTML = htmlWaiter
document.getElementById('waiteryogi').innerHTML = htmlWaiter