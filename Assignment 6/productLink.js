import { tshirt } from "./Tshirt";

const divTshirtsEle = document.querySelector('#tshirt');
console.log(divTshirtsEle);

const divTshirtEle = document.createElement('div');
divTshirtEle.setAttribute('id', tshirt.tshirtId);
console.log(divTshirtEle);

const pTshirtId = document.createElement('p');
pTshirtId.textContent = 'Id: ' + tshirt.tshirtId;
divTshirtEle.appendChild(pTshirtId);
console.log(divTshirtEle);


const ptshirtDesc = document.createElement('p');
ptshirtDesc.textContent = 'Description ' + tshirt.tshirtDesc;
divTshirtEle.appendChild(ptshirtDesc);
console.log(divTshirtEle);

const pTshirtStock = document.createElement('p')
pTshirtStock.textContent = 'T-shirt Stock: ' + tshirt.tshirtStock;
divTshirtEle.appendChild(pTshirtStock);
console.log(divTshirtEle);

const ptshirtPrice = document.createElement('p');
ptshirtPrice.textContent = 'Price :' + tshirt.tshirtPrice + ' Baht.';
divTshirtEle.appendChild(ptshirtPrice);
console.log(divTshirtEle);