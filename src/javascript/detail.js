import renders from "./commonn";
import { productList } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
console.log("id", id);
const product = productList.find((item) => item.id === id);
console.log("product", product);
const result = `
<div class="row  md:text-left md:w-[406px]">
                    <div class="column-2 font-bold text-5xl leading-normal">
                        <p class="text-xl md:text-4xl">Big and Juicy Wagyu Beef Cheeseburger</p>
                        <br>
                        <p class="text-rose-500 md:text-3xl">$30</p>
                    </div>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <input type="text" class="inp-ent border-black p-4" placeholder="Enter your delivery location"
                        name="" id="">
                    <button type="submit" class="m-4 p-4 bg-black text-white my-4 rounded-md">Add to cart</button>
                </div>
                <div class="row">
                    <img src="./src/img/image 26.png" class="h-3/4 max-w-full md:my-0 md:w-full text-center" alt="">
                </div>
`;
renders("product-detail", result);