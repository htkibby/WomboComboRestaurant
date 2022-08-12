 const fabina =[
{
    id:1,
    table: 201,
    occupied:true,
    drinks:["water","soda","beer"],
    foodItems:["vegetable rice","green chicken","noodle soup"],
    occupancy: 6,
    boosterSeat: true,
    bill: 510,
    tip:""
    
},

{
 id:2,
    table: 202,
    occupied: true,
    drinks:["cold water","pepsi"],
    foodItems:[" mix vegetable ","spicy chicken"," white soup"],
    occupancy: 6,
    boosterSeat: true,
    bill: 370,
    tip:""
},
{

    id:3,
    table: 203,
    occupied: false,
    drinks:["water","coke","orange drink"],
    foodItems:["noodles","steak","pizza"],
    occupancy: 0,
    boosterSeat: false,
    bill: 510,
    tip:""
},

 {
    id:4,
    table: 204,
    occupied: true,
    drinks:["lemonade","coke","fruit juice"],
    foodItems:["noodles","steak","pizza"],
    occupancy: 0,
    boosterSeat: true,
    bill: 650,
    tip:""

 }


 ]
let htmlCalc = ``

let sumBill = 0
Fabina.forEach(element => {
   sumBill += element.bill;
})
htmlCalc += `<p>fabina has earned Big Brother Restaurant <b>$${sumBill}</b>.`

let sumTip = 0
bart.forEach(element => {
   sumTip += element.bill *.2;
})
htmlCalc += `<p>fabina has earned <b>$${sumTip}</b> in tips.</p>`

for (calc of bart) {
   calc.tip = calc.bill * .2
//    htmlCalc += `Bartholomew has an estimated $${calc.tip} in tips for the night.`
}

let htmlWaiter = '<p class="waiterTitle">Bart Tables</p><ul>';
let htmlEmpty = ``;
for (const waiter of fabina) {
   // console.log(waiter)
   if (waiter.occupied === true && waiter.needsBooster === true) {
      htmlWaiterFabina += `<li><b>Table</b> ${waiter.table}</li>`
      htmlWaiterFabina += `<li>Drinks: ${waiter.drinks}</li>`
      htmlWaiterFabina += `<li>Food: ${waiter.food}</li>`
      htmlWaiterFabina+= `<li>Bill: $${waiter.bill}</li>`
      htmlWaiterFabina += `<li><b>TABLE NEEDS A BOOSTER SEAT!</b></li>`
      htmlWaiterFabina += `<li>Occupancy: ${waiter.occupancy}</li><br></br>`
   } else if (waiter.occupied === true) {
      htmlWaiterFabina += `<li><b>Table</b> ${waiter.table}</li>`
      htmlWaiterFabina += `<li>Drinks: ${waiter.drinks}</li>`
      htmlWaiterFabina += `<li>Food: ${waiter.food}</li>`
      htmlWaiterFabina += `<li>Bill: $${waiter.bill}</li>`
      htmlWaiterFabina += `<li>Occupancy: ${waiter.occupancy}</<li><br></br>`
   } else if (waiter.bill === 0) { 
      htmlEmpty += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
      htmlEmpty += `<p><b>NEVER SERVE THIS GROUP OF PEOPLE AGAIN CAUSE THEY DID NOT PAY ME - SINCERELY BARTHOLOMEW</b></p><br></br>`
   } else {
      htmlEmpty += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
      htmlEmpty += `<ul><li>Final Bill $${waiter.bill}</li>`
      htmlEmpty += `<li>Final Tip $${calc.tip}</li></ul><br></br>`
   }
}
htmlWaiter += '</ul>'
// htmlEmpty += ``

//document.getElementById('waitertk').innerHTML = htmlWaiter
//document.getElementById('waitersj').innerHTML = htmlWaiter
//document.getElementById('waiterec').innerHTML = htmlWaiter
//document.getElementById('waiteryogi').innerHTML = htmlWaiter

//document.getElementById('emptyTables1').innerHTML = htmlEmpty
//document.getElementById('emptyTables2').innerHTML = htmlEmpty
//document.getElementById('emptyTables3').innerHTML = htmlEmpty
//document.getElementById('emptyTables4').innerHTML = htmlEmpty

//document.getElementById('totals1').innerHTML = htmlCalc
//document.getElementById('totals2').innerHTML = htmlCalc
////document.getElementById('totals3').innerHTML = htmlCalc
//document.getElementById('totals4').innerHTML = htmlCalc
document.getElementById('waiteryogi').innerHTML=htmlWaiterFabina

document.getElementById('emptyTables4').innerHTML=htmlWaiterFabina

document.getElementById('emptyTables').innerHTML=htmlcalcFabina

