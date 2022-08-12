const james = [
    {
        id: 1,
        table: 708,
        food: ["Pizza", " Pasta"," Soup", " Hamburger", " Cake"],
        drinks: ["Beer", " wine", " water", " coke", " milk"],
        occupancy: 5,
        needsBooster: true,
        occupied: true,
        bill: 300,
        tip:""

    },
    {
        id: 2,
        table: 709,
        food: ["Cheese plate", " fruit", " tacos"],
        drinks: ["water"],
        occupancy: 3,
        needsBooster: false,
        occupied: true,
        bill: 125,
        tip:""  
    },
    {
        id: 3,
        table: 710,
        food: ["salad", " burrito", " the special", " steak"],
        drinks: ["hot toddy"," mule"," beer"],
        occupancy: 0,
        needsBooster: true,
        occupied: false,
        bill: 0,
        tip:""
    }
]


let htmlCalcEC = ``

let sumBill = 0
james.forEach(element => {
    sumBill += element.bill;
})
    
 //Ignore these lines of code
//for (parent of james)
//{if (typeof parent.bill === Number) { 
   // parent.forEach(element => {
   // sumBill += element.bill;
  //  })
//} else if (typeof parent.bill === String) {
    // ...
//}}
htmlCalcEC += `<p>James has earned Big Brother Restaurant <b>$${sumBill}</br></p>`

let sumTip = 0
james.forEach(element => {
    sumTip  += element.bill * .2;
})
htmlCalcEC += `<p>James has earned <b>$${sumTip}</b> for that vaycay fund!</p>`

for (calc of james) {
     calc.tip += calc.bill * .2
} 


let htmlEmptyEC = '<p> Needs to be Cleared </p> <ul>'
let htmlWaiterEC = '<p>James Tables</p> <ul>'
for (const waiter of james) {
    console.log(waiter)
    if (waiter.occupied === true && waiter.needsBooster === true) {
        htmlWaiterEC += `<li><b>Table</b> ${waiter.table}</li>`
        htmlWaiterEC += `<li>Drink: ${waiter.drinks}</li>`
        htmlWaiterEC += `<li>Food: ${waiter.food}</li>`
        htmlWaiterEC += `<li><b>Table Needs a Booster Seat!</b></li>`
        htmlWaiterEC += `<li>Occupancy: ${waiter.occupancy}</li><br></br>`
     } else if (waiter.occupied === true) {
        htmlWaiterEC += `<li><b>Table</b> ${waiter.table}</li>`
        htmlWaiterEC += `<li>Drinks: ${waiter.drinks}</li>`
        htmlWaiterEC += `<li>Food: ${waiter.food}</li>`
        htmlWaiterEC += `<li>Occupancy: ${waiter.occupancy}</li><br></br>`
     } else {
         htmlEmptyEC += `<p class= "waiterClean"> <b> Table ${waiter.table}</b> </p>`
         htmlEmptyEC += `<ul><li>Bill: ${waiter.bill}</li>`
         htmlEmptyEC += `<li> Clean Me!</li>`
        
     }
    
  }
  htmlWaiterEC += '</ul>'
  htmlEmptyEC += '</ul>'
  

  document.getElementById('waitertk').innerHTML = htmlWaiterEC
  document.getElementById('waitersj').innerHTML = htmlWaiterEC
  document.getElementById('waiterec').innerHTML = htmlWaiterEC
  document.getElementById('waiteryogi').innerHTML = htmlWaiterEC

  document.getElementById('waiterCleanEc').innerHTML =htmlEmptyEC
  document.getElementById('ecTotalTips').innerHTML = htmlCalcEC

  