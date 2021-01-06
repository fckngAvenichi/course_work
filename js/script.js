var cartList = document.getElementsByClassName('cartpopup__list')[0].getElementsByTagName('table')[0];
var totalSum = document.getElementById("cartpopup__total").getElementsByTagName('span')[0];

function addToCart(el) {
    /*
    console.log(document.getElementById(el).getElementsByClassName('showcase__input')[0].value);
    console.log(document.getElementById(el).getElementsByClassName('showcase__name')[0].innerHTML);
    console.log(document.getElementById(el).getElementsByClassName('price')[0].innerHTML);
    */
    
    //for (let a = 0; a < cartList.getElementsByClassName)

    let itemName = document.getElementById(el).getElementsByClassName('showcase__name')[0].innerHTML;
    let itemPrice = document.getElementById(el).getElementsByClassName('price')[0].innerHTML;
    let itemQuantity = document.getElementById(el).getElementsByClassName('showcase__input')[0].value;
    let price = parseInt(itemQuantity) * parseInt(itemPrice);
    let newRow = document.createElement('TR');
    let tdName = document.createElement('TD');
    let tdPrice = document.createElement('TD');
    let tdQuantity = document.createElement('TD');

    tdName.classList.add('name', el);
    let itemList = cartList.getElementsByClassName('name');
    


    for (let a = 0; a < itemList.length; a++) {
        if (itemList[a].className == 'name ' + el) {
            cartList.getElementsByClassName('name ' + el)[0].nextSibling.nextSibling.innerHTML = 
            parseInt(cartList.getElementsByClassName('name ' + el)[0].nextSibling.nextSibling.innerHTML) + parseInt(itemQuantity);
            totalSum.innerHTML = parseInt(totalSum.innerHTML) + price;
            cartList.getElementsByClassName('name ' + el)[0].nextSibling.innerHTML = 
            parseInt(cartList.getElementsByClassName('name ' + el)[0].nextSibling.innerHTML) + parseInt(itemQuantity) * parseInt(itemPrice);
            return;
        }
    }

    tdName.appendChild(document.createTextNode(itemName));
    tdPrice.appendChild(document.createTextNode(price));
    tdQuantity.appendChild(document.createTextNode(itemQuantity));

    newRow.appendChild(tdName);
    newRow.appendChild(tdPrice);
    newRow.appendChild(tdQuantity);

    totalSum.innerHTML = parseInt(totalSum.innerHTML) + price;

    cartList.appendChild(newRow);
}

var discountLabels = document.getElementsByClassName('label-discount');

for (let a = 0; a < discountLabels.length; a++) {
    let price = discountLabels[a].previousElementSibling.getElementsByClassName('price')[0];
    price.before(price.innerHTML + ' ⇀ ');
    price.innerHTML = Math.round(parseInt(price.innerHTML) - (parseInt(price.innerHTML) / 100 * 15));
}

var checkFumari = document.getElementById('sidebar_fumari');
var checkDarkside = document.getElementById('sidebar_darkside');
var checkDaily = document.getElementById('sidebar_daily');
var checkElement = document.getElementById('sidebar_element');
var checkBrusko = document.getElementById('sidebar_brusko');
var allFumari = document.getElementsByClassName('fumari');
var allDarkside = document.getElementsByClassName('darkside');
var allDaily = document.getElementsByClassName('daily');
var allElement = document.getElementsByClassName('element');
var allBrusko = document.getElementsByClassName('brusko');

checkFumari.addEventListener('change', function(event) {
    if (event.target.checked == true) {
        for (let a = 0; a < allFumari.length; a++) {
            allFumari[a].style.display = 'inline-flex';
        }
    } 
    else {
        for (let a = 0; a < allFumari.length; a++) {
            allFumari[a].style.display = 'none';
        }
    }
});

checkDaily.addEventListener('change', function(event) {
    if (event.target.checked == true) {
        for (let a = 0; a < allDaily.length; a++) {
            allDaily[a].style.display = 'inline-flex';
        }
    } 
    else {
        for (let a = 0; a < allDaily.length; a++) {
            allDaily[a].style.display = 'none';
        }
    }
});

checkElement.addEventListener('change', function(event) {
    if (event.target.checked == true) {
        for (let a = 0; a < allElement.length; a++) {
            allElement[a].style.display = 'inline-flex';
        }
    } 
    else {
        for (let a = 0; a < allElement.length; a++) {
            allElement[a].style.display = 'none';
        }
    }
});

checkDarkside.addEventListener('change', function(event) {
    if (event.target.checked == true) {
        for (let a = 0; a < allDarkside.length; a++) {
            allDarkside[a].style.display = 'inline-flex';
        }
    } 
    else {
        for (let a = 0; a < allDarkside.length; a++) {
            allDarkside[a].style.display = 'none';
        }
    }
});

checkBrusko.addEventListener('change', function(event) {
    if (event.target.checked == true) {
        for (let a = 0; a < allBrusko.length; a++) {
            allBrusko[a].style.display = 'inline-flex';
        }
    } 
    else {
        for (let a = 0; a < allBrusko.length; a++) {
            allBrusko[a].style.display = 'none';
        }
    }
});
