//Lấy thông tin chi tiết
function getInfoDetail(a){
    var img_main=a.parentElement.parentElement.parentElement.children[0].children[0].src;
    var name=a.parentElement.parentElement.parentElement.parentElement.children[1].children[0].innerHTML;
    
    var price=a.parentElement.parentElement.parentElement.parentElement.children[1].children[2].innerHTML;
    console.log(price);
    var infoDetail={img:img_main,name:name,price:price,quantity:1};
    console.log('mảng: ',infoDetail);
    var info=JSON.stringify(infoDetail);
    console.log(info);
    localStorage.removeItem('infoDetail');
    localStorage.setItem('infoDetail',info);
}
// Lấy thông tin Giỏ hàng
function getInfoCart(a){
    var cart=JSON.parse(localStorage.getItem("infoCarts"));
    if(cart!=null){
        var gh=cart;
        console.log('đúng');
    }else{
        var gh=[];
        console.log('sai');
    }
    var img_main=a.parentElement.parentElement.parentElement.children[0].children[0].src;
    var name=a.parentElement.parentElement.parentElement.parentElement.children[1].children[0].innerHTML;
    var price=a.parentElement.parentElement.parentElement.parentElement.children[1].children[2].innerHTML;
    var infoCart={img:img_main,name:name,price:price, quantity:1};
    var kt=true;
    for(let i=0;i<gh.length;i++){
        if(infoCart.img==gh[i].img){
            gh[i].quantity++;
            kt=false;
            break;
        }
    }
    if(kt==true){
        gh.push(infoCart);
    }
    var infoCarts=JSON.stringify(gh);
    localStorage.setItem("infoCarts",infoCarts);
}
function getInfoCartInDetail(){
    var cart=JSON.parse(localStorage.getItem("infoCarts"));
    if(cart!=null){
        var gh=cart;
        console.log('đúng');
    }else{
        var gh=[];
        console.log('sai');
    }
    var infoDetail=JSON.parse(localStorage.getItem('infoDetail'));
    var kt=true;
    for(let i=0;i<gh.length;i++){
        if(infoDetail.img==gh[i].img){
            gh[i].quantity++;
            kt=false;
            break;
        }
    }
    if(kt==true){
        gh.push(infoDetail);
    }
    var infoCarts=JSON.stringify(gh);
    localStorage.setItem("infoCarts",infoCarts);
}
console.log(JSON.parse(localStorage.getItem('infoDetail')));
