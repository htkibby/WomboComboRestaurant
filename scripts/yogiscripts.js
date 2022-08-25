import{getTableData,getWaiterData} from '../scripts/data.js'
console.log(getTableData());
console.log(getWaiterData());

const tableData = getTableData();
const waiterData =getWaiterData();

const fabina = tableData.filter(x => x.waiterId === 4);
console.log(fabina);




let htmlcalcFabina = ``

let sumBillFabina = 0
fabina.forEach(element => {
   sumBillFabina += element.bill;
})
htmlcalcFabina += `<p>Fabina has earned Big Brother Restaurant <b>$${sumBillFabina}</b>.`

let sumTipFabina = 0
fabina.forEach(element => {
   sumTipFabina += element.bill *.2;
})
htmlcalcFabina += `<p>Fabina has earned <b>$${sumTipFabina}</b> in tips.</p>`

for (let calcFabina of fabina) {
   calcFabina.tip = calcFabina.bill * .2
//    htmlCalc += `Bartholomew has an estimated $${calc.tip} in tips for the night.`
}

let htmlWaiterFabina = '<p class="waiterTitle">Fabina Tables</p><ul>';
let htmlEmptyFabina = ``;
for (const waiterFabina of fabina) {
   // console.log(waiterFabina)
   if (waiterFabina.occupied === true && waiterFabina.needsBooster === true) {
      htmlWaiterFabina += `<li><b>Table</b> ${waiterFabina.table}</li>`
      htmlWaiterFabina += `<li>Drinks: ${waiterFabina.drinks}</li>`
      htmlWaiterFabina += `<li>Food: ${waiterFabina.food}</li>`
      htmlWaiterFabina+= `<li>Bill: $${waiterFabina.bill}</li>`
      htmlWaiterFabina += `<li><b>TABLE NEEDS A BOOSTER SEAT!</b></li>`
      htmlWaiterFabina += `<li>Occupancy: ${waiterFabina.occupancy}</li><br></br>`
   } else if (waiterFabina.occupied === true) {
      htmlWaiterFabina += `<li><b>Table</b> ${waiterFabina.table}</li>`
      htmlWaiterFabina += `<li>Drinks: ${waiterFabina.drinks}</li>`
      htmlWaiterFabina += `<li>Food: ${waiterFabina.food}</li>`
      htmlWaiterFabina += `<li>Bill: $${waiterFabina.bill}</li>`
      htmlWaiterFabina += `<li>Occupancy: ${waiterFabina.occupancy}</<li><br></br>`
   } else if (waiterFabina.bill === 0) { 
      htmlEmptyFabina += `<p class="waiterTitle"><b>Table ${waiterFabina.table}</b></p>`
      htmlEmptyFabina += `<p><b>NEVER SERVE THIS GROUP OF PEOPLE AGAIN CAUSE THEY DID NOT PAY ME - SINCERELY BARTHOLOMEW</b></p><br></br>`
   } else {
      htmlEmptyFabina += `<p class="waiterTitle"><b>Table ${waiterFabina.table}</b></p>`
      htmlEmptyFabina += `<ul><li>Final Bill $${waiterFabina.bill}</li>`
      htmlEmptyFabina += `<li>Final Tip $${calcFabina.tip}</li></ul><br></br>`
   }
}
htmlWaiterFabina += '</ul>'
console.log(htmlWaiterFabina);
console.log(htmlEmptyFabina);
console.log(htmlcalcFabina);

document.getElementById('waiteryogi').innerHTML=htmlWaiterFabina
document.getElementById('emptyTables4').innerHTML=htmlEmptyFabina
document.getElementById('totals4').innerHTML=htmlcalcFabina

