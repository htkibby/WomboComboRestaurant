import  {tableData, waiterData, waiterMatch} from '../scripts/data.js'

// const james = [
//     {
//         id: 1,
//         table: 708,
//         food: ["Pizza", " Pasta"," Soup", " Hamburger", " Cake"],
//         drinks: ["Beer", " wine", " water", " coke", " milk"],
//         occupancy: 5,
//         needsBooster: true,
//         occupied: true,
//         bill: 300,
//         tip:""

//     },
//     {
//         id: 2,
//         table: 709,
//         food: ["Cheese plate", " fruit", " tacos"],
//         drinks: ["water"],
//         occupancy: 3,
//         needsBooster: false,
//         occupied: true,
//         bill: 125,
//         tip:""  
//     },
//     {
//         id: 3,
//         table: 710,
//         food: ["salad", " burrito", " the special", " steak"],
//         drinks: ["hot toddy"," mule"," beer"],
//         occupancy: 0,
//         needsBooster: true,
//         occupied: false,
//         bill: 155,
//         tip:""
//     }
// ]

const ericaWaiterPage = () =>{
    const james = waiterMatch(2)

    let htmlCalcEC = ``

    let sumBillEC = 0
    james.forEach(element => {
        sumBillEC += element.bill;
    })
        
    //Ignore these lines of code
    //for (parent of james)
    //{if (typeof parent.bill === Number) { 
    // parent.forEach(element => {
    // sumBillEC += element.bill;
    //  })
    //} else if (typeof parent.bill === String) {
        // ...
    //}}
    htmlCalcEC += `<p>James has earned Big Brother Restaurant <b>$${sumBillEC}</br></p>`

    let sumTipEc = 0
    james.forEach(element => {
        sumTipEc  += element.bill * .2;
    })
    htmlCalcEC += `<p>James has earned <b>$${sumTipEc}</b> for that vaycay fund!</p>`

    for (let calc of james) {
        calc.tip += calc.bill * .2
    } 


    let htmlEmptyEC = ''
    let htmlWaiterEC = '<p class="waiterTitle">James Tables</p> <ul>'
    for (const waiter of james) {
        console.log(waiter)
        if (waiter.occupied === true && waiter.needsBooster === true) {
            htmlWaiterEC += `<li><b>Table</b> ${waiter.table}</li>`
            htmlWaiterEC += `<li>Drink: ${waiter.drinks}</li>`
            htmlWaiterEC += `<li>Food: ${waiter.food}</li>`
            htmlWaiterEC += `<li>Bill: $${waiter.bill}</li>`
            htmlWaiterEC += `<li><b>Table Needs a Booster Seat!</b></li>`
            htmlWaiterEC += `<li>Occupancy: ${waiter.occupancy}</li><br></br>`
        } else if (waiter.occupied === true) {
            htmlWaiterEC += `<li><b>Table</b> ${waiter.table}</li>`
            htmlWaiterEC += `<li>Drinks: ${waiter.drinks}</li>`
            htmlWaiterEC += `<li>Food: ${waiter.food}</li>`
            htmlWaiterEC += `<li>Bill: $${waiter.bill}</li>`
            htmlWaiterEC += `<li>Occupancy: ${waiter.occupancy}</li><br></br>`
        } else {
            htmlEmptyEC += `<p class="waiterTitle"><b>Table ${waiter.table}</b></p>`
            htmlEmptyEC += `<ul><li>Final Bill $${waiter.bill}</li>`
            htmlEmptyEC += `<li>Final Tip $${calc.tip}</li></ul><br></br>`
        }
        
    }
    htmlWaiterEC += '</ul>'
    htmlEmptyEC += '</ul>'
    
    document.getElementById('waiterec').innerHTML = htmlWaiterEC
    document.getElementById('emptyTables2').innerHTML =htmlEmptyEC
    document.getElementById('totals2').innerHTML = htmlCalcEC
}

ericaWaiterPage()
  