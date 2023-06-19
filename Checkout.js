var infoCheckout = JSON.parse(localStorage.getItem('infoCheckout'));
document.getElementsByClassName('summary-checkout-product')[0].innerHTML = '';
document.getElementsByClassName('summary-checkout-product')[0].innerHTML = `
<div class="checkout-product">
                        <img src=${infoCheckout.img} alt="">
                        <div class="info-checkout-product">
                            <h1>${infoCheckout.name}</h1>
                            <p>Mã sản phẩm: 101605</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                        </div>
                        <h1 class="checkout-price">Giá: ${infoCheckout.price}</h1>
                    </div>
`;
var ele = document.getElementsByClassName('fee-checkout')[0].children;
ele[1].innerHTML = infoCheckout.price;
ele[9].innerHTML = infoCheckout.price;