import { render } from './common';
import { productList, works, detail } from './data';
// selector đến element product
// khai báo hàm show product
function showProducts(products) {
  // kiểm tra
  if (!Array.isArray(productList) || productList.length === 0) return [];

  // xử lý
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result += `
        <div class="row ">
            <div class="productt">
                <a href="detail.html?id=${product.id}"><img src="${product.img}" class="rounded-xl my-4" alt=""></a>
                <h2><a href="detail.html?id=${product.id}" class="text-rose-500 text-xl">${product.name}</a></h2>
                <div class="my-4 flex space-x-8">
                    <span><img src="https://res.cloudinary.com/kh-ng-cc/image/upload/v1654929277/20_strbad.png" alt=""></span>
                    <h3 class="pl-1">30 Minutes</h3>
                    <span><img src="https://res.cloudinary.com/kh-ng-cc/image/upload/v1654929276/21_bgcijw.png" alt=""></span>
                    <h3 class="pl-1">Snack</h3>
                </div>
            </div>
        </div>              
        `;
  }
  // return
  return result;
}

render('product', showProducts(productList));

function showProduct(products) {
  // kiểm tra
  if (!Array.isArray(works) || works.length === 0) return [];

  // xử lý
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < products.length; i++) {
    const productz = products[i];
    result += `<div class="row">
        <img src="${productz.img}" alt="">
        <p>${productz.name}</p>
    </div>`;
  }
  // return
  return result;
}

render('products', showProduct(works));

function showProductm(productn) {
  // kiểm tra
  if (!Array.isArray(detail) || detail.length === 0) return [];

  // xử lý
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < productn.length; i++) {
    const productb = productn[i];
    result += `<div class="row">
    <div class="productt">
        <img src="${productb.img}" class="rounded-xl my-4" alt="">
        <h2><a href="" class="text-xl">${productb.name}</a></h2>
        <div class="my-4 flex">
            <br>
            <p class="text-rose-500">$30</p>
        </div>
        <div class="text-center">
            <button type="submit"
                class=" max-w-full py-3 border md:w-full bg-black text-white rounded-mdmy-4 p-4 bg-black text-white my-4 w-50 rounded-md">Add
                to card</button>
        </div>
    </div>
</div>`;
  }
  // return
  return result;
}

render('detail', showProductm(detail));
