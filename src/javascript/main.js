import render from "./common";
import { productList } from "./data";
// selector đến element product
// khai báo hàm show product
function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(productList) || productList.length === 0) return [];

    // xử lý
    let result = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
							<div class="row ">
								<div class="productt">
									<a href=""><img src="./src/img/image ${product.img}.png" class="rounded-xl my-4" alt=""></a>
									<h2><a href="detail.html?id=${product.id}" class="text-rose-500 text-xl">${product.name}</a></h2>
									<div class="my-4 flex space-x-8">
										<span><img src="./src/img/20 .png" alt=""></span>
										<h3 class="pl-1">30 Minutes</h3>
										<span><img src="./src/img/21.png" class="pl-5" alt=""></span>
										<h3 class="pl-1">Snack</h3>
									</div>
								</div>
							</div>              
        `;
    }
    // return
    return result;
}

render("product", showProducts(productList));