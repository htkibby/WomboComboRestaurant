import  {tableData, waiterData, waiterMatch} from '../scripts/data.js'

const stevenWaiterPage = () => {
   const pepper = waiterMatch(3)

    let htmlCalcPepper = ``

    let sumBillPepper = 0
    pepper.forEach(element => {
        sumBillPepper += element.bill;
    })
    htmlCalcPepper += `<p>Pepper has earned Big Brother Restaurant <b>$${sumBillPepper}</b>.`

    let sumTipPepper = 0
    pepper.forEach(element => {
        sumTipPepper += element.bill * .2;
    })
    htmlCalcPepper += `<p>Pepper has earned <b>$${sumTipPepper}</b> in tips.</p>`

    for (let calc of pepper) {
        calc.tip = calc.bill * .2
        //    htmlCalcPepper += `pepperholomew has an estimated $${calc.tip} in tips for the night.`
    }


    let htmlWaiterPepper = '<p class="waiterTitle">Pepper Tables</p><ul>';
    let htmlEmptyPepper = ``;
    for (const waiter of pepper) {
        console.log(waiter)
        if (waiter.occupied === true && waiter.needsBooster === true) {
            htmlWaiterPepper += `<li><b>Table</b> ${waiter.table}</<li>`;
            htmlWaiterPepper += `<li>drinks: ${waiter.drinks}</<li>`;
            htmlWaiterPepper += `<li>food: ${waiter.food}</<li>`;
            htmlWaiterPepper += `<li>Bill: $${waiter.bill}</li>`;
            htmlWaiterPepper += `<li><b>Table Needs a Booster Seat!</b></<li>`;
            htmlWaiterPepper += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`;
        } else if (waiter.occupied === true) {
            htmlWaiterPepper += `<li><b>Table</b> ${waiter.table}</<li>`;
            htmlWaiterPepper += `<li>drinks: ${waiter.drinks}</<li>`;
            htmlWaiterPepper += `<li>food: ${waiter.food}</<li>`;
            htmlWaiterPepper += `<li>Bill: $${waiter.bill}</li>`;
            htmlWaiterPepper += `<li>occupancy: ${waiter.occupancy}</<li><br></br>`;
        } else if (waiter.bill === 0) {
            htmlEmptyPepper += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
            htmlEmptyPepper += `<p><b>NEVER SERVE THIS GROUP OF PEOPLE AGAIN CAUSE THEY DID NOT PAY ME - SINCERELY pepperHOLOMEW</b></p><br></br>`
        } else {
            htmlEmptyPepper += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
            htmlEmptyPepper += `<ul><li>Final Bill $${waiter.bill}</li>`
            htmlEmptyPepper += `<li>Final Tip $${waiter.tip}</li></ul><br></br>`
        }
    }

    htmlWaiterPepper += "</ul>";
    /*for (const boosterSeat of pepper) {
        if (boosterSeat === boosterSeat.needsBooster === true)
            console.log(boosterSeat.needsBooster)
    }*/
    let pepperTip = 0;
    for (let calc of pepper) {
        pepperTip += calc.bill * 2;
        console.log(pepperTip);
    }
    document.getElementById('waitersj').innerHTML = htmlWaiterPepper
    document.getElementById('emptyTables3').innerHTML = htmlEmptyPepper
    document.getElementById('totals3').innerHTML = htmlCalcPepper 
}

stevenWaiterPage()




/*document.getElementById('waitertk').innerHTML = htmlWaiter
document.getElementById('waiterec').innerHTML = htmlWaiter
document.getElementById('waiteryogi').innerHTML = htmlWaiter*/
