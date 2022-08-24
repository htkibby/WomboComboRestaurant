import  {tableData, waiterData, waiterMatch} from '../scripts/data.js'

// const bart = [
//    {
//       id: 1,
//       table: 101,
//       drinks: ["mojito", " beer", " coke"],
//       food: ["steak", " chicken", " pot stickers"],
//       occupancy: 4,
//       needsBooster: false,
//       bill: 460,
//       tip: '',
//       occupied: true
//    },
//    {
//       id: 2,
//       table: 102,
//       drinks: ["sprite", " coke zero", " orange juice"],
//       food: ["bread sticks", " ceasar salad", " chicken tenders", " large lobster"],
//       occupancy: 3,
//       needsBooster: true,
//       bill: 265,
//       tip: '',
//       occupied: true
//    },
//    {
//       id: 3,
//       table: 103,
//       drinks: ["dirty"],
//       food: ["dirty"],
//       occupancy: 0,
//       needsBooster: false,
//       bill: 0,
//       tip: '',
//       occupied: false
//    },
//    {
//       id: 4,
//       table: 104,
//       drinks: ["dirty"],
//       food: ["dirty"],
//       occupancy: 0,
//       needsBooster: false,
//       bill: 590,
//       tip: '',
//       occupied: false
//    }

// ]

const thomasWaiterPage = () => {

   
   const bart = waiterMatch(1)

   console.log(bart)
   
   let htmlCalc = ``
   
   let sumBill = 0
   bart.forEach(element => {
      sumBill += element.bill;
   })
   htmlCalc += `<p>Bartholomew has earned Big Brother Restaurant <b>$${sumBill}</b>.`
   
   let sumTip = 0
   bart.forEach(element => {
      sumTip += element.bill * .2;
   })
   htmlCalc += `<p>Bartholomew has earned <b>$${sumTip}</b> in tips.</p>`
   
   // const calc = bart.forEach(element => {
   //    element.tip = element.bill * .2
   // })
   
   for (let calc of bart) {
      calc.tip = calc.bill * .2
   }
   
   let htmlWaiter = '<p class="waiterTitle">Bartholomew Tables</p><ul>';
   let htmlEmpty = ``;
   
   for (const waiter of bart) {
      if (waiter.occupied && waiter.needsBooster) {
         htmlWaiter += `<li><b>Table</b> ${waiter.table}</li>`
         htmlWaiter += `<li>Drinks: ${waiter.drinks}</li>`
         htmlWaiter += `<li>Food: ${waiter.food}</li>`
         htmlWaiter += `<li>Bill: $${waiter.bill}</li>`
         htmlWaiter += `<li><b>TABLE NEEDS A BOOSTER SEAT!</b></li>`
         htmlWaiter += `<li>Occupancy: ${waiter.occupancy}</li><br></br>`
      } else if (waiter.occupied) {
         htmlWaiter += `<li><b>Table</b> ${waiter.table}</li>`
         htmlWaiter += `<li>Drinks: ${waiter.drinks}</li>`
         htmlWaiter += `<li>Food: ${waiter.food}</li>`
         htmlWaiter += `<li>Bill: $${waiter.bill}</li>`
         htmlWaiter += `<li>Occupancy: ${waiter.occupancy}</<li><br></br>`
      } else if (waiter.bill === 0) {
         htmlEmpty += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
         htmlEmpty += `<p><b>NEVER SERVE THIS GROUP OF PEOPLE AGAIN CAUSE THEY DID NOT PAY ME - SINCERELY BARTHOLOMEW</b></p><br></br>`
      } else {
         htmlEmpty += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
         htmlEmpty += `<ul><li>Final Bill $${waiter.bill}</li>`
         htmlEmpty += `<li>Final Tip $${waiter.tip}</li></ul><br></br>`
      }
   }
   htmlWaiter += '</ul>'


   document.getElementById('waitertk').innerHTML = htmlWaiter


   document.getElementById('emptyTables1').innerHTML = htmlEmpty


   document.getElementById('totals1').innerHTML = htmlCalc

}

thomasWaiterPage()