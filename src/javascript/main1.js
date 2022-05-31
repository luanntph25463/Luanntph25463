const myName = "Nguyễn Thành Luân";
const myAge = 30;
const myStatus = true;
const myChildren = ["Kien","Tung","lam"];

const productList =[
    {id:36,name:"breafast", price:200},
    {id:37,name:"vegan", price:300},
    {id:38,name:"Meat", price:400},
    {id:39,name:"Dessert", price:500},
    {id:40,name:"Lunch", price:200},
    {id:41,name:"Chocolate", price:200},
];
let result = "";
for (let i = 0; i < productList.length; i++) {
    const item = productList[i];
    result +=`<div class = "row">
            <img src ="img/${item.id}.png" alt="">
            <h2 style 'color:red'>${item.name}</h2>
    </div>`;
}
document.querySelector("#app").innerHTML = result;

const productLists =[
    {ids:26,name:"Big and Juicy wagyu Beef Cheeseburger", minetus:200,category:"snack"},
    {ids:27,name:"Fresh Lime Roasted Salom", minetus: 300,category:"Fish"},
    {ids:28,name:"The Best Easy one Pot Chicken and Rice", minetus: 400,category:"vegateble"},
    {ids:29,name:"Fresh and Healthy Mixed Mayonnaise", minetus:500,category:"sweet"},
    {ids:30,name:"The Creaiest Creamy Chicken", minetus:200,category:"snack"},
    {ids:31,name:"Fruity Pancake with Orange & Blueberry", minetus:200,category:"snack"},

];
let results = "";
for (let i = 0; i < productList.length; i++) {
    const items = productLists[i];
    results += `<div class="row">
    <img src="img/image ${items.ids}.png" alt="">
    <h2 style='color:red'>${items.names}</h2>
    <div class="col">
                      <span><img src="img/20.png" alt=""></span> <h3>${items.minutes} Minutes</h3>     <span><img src="img/21.png" alt=""></span>      <h3>${items.category}</h3>                           
                         
                  </div>
</div>`;
}
document.querySelector("#apps").innerHTML = results;