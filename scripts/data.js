
const tableData = [
    {
       id: 1,
       table: 708,
       food: ["Pizza", "Pasta", "Soup", "Hamburger", "Cake"],
       drinks: ["Beer", "wine", "water", "coke", "milk"],
       occupancy: 5,
       needsBooster: true,
       bill: 300,
       tip:"",
       occupied: true,
       waiterId: 2
   },
   {
       id: 2,
       table: 709,
       food: ["Cheese plate", "fruit", "tacos"],
       drinks: ["water"],
       occupancy: 3,
       needsBooster: false,
       bill: 125,
       tip:"",
       occupied: true,
       waiterId: 2  
   },
   {
       id: 3,
       table: 710,
       food: ["salad", "burrito", "the special", "steak"],
       drinks: ["hot toddy","mule","beer"],
       occupancy: 4,
       needsBooster: true,
       bill: 155,
       tip:"" ,
       occupied: true,
       waiterId: 2
   },
   {
    id: 4,
    table: 3,
    drinks: ["Crown and Coke", "Royle Flush", "Margarita Pitcher "],
    food: [
        "Chicken and Rice",
        "Rib-Tips",
        "Sampler- Platter",
        "Veggies",
        "Meatloaf",
    ],
    occupancy: 5,
    needsBooster: true,
    bill: 159,
    tip: "",
    occupied: true,
    waiterId: 3
 },
 {
    id: 5,
    table: 4,
    drinks: ["Lemonade", "Texas Tea", "Sweet Tea", "Lemonade Tea"],
    food: ["Chicken Strips", "Mac-n-Cheese", "Surf-n-Turf", "Pie"],
    occupancy: 4,
    needsBooster: true,
    bill: 159,
    tip: "",
    occupied: true,
    waiterId: 3
 },
 {
    id: 6,
    table: 5,
    drinks: ["Sprite", "Coke", "Orange Soda"],
    food: ["Peperoni Pizza"],
    occupancy: 4,
    needsBooster: false,
    bill: 340,
    tip: "",
    occupied: true,
   waiterId: 3
 },
 {
    id: 7,
    table: 6,
    drinks: ["Red Wine", "White Wine"],
    food: [
        "Medium-Well Rib-eye Steak and Grilled Shrimp",
        "Well-Done Rib-eye Steak and Potatoe",
    ],
    occupancy: 2,
    needsBooster: true,
    bill: 159,
    tip: "",
    occupied: true,
    waiterId: 3
 },
 {
    id: 8,
    table: 101,
    drinks: ["mojito", " beer", " coke"],
    food: ["steak", " chicken", " pot stickers"],
    occupancy: 4,
    needsBooster: false,
    bill: 460,
    tip: '',
    occupied: true,
    waiterId: 3
 },
 {
    id: 9,
    table: 102,
    drinks: ["sprite", " coke zero", " orange juice"],
    food: ["bread sticks", " ceasar salad", " chicken tenders", " large lobster"],
    occupancy: 3,
    needsBooster: true,
    bill: 265,
    tip: '',
    occupied: true,
    waiterId: 1
 },
 {
    id: 10,
    table: 103,
    drinks: ["dirty"],
    food: ["dirty"],
    occupancy: 0,
    needsBooster: false,
    bill: 0,
    tip: '',
    occupied: false,
    waiterId: 1
 },
 {
    id: 11,
    table: 104,
    drinks: ["dirty"],
    food: ["dirty"],
    occupancy: 0,
    needsBooster: false,
    bill: 590,
    tip: '',
    occupied: false,
    waiterId: 1
 },
 {
    id: 12,
    table: 201,
    drinks:["water","soda","beer"],
    food:["vegetable rice","green chicken","noodle soup"],
    occupancy: 6,
    needsBooster: true,
    bill: 510,
    tip:"",
    occupied: true,
    waiterId: 4
 },
 {
    id: 13,
    table: 202,
    drinks:["cold water","pepsi"],
    food:[" mix vegetable ","spicy chicken"," white soup"],
    occupancy: 6,
    needsBooster: true,
    bill: 370,
    tip:"",
    occupied: true,
    waiterId: 4
 },
 {
    id: 14,
    table: 203,
    drinks:["water","coke","orange drink"],
    food:["noodles","steak","pizza"],
    occupancy: 4,
    needsBooster: false,
    bill: 510,
    tip:"",
    occupied: true,
    waiterId: 4
 }
 ]

 const waiterData = [
{
   id:4,
   waiterName: 'fabina',
},

{

   id:1,
   waiterName: 'bart',
},

{

   id:3,
   waiterName: 'pepper',


   id:2,
   waiterName: 'james',

}

]

const waiterMatch =(match) => {
   for (let assign of waiterData) {

      if(match===1){
         return tableData.filter(assign => assign.waiterId === 1);
         
      }
      else if(match === 2){

         return tableData.filter(assign => assign.waiterId === 2);
      }
   
     else if(match === 3){

         return tableData.filter(assign =>assign.waiterId===3);

      }
      else if(match==4){

         return tableData.filter(assign =>assign.waiterId===4);
      }


   }
}
//export {tableData, waiterData, waiterMatch}
//console.log(waiterMatch(4))

 export const getTableData = () => {
    const copyOfTableData = tableData.map(data => ({...data}))
    return copyOfTableData
  }
 export const getWaiterData = () => {
    const copyOfWaiterData = waiterData.map(data => ({...data}))
    return copyOfWaiterData
  }










