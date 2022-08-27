import  {tableData, waiterData, waiterMatch} from '../scripts/data.js'

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