console.log('--------------', localStorage.getItem('infoCarts'));
var carts = JSON.parse(localStorage.getItem('infoCarts'));
document.getElementsByClassName('cart-products')[0].innerHTML = '';
console.log(carts.length);
console.log(carts[0].price);
for (let i = 0; i < carts.length; i++) {
    document.getElementsByClassName('cart-products')[0].innerHTML += `
    <div onclick='getInfoCheckout(this)' class="cart-product">
                        <img src=${carts[i].img} alt="">
                        <div class="info-cart-product">
                            <h1>${carts[i].name}</h1>
                            <p>Mã sản phẩm: ${Number(101605)+i}</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                        </div>
                        <div class="control-cart">
                            <h1>Giá: ${carts[i].price}</h1>
                            <div class="icon-cart">
                                <i onclick='minus(this)' class="fas fa-minus"></i>
                                <h1 class="quantity">${carts[i].quantity}</h1>
                                <i onclick='plus(this)' class="fas fa-plus"></i>
                                <i onclick='remove(this)' class="trash far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
    `;
}
function remove(a){
    var element=a.parentElement.parentElement.parentElement;
    for(i=0;i<carts.length;i++){
        if(carts[i].img==element.children[0].src){
            carts.splice(i,1);
        }
    }
    var infoCarts=JSON.stringify(carts);
    localStorage.setItem('infoCarts',infoCarts);
    element.parentElement.removeChild(element);
}
function minus(a){
    var element=a.parentElement.parentElement.parentElement;
    var elementMi=a.parentElement.children[1];
    for(i=0;i<carts.length;i++){
        if(carts[i].img==element.children[0].src){
            carts[i].quantity--;
            if(carts[i].quantity>0){
                elementMi.innerHTML=carts[i].quantity;
            }else{
                element.parentElement.removeChild(element);
                carts.splice(i,1);
            }
        }
    }
    var infoCarts=JSON.stringify(carts);
    localStorage.setItem('infoCarts',infoCarts);
}
function plus(a){
    var element=a.parentElement.parentElement.parentElement;
    var elementMi=a.parentElement.children[1];
    for(i=0;i<carts.length;i++){
        if(carts[i].img==element.children[0].src){
            carts[i].quantity++;
            elementMi.innerHTML=carts[i].quantity;
        }
    }
    var infoCarts=JSON.stringify(carts);
    localStorage.setItem('infoCarts',infoCarts);
}
function getInfoCheckout(a){
    for(let i=0;i<carts.length;i++){
        if(carts[i].img==a.children[0].src){
            var ele=document.getElementsByClassName('fee-cart')[0].children;
            ele[1].innerHTML=carts[i].price;
            ele[9].innerHTML=carts[i].price;
            localStorage.setItem('infoCheckout',JSON.stringify(carts[i]));
        }
    }
}
