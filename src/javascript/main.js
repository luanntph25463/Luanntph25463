import "../css/style.css";

document.querySelector("#app").innerHTML = `
<h1 class="text-3xl font-bold underline">
Hello world!
</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const myName = "Lê Trọng Đạt";
const myAge = 30;
const myStatus = true;
const myChildren = ["Kien", "Tung", "Lam"]; // myChildren[2] ~ Lam
/*
    selector:
        - Sử dụng querySelector(css selector) hoặc getElementById('id element');
    template string:
        - sử dụng backstick ~ dấu huyền để bao chuỗi
*/

// ví dụ 1
// const myInfo = {
//     name: "Dat",
//     age: 30,
//     status: true,
//     fullName: "Le Trong Dat",
//     "Ho va Ten": "Le Trong Dat"
// };

// document.querySelector("#app").innerHTML = `
// <h1>Xin chao toi ten la ${myInfo.name}, nam nay toi ${myInfo.age} tuoi.
//     Tinh trang: ${myInfo.status ? "Da ket hon" : "Chua ket hon"}
// </h1>`;

// ví dụ 2
const productList = [
    { id: 36, name: "Breakfast", price: 200 },
    { id: 37, name: "vegan", price: 300 },
    { id: 38, name: "Meat", price: 400 },
    { id: 39, name: "Dessert", price: 500 },
    { id: 40, name: "Lunch", price: 200 },
    { id: 41, name: "Chocolate", price: 200 },

];

let result = "";

for (let i = 0; i < productList.length; i++) {
    const item = productList[i];
    result += `<div class="row">
                <img src="img/${item.id}.png" alt="">
                <h2 style='color:red'>${item.name}</h2>
            </div>`;
}

document.querySelector("#app").innerHTML = result;

const productLists = [
    {
        ids: 26, names: "Big and Juicy Wagyu Beef Cheeseburger", minutes: 200, category: "snack",
    },
    {
        ids: 27, names: "Fresh Lime Roasted Salmon", minutes: 300, category: "fish",
    },
    {
        ids: 28, names: "The Best Easy One Pot Chicken and Rice", minutes: 400, category: "vegateble",
    },
    {
        ids: 29, names: "Fresh and Healthy Mixed Mayonnaise ", minutes: 500, category: "sweet",
    },
    {
        ids: 30, names: "The Creamiest Creamy Chicken", minutes: 200, category: "snack",
    },
    {
        ids: 31, names: "Fruity Pancake with Orange & Blueberry", minutes: 200, category: "snack",
    },

];

let results = "";

for (let i = 0; i < productLists.length; i++) {
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