 const fabina =[
{
    id:1,
    table: 201,
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
    drinks:["water","coke","orange drink"],
    foodItems:["noodles","steak","pizza"],
    occupancy: 4,
    boosterSeat: false,
    bill: 510,
    tip:""
}






 ]
 console.log(fabina)

 let fabinaTip=0
 for(calc of fabina){
    fabinaTip+=calc.bill *.2
 }
 console.log(fabinaTip)