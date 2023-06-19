
console.log('local', localStorage.getItem('infoDetail'));
var info = JSON.parse(localStorage.getItem('infoDetail'));
document.getElementById('img-main').src = info.img;
document.getElementsByClassName('img-detail-sub')[0].children[0].src = info.img;
document.getElementsByClassName('text-detail')[0].children[0].innerHTML = info.name + ' 131.58.29.20.55.001 Watch 29mm';
document.getElementsByClassName('text-detail')[0].children[3].innerHTML = `
<p>
                        Mã sản phẩm <br>
                        Giá đang khuyễn mãi <br>
                        GIá cũ <br>
                        Tiết kiệm được <br>
                        Trả góp <br>
                        Xuất xứ hàng hóa <br>
                        Tình trạng <br>
                    </p>
                    <p>: 101605 <br>
                        : <span> ${info.price}đ </span> <br>
                        : ${info.price}đ <br>
                        : 0đ <br>
                        : ≈  ${info.price}VNĐ x 3 kỳ <br>
                        : Sản phẩm nhập khẩu chính hãng <br>
                        : còn hàng <br>
                    </p>`;
function next() {
    var slide = document.getElementsByClassName('rating-customer')[0].children;
    for(let i=0;i<document.getElementsByClassName('rating-customer')[0].children.length;i++){
        document.getElementsByClassName('rating-customer')[0].children[i].style.animation = "";
    }
    setTimeout(function () {
        for(let i=0;i<document.getElementsByClassName('rating-customer')[0].children.length;i++){
            document.getElementsByClassName('rating-customer')[0].children[i].style.animation = "move-img-next 0.5s ease-in-out 1 forwards";
        }
        document.getElementsByClassName('rating-customer')[0].appendChild(slide[0]);
    }, 200);
}
function pre() {
    var slide = document.getElementsByClassName('rating-customer')[0].children;
    for(let i=0;i<document.getElementsByClassName('rating-customer')[0].children.length;i++){
        document.getElementsByClassName('rating-customer')[0].children[i].style.animation = "";
    }    
    setTimeout(function () {
        for(let i=0;i<document.getElementsByClassName('rating-customer')[0].children.length;i++){
            document.getElementsByClassName('rating-customer')[0].children[i].style.animation = "move-img-pre 0.5s ease-in-out 1 forwards";
        }
        document.getElementsByClassName('rating-customer')[0].prepend(slide[slide.length - 1]);
    }, 200);
}