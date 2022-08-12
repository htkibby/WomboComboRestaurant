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
 console.log(fabina)

 let fabinaTip=0
 for(calc of fabina){
    fabinaTip+=calc.bill *.2
 }
 console.log(fabinaTip)


 let htmlWaiterFab = 'FabinaTables<ul>'
for (const waiter of fabina) {
   console.log(fabina)
   if (waiter.occupied === true && waiter.needsBooster === true) {
      htmlWaiterFab += `<li>Table ${waiter.table}</<li>`
      htmlWaiterFab += `<li>drinks: ${waiter.drinks}</<li>`
      htmlWaiterFab += `<li>food: ${waiter.food}</<li>`
      htmlWaiterFab += `<li>Table Needs a Booster Seat!<li>`
      htmlWaiterFab += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`
   } else if (waiter.occupied === true) {
      htmlWaiterFab += `<li>Table ${waiter.table}</<li>`
      htmlWaiterFab += `<li>drinks: ${waiter.drinks}</<li>`
      htmlWaiterFab += `<li>food: ${waiter.food}</<li>`
      htmlWaiterFab += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`
   } else {
    htmltable += '<p class="waiterbook"> table $(waiter.table)</p> '
   }

}
htmlWaiter += '</ul>'

document.getElementById('waitertk').innerHTML = htmlWaiter
document.getElementById('waitersj').innerHTML = htmlWaiter
document.getElementById('waiterec').innerHTML = htmlWaiter
document.getElementById('waiteryogi').innerHTML = htmlWaiter