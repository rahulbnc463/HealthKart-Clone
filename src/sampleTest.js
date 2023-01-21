
 let BrushesData = [
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        name: "BLEND TREND EYESHADOW BRUSH - 043 ROUND Xl",
        price: 399,
        rating: "4.8(414)",
        strike: '',
    },

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        name: "Blend Trend Dual Face Brush - 075 Powder + … ",
        price: 599,
        rating: "4.5(141)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        name: "Blend Trend Face Brush - 003 Cont…",
        price: 399,
        rating: "4.5(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        name: "Blend Trend Foundation Brush - 052…",
        price: 399,
        rating: "4.8(41)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        name: "Blend Trend Eyeshadow Brush - 042…",
        price: 499,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
        name: "Blend Trend Eyeshadow Brush - 042… ",
        price: 649,
        rating: "4.7(54)",
        strike: 'RS.799',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        name: "Blend Trend Eyeshadow Brush - 042… ",
        price: 399,
        rating: "4.5(421)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        name: "Blend Trend Face Brush - 006 Highl…",
        price: 399,
        rating: "4.8(197)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
        name: "Blend Trend Face Brush - 001 Blush",
        price: 399,
        rating: "4.9(137)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        name: "Blend Trend Eyeshadow Brush - 041…",
        price: 399,
        rating: "4.5(121)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        name: "Blend Trend Dual Eyeshadow Brush…",
        price: 599,
        rating: "4.6(124)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        name: "Blend Trend Dual Eyeshadow Brush…",
        price: 599,
        rating: "4.8(201)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-051Flat.jpg?v=1627573670",
        name: "Blend Trend Foundation Brush - 051…",
        price: 399,
        rating: "4.6(137)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-002Concealer.jpg?v=1627659990",
        name: "Blend Trend Face Brush - 002 Conc… ",
        price: 399,
        rating: "4.8(27)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo1-WBGimages.jpg?v=1630683801",
        name: "Beginners Essential Combo 1",
        price: 999,
        rating: "4.5(421)",
        strike: 'RS.1199',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo2-WBGimages.jpg?v=1630683812",
        name: "Beginners Essential Combo 2",
        price: 799,
        rating: "4.5(421)",
        strike: 'RS.999',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
        name: "Face Essentials Combo",
        price: 1499,
        rating: "4.5(421)",
        strike: 'RS.1799',
    },
    
];


localStorage.setItem("cart", JSON.stringify(BrushesData));

BrushesData.map(function (elem) {

    var box = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement("div");
    var rating_wrapper = document.createElement("div");
    var price_wrapper = document.createElement("div");

    var shade = document.createElement("p");
    shade.textContent = elem.shade;

    var img_shade = document.createElement("img");
    img_shade.src = elem.shade_image;

    var img = document.createElement("img");
    img.src = elem.image_link;
    img.classList.add("main-img");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("s");
    strike.innerText = elem.strike;

    var rating = document.createElement("span");
    rating.innerText = elem.rating;

    var star_icon = document.createElement("span");
    star_icon.innerHTML += '<i class="fa fa-star" aria-hidden="true"></i>'

    var heart_icon = document.createElement("span");
    heart_icon.innerHTML += '<i class="fa-regular fa-heart"></i>'
    
    heart_icon.addEventListener("click", function () {
        wishList(elem);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });
    box.addEventListener("click",()=>{
        ProductPage(elem);
        window.location.href = "product.html"
    })
    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});
 
var cartArray= JSON.parse(localStorage.getItem("cartItem")) || [];
 function addToCart(elem){
    cartArray.push(elem);
    
    alert("item added to cart")

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem){
    cartwish.push(elem);
    alert("item added to wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
 }
 
 function ProductPage(elem){
     localStorage.setItem("ProductPage",JSON.stringify(elem))
 }






// import {navbar,fotter} from "../Components/navbar.js";

// document.getElementById("navbar").innerHTML = navbar();
// document.getElementById("footer").innerHTML = fotter();

// let arr = [
//     {
//         img:'https://cdn.shopify.com/s/files/1/0906/2558/products/1_bf362c65-33b1-46ad-97d8-b94a35870aeb.jpg?v=1645631016',
//         title:'Matte Attack Transferproof Lipstick',
//         item_detail:'01 Boldplay (Cardinal Pink)',
//         qty:1,
//         price:699,
//     },
//     {
//         img:'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-minis-lipstick-01-scarlett-o-hara-28219914354771_39239823-2ed8-4b8d-b0db-48c857ae0e3f.jpg?v=1642070562',
//         title:'Matte as Hell Crayon Mini',
//         item_detail:'Lipstick - 01 Scarlett O',
//         qty:1,
//         price:199,
//     }
// ]

// localStorage.setItem('cartItems', JSON.stringify(arr));
import {payment} from "../Scripts/payment.js";
let paymentPage = payment();

let array = JSON.parse(localStorage.getItem('cartItems')) || [];
console.log(array)
let totalPrice=0;
let subTotal = 0;
const displayCartList = (array) => {
    let cartOrder_cartData = document.querySelector('.cartOrder_cartData');
    let subTotalPayment = document.querySelector('#subTotalPayment');
    cartOrder_cartData.innerHTML = null;
    let totalPriceHTML = document.querySelector('#totalPrice');
    let finalAmt = document.querySelector('#finalAmt');
    array.forEach((element, index) => {
        subTotal = 0;
        for(var i=0; i<array.length; i++){
            subTotal+=array[i].qty * array[i].price;
            console.log(array[i].qty * array[i].price);
        }
        totalPriceHTML.innerText = subTotal.toFixed(2);
        subTotalPayment.innerText = subTotal.toFixed(2);
        finalAmt.innerText = subTotal.toFixed(2);
        totalPrice=0;
        totalPrice = element.qty * element.price;
        let card = document.createElement('div');
        card.setAttribute('class','cartData_card');
        let imgleftcardDiv = document.createElement('div');
        imgleftcardDiv.setAttribute('class', 'imgLeftCard');
        let imgleftcardImg = document.createElement('img');
        imgleftcardImg.src = element.img;
        let imgLeftCard_title = document.createElement('div');
        imgLeftCard_title.setAttribute('class','imgLeftCard_title');
        let pTitle = document.createElement('p');
        pTitle.setAttribute('class', 'titleHead_card card_head_title');
        pTitle.textContent = element.title;
        let pContent = document.createElement('p');
        pContent.setAttribute('class','titleHead_card card_head_content');
        pContent.textContent = element.item_detail;
        imgLeftCard_title.append(pTitle,pContent);
        imgleftcardDiv.append(imgleftcardImg,imgLeftCard_title);

        let controlRigthCard = document.createElement('div');
        controlRigthCard.setAttribute('class', 'controlRigthCard');
        let controlDeletCart = document.createElement('div');
        controlDeletCart.setAttribute('class','controlDeletCart');
        controlDeletCart.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        controlDeletCart.addEventListener('click', ()=>{
            deleteCartItem(index);
           
        })
        let controlPlusMinusCart = document.createElement('div');
        controlPlusMinusCart.setAttribute('class','controlPlusMinusCart');
        let controlMinus = document.createElement('div');
        controlMinus.setAttribute('class','controlMinus');
        controlMinus.textContent = '-';
        controlMinus.addEventListener('click', ()=>{
            itemDecrese(index,controlValue,spanQty,itemTotal);
        })
        let controlValue = document.createElement('div');
        controlValue.setAttribute('class','controlValue');
        controlValue.innerText = element.qty;
        let controlPlus = document.createElement('div');
        controlPlus.setAttribute('class','controlPlus');
        controlPlus.innerText = '+';
        controlPlus.addEventListener('click', ()=>{
            itemIncrese(index,controlValue,spanQty,itemTotal);
        })
        controlPlusMinusCart.append(controlMinus,controlValue,controlPlus);

        let controlAmountCart = document.createElement('div');
        controlAmountCart.setAttribute('class','controlAmountCart');
        let spanQty = document.createElement('span');
        spanQty.setAttribute('id','num');
        spanQty.innerText = element.qty;
        let itemPrice = document.createElement('span');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = element.price;
        let itemTotal = document.createElement('span');
        itemTotal.setAttribute('id','itemTotal');
        itemTotal.innerText = totalPrice;
        controlAmountCart.append(spanQty,'x',itemPrice,'=',itemTotal)
        controlRigthCard.append(controlDeletCart,controlPlusMinusCart,controlAmountCart);
        card.append(imgleftcardDiv,controlRigthCard)
        cartOrder_cartData.append(card);
    });
}
const displayNone = () => {
    if(array.length===0){
        document.querySelector('.cartMainCard').style.display = 'none';
        document.querySelector('.emptyCartDiv').style.display = 'block';
    }
}
if(array.length===0){
    document.querySelector('.cartMainCard').style.display = 'none';
    document.querySelector('.emptyCartDiv').style.display = 'block';
}
else{
    document.querySelector('.cartMainCard').style.display = 'flex';
    document.querySelector('.emptyCartDiv').style.display = 'none';
    displayCartList(array);
}

const deleteCartItem = (index) => {
    // console.log('delete button perform',index);
    let text = "Remove Selected Item.";
    if (confirm(text) == true) {
        console.log("You pressed OK!");
        array.splice(index,1);
        console.log(array);
        displayCartList(array);
        displayNone();
        localStorage.setItem('cartItems', JSON.stringify(array))

    } 
    else {
        console.log("You canceled!");
    }
    window.location.reload()
}

const itemDecrese = (index,controlValue,spanQty,itemTotal) => {
    
    if(array[index].qty > 1){
        console.log('- button',index);
        array[index].qty = array[index].qty-1;
        // console.log(array);
        localStorage.setItem('cartItems', JSON.stringify(array))
        controlValue.innerText = array[index].qty;
        spanQty.innerText = array[index].qty;
        itemTotal.innerText = array[index].qty * array[index].price;
        let totalPriceHTML = document.querySelector('#totalPrice');
        let subTotalPayment = document.querySelector('#subTotalPayment');
        let finalAmt = document.querySelector('#finalAmt');
        subTotal = 0;
        for(var i=0; i<array.length; i++){
            subTotal+=array[i].qty * array[i].price;
            console.log(array[i].qty * array[i].price);
        }
        console.log('subTotal:', subTotal)
        totalPriceHTML.innerText = subTotal.toFixed(2);
        subTotalPayment.innerText = subTotal.toFixed(2);
        finalAmt.innerText = subTotal.toFixed(2);
    }
    else{
        let text = "Remove Selected Item.";
        if (confirm(text) == true) {
            console.log("You pressed OK!");
            array.splice(index,1);
            console.log(array);
            displayCartList(array);
            displayNone();
            localStorage.setItem('cartItems', JSON.stringify(array));
           
        } 
        else {
            console.log("You canceled!");
        }
    }
    
}
const itemIncrese = (index,controlValue,spanQty,itemTotal) => {
    console.log('+ button',index);
    array[index].qty = array[index].qty+1;
    // console.log(array);
    localStorage.setItem('cartItems', JSON.stringify(array))
    controlValue.innerText = array[index].qty;
    spanQty.innerText = array[index].qty;
    itemTotal.innerText = array[index].qty * array[index].price;
    let totalPriceHTML = document.querySelector('#totalPrice');
    let subTotalPayment = document.querySelector('#subTotalPayment');
    let finalAmt = document.querySelector('#finalAmt');
    subTotal = 0;
    for(var i=0; i<array.length; i++){
        subTotal+=array[i].qty * array[i].price;
        console.log(array[i].qty * array[i].price);
    }
    console.log('subTotal:', subTotal)
    totalPriceHTML.innerText = subTotal.toFixed(2);
    subTotalPayment.innerText = subTotal.toFixed(2);
    finalAmt.innerText = subTotal.toFixed(2);
}



document.querySelector(".deliveryInfo_btn").addEventListener("click",()=>{
    let cartPriceOffer = document.querySelector(".cartPriceOffer ");
    
    document.querySelector(".priceContainer").innerHTML = paymentPage;
    paymentinfo()
    
})

 function paymentinfo(){
document.getElementById("upi").addEventListener("click",()=>{
    let paydrop = document.querySelector(".paydrop");
    paydrop.style.display = "block" 
    let upi = document.getElementById("upi");
    upi.style.border = "none"
    upi.style.backgroundColor = 'white'
 })
 document.getElementById("debitcard").addEventListener("click",()=>{
    let paydrop = document.getElementById("dropdebit");
    
    paydrop.style.display = "block" 
    let debitborder = document.getElementById("debitcard");
    debitborder.style.border = "none";
    debitborder.style.backgroundColor = "white"
 })
 document.getElementById("cash").addEventListener("click",()=>{
    let paydrop = document.getElementById("cashdrop");
    
    paydrop.style.display = "block" 
    let debitborder = document.getElementById("cash");
    debitborder.style.border = "none";
    debitborder.style.backgroundColor = "white"
 })

 document.querySelector(".PaymentInfo_btn").addEventListener("click",()=>{
     window.location.href = "succesfull.html"
 })
}


import {navbar,fotter} from "../Components/navbar.js";


let ProducData = JSON.parse(localStorage.getItem("cartItems"))||[];


document.getElementById("navbar").innerHTML = navbar(ProducData.length);

console.log(ProducData.length)
if(ProducData.length>0){
    let cart_count = document.getElementById("counter");
    cart_count.style.display = "block"
}


document.getElementById("footer").innerHTML = fotter()
import {signinpage,infopage} from "../Components/signinpage.js"
document.getElementById("signappend").innerHTML = signinpage();
let info = infopage();

let navlogin = document.getElementById("navlogin");

navlogin.addEventListener("click",()=>{
    let login = document.getElementById("signappend");
    login.style.display = "block";
    login.style.overflowY
    
 
 })

 let close = document.getElementById("close");
close.addEventListener("click",()=>{
    let login = document.getElementById("signappend");
    login.style.transform="translateX(710px)";   
    login.style.transition="2s";  
})

$(".enterotp").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.enterotp').focus();
    }
});
$(".loginput1").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.loginput1').focus();
    }
});

let reqotp = document.getElementById("requestptp");

reqotp.addEventListener("click",()=>{
    setTimeout(()=>{
        alert("5578 is Your OTP to login to Your SUGAR App.")
    },2000)
})

let varifyotp = document.getElementById("verify");

varifyotp.addEventListener("click",()=>{
    let otp1 = document.querySelector(".enterotp1").value;
    let otp2 = document.querySelector(".enterotp2").value;
    let otp3 = document.querySelector(".enterotp3").value;
    let otp4 = document.querySelector(".enterotp4").value;
    let otp = otp1+otp2+otp3+otp4;
    console.log(otp)
   let wrong =  document.getElementById("incorrect");
   if(otp!="5578" && wrong.length!==0){
       wrong.innerText = "Incorrect OTP! Please try again."
       wrong.style.color = "red"
       
   }
   else{
      
       document.getElementById("loginbox").innerHTML=info;
       userName();
   }
})
var obj = JSON.parse(localStorage.getItem("userDetails"))||{};
function userName(){
    let savebtn = document.getElementById("savebtn");
    savebtn.addEventListener("click",()=>{
    let username = document.getElementById("username").value;
    let lastname = document.getElementById("userlastname").value;
    obj = {username,lastname};
    localStorage.setItem("userDetails",JSON.stringify(obj));
    window.location.href = "index.html"
    
   })  
}
     localStorage.setItem("userDetails",JSON.stringify(obj));
  
    let userInfo = JSON.parse(localStorage.getItem("userDetails"));
    //console.log("obj",Object.keys(userInfo).length)
  if(Object.keys(userInfo).length>0){
    let changename = document.getElementById("changename");
    changename.innerText = "Hi,"+userInfo.username+" "+userInfo.lastname+" " ;
    let changebox = document.getElementById("navlogin");
    
    changebox.style.backgroundColor = "lightgrey";
    changebox.style.height = "30px";
    changebox.style.padding = "5px";
  }
// search functionallity

let search = document.getElementById("nav_btn");
search.addEventListener("click",()=>{
    let searchData = document.getElementById("search").value;
    console.log(searchData)
    if(searchData=="skincare"){
        window.location.href = "skincare.html"
    }
    if(searchData=="brush"){
        window.location.href = "Brush.html"
    }
    if(searchData=="eyebrush"){
        window.location.href = "eyebrush.html"
    }
    if(searchData=="facebrush"){
        window.location.href = "facebrush.html"
    }
    if(searchData=="lipstick"){
        window.location.href = "lips.html"
    }
    if(searchData=="eye"){
        window.location.href = "eye.html"
    }

})




//  import {navbar,fotter} from "../Components/navbar.js";
 
//  document.getElementById("navbar").innerHTML=navbar();
//  document.getElementById("footer").innerHTML=fotter();


let url =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_category%20%20Blush&Eye`;

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    //console.log(res);
    append(res);
}).catch(function(err){
    console.log(err);
})

var container=document.getElementById("container");

function append(data){
  container.innerHTML=null;
   data.forEach(function(el){

    let div=document.createElement("div");
    div.setAttribute("id","box")

  

   let div2 =document.createElement("div");
    

    let img =document.createElement("img");
    img.src=el.image_link;
    img.setAttribute("id","img1")

    let img2=document.createElement("img");
    img2.setAttribute("id","icon")
    img2.src="https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png";



    let icon_div=document.createElement("div");
    let span =document.createElement("span")
    span.innerText=Math.floor(Math.random()*50);
    span.setAttribute("id","rating");

    icon_div.append(span,img2);

    let name1=document.createElement("h4");
    name1.innerText=el.name;

    let price=document.createElement("p");
    price.innerText=`Rs. ${el.price}`;
    price.style="margin-top:-15px;"

    let bot_div=document.createElement("div");
    bot_div.setAttribute("id","bot_div");
    

    let heart=document.createElement("img");
    heart.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAiAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIGBAMFB//EADcQAAEDAwIEAggFBAMBAAAAAAEAAgMEBREGEiExQVETFBUWIlJhcYGhB0JikbElMkOSVHLCJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xVXHHzUuOFUDPEoLjkiIgIiq5BOfgVKqFZAREQFXOXYHJQXZOArNaAglERAUZUqvdBIOVKgBEAjKlEQEXnNNHBE+WZ7Y442lz3uOA1o5knoFk47ledVndYJBbLMeVykZumqR3hjcMBv63c+g6oNXPUQ07N9RLHEz3nuDR918o6u0yJfCOorR4mduzz0Wc9sblyU2hrCyXx62ldc6rrUXKR1Q76B3BvyAC+p6CtGzZ6KoNnu+WZj+EHZBPFUM3wSslZ7zHBw+y9VmKnQlifIZ7fTvtNXxxUWyU07ge5DfZdy5OBXKbxddLSsi1Q9tba3v2svEUYYYSeQqGDgB03t4dwEGxRV3t27sjbjOemFkRebrqmV8Wl5G0drY4sfeJWB5mxzFOw8CB77uHYFBqppoaZhknljiZ7z3Bo+6+X63aaEvhesVo8TO3Z56LOe2Ny46XQtiZKKi4U8l1q+Gai5SGd2fgHey35NAC+t6DtGzZ6KoNnu+WZj+EHXBUQ1DA+nljlYfzRuDh9l6rNVOhrC+Xx6KldbKrORUW2Q07s/EN4O+RBXJLc7zpV26/vFzsw53KKPbNTDvNGBgt/W3l1HVBsEXnBNHURMlge2SN7Q5j2nIcDxBB6heiAiIgIio54a0uPIDJQZK7N9atRvsbuNntoZLcR0qJjh0cJ7tA9pw65aO617WhoAaAABgAdFmfw7Z4mmmXF53TXSeWukdx4+I8lo49m7R9Fp0BERAXnNFHPDJFNG2SORpa9jxkOB5gjqrF2SAFZB+eegLwJ/U/bL6sZ8Xzm/2/Lf8TPPO7hn3OHNb+CGOnhjhgjbHFG0NYxgwGgcgB0XoiAignCAoJUOaHAhwBBGCD1Uogx9oYdK6jZYxws9yD5bcOlPMMukhHZpHtNHTDh2WwWY/EVmzTT7i07ZbXPFXMd28N4Lhw7t3D6rStcHMDhyIyEFkVWknJRBJXlUNL4JWt5lhA/ZeyIM5+HRzoWxAja5lFHG4dnNG0/cFaNZTRrxb6+96eeNpo6o1VOOjoJyXjHyfvb9AtWgKjiScBXRBAGFKIgIiIKnnlAFZEBERBnPxFdjQt9GMl9FIxo7ucNoH7kL7lO0+BE13AtYAf2Wc1m4XGvsmnmDd5yqFVUDtBAQ85+b9jfqVqkDkiIgIiIMrrKGa3VFJqehjdJLbg5lZEwcZaR2N+O5bgPHyI6rS0tRFV08VRTyNkhlYHxvachzTxBC9CARgrG25x0bd/RU7g2wV8v8ATpDypZncTAezScln1b2QbNERAREQEREBERAXlVVENJTS1FTI2OGJhfI9xwGtAySfovVY25H1yu5tcDg6wUEv9RkHKqmbxEA7tBwX/RvdB06OgmuNRWanro3Ry3ENZSRPGDFSNJ2A9i7Jef8AsB0WpUNGBgDAUoCIiAqOOeAUuzyClowEAclyXa2Ud3t09BcYGzU07dr2H+R2I5gjiCF2IgydkudZZa+LT2op3Sufwt1yfwFW0fkeekoH+w4jqtWT2XFebVR3mglorhD4sD8HGcOaRyc0jiHA8QQs9b7zWafrYrNqebxY5XbKC7EYZUdo5ejZfs7pxyEGtyVZQApQEREEE4Cq3iclMEnisncbxWagrZbNpeXwoonFlfdgMtg7xxdHS/Hk3rxwEF73c6y9V8untPTuiczhcbiwZFI0/kYespH+o4novv2i2Udnt0Fvt0DYKaBu1jG/ye5PMk8zxUWa1UdloI6G3RCKBnHGclzjzc4niXE8SSu5AVST04KyrhBIPdEARBKIiAiIgLmuNDS3Kjloq+njqKaZu2SKQZDgulEGLFVcdGSeHcny1+nOUdZxdPQDtL1fH+vmPzZ5rX088VTBHNTyNlikaHMkYctcDyIK9C0EEEZB5hZKosVw09USV2kQ2Smc4vns0rtsTzzLoXf43nt/afhzQa5eVRPFTwSTTysiijaXPke7AaB1JWZ9frL5PfuqPP7/AAvRZi/+vxcZ2eH/AOv7ccc4VKexXDUM8dbq5rWUzSHwWaN26Jh6Omd/keO39ox15oPE1Vx1pJ4VufLb9OcpKwZbPXjtF7kZ9/mQfZxzWrt1DS22ihoqGCOCmhbtjijGA0LoDQAABjClAREQEREBERARQVH1KCyIEQERQTgIBOFPRUHtHJV0HP5Km835zy8Pmtnh+P4Y37fd3c8fBdCIgIqnOeyDmgsiIgIio4nOAgsDlEaMBEElQAiIJREQFUtyURBZERAREQQQgCIglERBBGRhQ1uERBZERB//2Q==";
    

     let shade=document.createElement("p");
     shade.innerText="Add to Cart";
     shade.addEventListener("click",function(){
      window.location="cart.html";
      let obj ={
          img:el.image_link,
          price:el.price,
          qty:1
      }
      var arr =JSON.parse(localStorage.getItem("cartItems"));
      arr.push(obj);
      localStorage.setItem("cartItems",JSON.stringify(arr));
  })


     bot_div.append(heart,shade);

    div2.append(img,icon_div)
    div2.setAttribute("id","div2");

    var rating =document.createElement("p");
    if(el.rating==null){
      rating.innerText=`rating: 8`;
    }
    else{
      rating.innerText=`rating:  ${el.rating}`;
    }
   
    div.addEventListener("click",()=>{
      ProductPage(el);
      window.location.href = "product.html"
  })


    div.append(div2,name1,price,rating);

    let demo =document.createElement("div");
    demo.append(div,bot_div);

    container.append(demo);
   })  
}

function ProductPage(ele){
  localStorage.setItem("ProductPage",JSON.stringify(ele))
}


let eyeBrush = [

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        name: "BLEND TREND EYESHADOW BRUSH - 043 ROUND Xl",
        price: 399,
        rating: "4.8(414)",
        strike: '',
    },

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        name: "Blend Trend Eyeshadow Brush - 042…",
        price: 499,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        name: "Blend Trend Eyeshadow Brush - 041…",
        price: 399,
        rating: "4.5(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        name: "Blend Trend Dual Eyeshadow Brush…",
        price: 599,
        rating: "4.6(124)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        name: "Blend Trend Dual Eyeshadow Brush…",
        price: 599,
        rating: "4.8(201)",
        strike: '',
    }, 
];

localStorage.setItem("cart", JSON.stringify(eyeBrush));
eyeBrush.map(function (elem) {

    var box = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement("div");
    var rating_wrapper = document.createElement("div");
    var price_wrapper = document.createElement("div");

    var shade = document.createElement("p");
    shade.textContent = elem.shade;

    var img_shade = document.createElement("img");
    img_shade.src = elem.shade_image;

    var img = document.createElement("img");
    img.src = elem.image_link;
    img.classList.add("main-img");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("s");
    strike.innerText = elem.strike;

    var rating = document.createElement("span");
    rating.innerText = elem.rating;

    var star_icon = document.createElement("span");
    star_icon.innerHTML += '<i class="fa fa-star" aria-hidden="true"></i>';

 
    var heart_icon = document.createElement("span");
    heart_icon.innerHTML += '<i class="fa-regular fa-heart"></i>'
    heart_icon.addEventListener("click", function () {
        wishList(elem);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });

    box.addEventListener("click",()=>{
        ProductPage(elem);
        window.location.href = "product.html"
    })

    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});

var cartArray= JSON.parse(localStorage.getItem("cartItem")) || [];
 function addToCart(elem){
    cartArray.push(elem);
    alert("item added to cart")

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem){
    cartwish.push(elem);
    alert("item added to wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
 }


 function ProductPage(elem){
    localStorage.setItem("ProductPage",JSON.stringify(elem))
}


 


let url =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=almay&product_category%20%20Cream`;

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    console.log(res);
    append(res);
}).catch(function(err){
    console.log(err);
})

var container=document.getElementById("container");

function append(data){
  container.innerHTML=null;
   data.forEach(function(el){

    let div=document.createElement("div");
    div.setAttribute("id","box")

  

   let div2 =document.createElement("div");
    

    let img =document.createElement("img");
    img.src=el.image_link;
    img.setAttribute("id","img1")

    let img2=document.createElement("img");
    img2.setAttribute("id","icon")
    img2.src="https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png";



    let icon_div=document.createElement("div");
    let span =document.createElement("span")
    span.innerText=Math.floor(Math.random()*50);
    span.setAttribute("id","rating");

    icon_div.append(span,img2);

    let name1=document.createElement("h4");
    name1.innerText=el.name;

    let price=document.createElement("p");
    price.innerText=`Rs. ${el.price}`;
    price.style="margin-top:-15px;"

    let bot_div=document.createElement("div");
    bot_div.setAttribute("id","bot_div");
    

    let heart=document.createElement("img");
    heart.src="data:image/jpeg;base64,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";
   
     let shade=document.createElement("p");
     shade.innerText="Add to Cart";
     shade.addEventListener("click",function(){
      window.location="cart.html";
      let obj ={
          img:el.image_link,
          price:el.price,
          qty:1
      }
      var arr =JSON.parse(localStorage.getItem("cartItems"));
      arr.push(obj);
      localStorage.setItem("cartItems",JSON.stringify(arr));
  })

     bot_div.append(heart,shade);

    div2.append(img,icon_div)
    div2.setAttribute("id","div2");

    var rating =document.createElement("p");
    if(el.rating==null){
      rating.innerText=`rating: 8`;
    }
    else{
      rating.innerText=`rating:  ${el.rating}`;
    }
    
    div.addEventListener("click",()=>{
      ProductPage(el);
      window.location.href = "product.html"
  })


    div.append(div2,name1,price,rating);

    let demo =document.createElement("div");
    demo.append(div,bot_div);

    container.append(demo);
   })  
}


function ProductPage(elem){
  localStorage.setItem("ProductPage",JSON.stringify(elem))
}


let faceBrush = [
       
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        name: "Blend Trend Dual Face Brush - 075 Powder + … ",
        price: 599,
        rating: "4.5(141)",
        strike: '',
    }, 

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        name: "Blend Trend Face Brush - 003 Cont…",
        price: 399,
        rating: "4.5(121)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        name: "Blend Trend Foundation Brush - 052…",
        price: 399,
        rating: "4.8(41)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        name: "Blend Trend Face Brush - 007 Powder",
        price: 399,
        rating: "4.5(421)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        name: "Blend Trend Face Brush - 006 Highl…",
        price: 399,
        rating: "4.8(197)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
        name: "Blend Trend Face Brush - 001 Blush",
        price: 399,
        rating: "4.9(137)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-051Flat.jpg?v=1627573670",
        name: "Blend Trend Foundation Brush - 051…",
        price: 399,
        rating: "4.6(137)",
        strike: '',
    }, 
    
];

localStorage.setItem("cart", JSON.stringify(faceBrush));
faceBrush.map(function (elem) {

    var box = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement("div");
    var rating_wrapper = document.createElement("div");
    var price_wrapper = document.createElement("div");

    var shade = document.createElement("p");
    shade.textContent = elem.shade;

    var img_shade = document.createElement("img");
    img_shade.src = elem.shade_image;

    var img = document.createElement("img");
    img.src = elem.image_link;
    img.classList.add("main-img");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("s");
    strike.innerText = elem.strike;

    var rating = document.createElement("span");
    rating.innerText = elem.rating;

    var star_icon = document.createElement("span");
    star_icon.innerHTML += '<i class="fa fa-star" aria-hidden="true"></i>'

    var heart_icon = document.createElement("span");
    heart_icon.innerHTML += '<i class="fa-regular fa-heart"></i>'
    heart_icon.addEventListener("click", function () {
        wishList(elem);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });

    box.addEventListener("click",()=>{
        ProductPage(elem);
        window.location.href = "product.html"
    })

    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});

var cartArray= JSON.parse(localStorage.getItem("cartItem")) || [];
 function addToCart(elem){
    cartArray.push(elem);
    alert("item added to cart")

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem){
    cartwish.push(elem);
    alert("item added to wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
 }

 function ProductPage(elem){
    localStorage.setItem("ProductPage",JSON.stringify(elem))
}

let middle_slide_bar_div = document.querySelector(".middle_s_w");

let top_slide_images_arr = [
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/b69d2fc2-53f5-45ed-8e89-8dcd108ed2b6.jpg",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/e352ada8-9b87-43ff-a84a-6ed425b0d55c.gif",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/9f8fe6f9-3ebe-4d1b-9b15-d5e5e642868b.jpg",
  },
];

let bestSellersLeftArr = [
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
    name: "LIP ZIP MATTE TOPPER",
    price: "499",
    text: "ADD TO CART",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955",
    name: "MATTE AS HELL CRAYON LIPSTICK",
    price: "799",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513",
    name: "KOHL OF HONOUR INTENSE KAJAL",
    price: "249",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
    name: "TIPSY LIPS MOISTURIZING BALM",
    price: "199",
    text: "SELECT SHADE",
  },
];

let bestSellersRightArr = [
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513",
    name: "KOHL OF HONOUR INTENSE KAJAL",
    price: "249",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
    name: "TIPSY LIPS MOISTURIZING BALM",
    price: "199",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    name: "CONTOUR DE FORCEFACE PALETTE",
    price: "799",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652",
    name: "ACE OF FACE FOUNDATION STICK",
    price: "999",
    text: "SELECT SHADE",
  },
];

let middle_slide_bar_arr = [
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/a78e7ad2-9fa3-4792-9cb4-4cbcfcb1a06c.jpg",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/f9c0043b-0f54-4ad2-89a6-237fdad41f08.gif",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/abe31497-beb2-4d37-96d5-6d2967c6e1cd.jpg",
  },
];

let hotDealsarr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/d9560110-40f7-4d14-a98d-5599b45a84ef.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/fb82e32a-164e-432a-af89-b6593001d384.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/043d43d2-66eb-4d93-b725-a3d948ca3871.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",
    },
  ],
];

let videoPlayArr = [
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836045-uerkdvpa/watermarked/540/InShot_20220309_1844460631.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644919919-drjtghip/watermarked/540/EasyEyelinerHackusingaSpoon.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4",
  },
];

let superSaversarr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706264477779.jpg?v=1619116135",
      name: "METTLE SATIN LIPSTICK - O1 SOPHIE [BRIGHT FUCHSIA...]",
      price: "499",
      text: "ADD TO CART",
      stoffPrice: "999",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-03-green-book-marsh-green-13954500100179.jpg?v=1619116854",
      name: "EYE WARNED YOU SO! DOUBLE MATTEL EYELINER - O3 GREEN...",
      price: "349",
      text: "ADD TO CART",
      stoffPrice: "699",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-12-don-fawn-yellow-brown-12788425097299.jpg?v=1619108497",
      name: "SMUDGE NOT LIP DUO - 12 DON FAWN (YELLOW BROWN)",
      price: "299",
      text: "ADD TO CART",
      stoffPrice: "599",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
      name: "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...",
      price: "359",
      text: "ADD TO CART",
      stoffPrice: "599",
      disPer: "(40% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
      name: "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-01-black-velvet-black-14255312109651.jpg?v=1619100296",
      name: "TWIST AND SHOUT FADEPROOF KAJAL",
      price: "399",
      text: "SELECT SHADE",
      stoffPrice: "599",
      disPer: "(40% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
      name: "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
      name: "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)",
      price: "549",
      text: "ADD TO CART",
      stoffPrice: "1099",
      disPer: "(50% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
      name: "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)",
      price: "549",
      text: "ADD TO CART",
      stoffPrice: "1099",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-55-americano-deep-12775603372115.jpg?v=1619106493",
      name: "DREAM COVER SPF15 MATTIFYING COMPACT - 55...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
      name: "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...",
      price: "359",
      text: "ADD TO CART",
      stoffPrice: "599",
      disPer: "(40% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-45-grape-drape-deep-mauve-with-hints-of-purple-15384300027987.jpg?v=1619107024",
      name: "SMUDGE ME NOT LIQUID LIPSTICK - 45 GRAPE DRAPE...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
  ],
];

let topPicksArr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/fd062254-fcc7-432d-94dc-9d7da4a6fc62.gif",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/9f9d2095-f019-4bb5-b961-db87fab439f6.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/c325cb7a-0c27-454d-a631-1e184b071e55.jpg",
    },
  ],
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg",
    },
  ],
//   [
//     {
//       img_url:
//         "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg",
//     },
//     {
//       img_url:
//         "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8a71a460-cd8f-4166-8ac5-b19407d23699.jpg",
//     },
//     {
//       img_url:
//         "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg",
//     },
//   ],
];

let giftSetsArr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
      name: "MOTHERS DAY GIFT CARD",
      price: "500",
      text: "SELECT VALUE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1621586014",
      name: "MATTE AS HELL CRAYON LIPSTICK MINIS SET",
      price: "1099",
      text: "SHOP NOW",
      stoffPrice: "1799",
      disPer: "(38% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
      name: "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET",
      price: "799",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "999",
      disPer: "(20% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
      name: "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET",
      price: "849",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1048",
      disPer: "(18% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
      name: "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET",
      price: "799",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "999",
      disPer: "(20% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
      name: "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET",
      price: "849",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1048",
      disPer: "(18% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1649260645",
      name: "ANNIVERSARY KIT",
      price: "1999",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "2793",
      disPer: "(28% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
      name: "HI-5 KIT",
      price: "999",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1295",
      disPer: "(22% Off)",
      rupee: "₹",
    },
  ],
];

let thisorthatarr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg",
    },
  ],
];

let justInArr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
      name: "ARCH ARRIVAL MICRO BROW PENCIL",
      price: "499",
      text: "SELECT SHADE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649078383",
      name: "SUMMER MAKEUP KIT",
      price: "1799",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "2442",
      disPer: "(38% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
      name: "CITRUS GOT REAL RETINOL BRIGHTENING SERUM ",
      price: "499",
      text: "ADD TO CART ",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646207364",
      name: "SUGAR CITRUS GOT REAL BRIGHTENING PEEL",
      price: "599",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1d9f20a6-69b8-4585-9d09-d4d1f8f309d6.jpg?v=1649433263",
      name: "FLAW LESS FACE MAKEUP TRIO SET",
      price: "1199",
      text: "CHOOSE PRODUTS",
      stoffPrice: "1390",
      disPer: "(14% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
      name: "POWER CLAY MASK STICK",
      price: "699",
      text: "SELECT SHADE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-1.jpg?v=1642089034",
      name: "BEGINNERS MAKEUP COMBO",
      price: "999",
      text: "ADD TO CART",
      stoffPrice: "1190",
      disPer: "(16% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638200716",
      name: "TOO GOOD TO BE TRUE DUAL EYESHADOW",
      price: "499",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1635834942",
      name: "ARCH ARRIVAL BROW PEN",
      price: "499",
      text: "SELECT SHADE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
      name: "PARTY READY KIT",
      price: "1299",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1994",
      disPer: "(34% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
      name: "OWN THE HIGH LIQUID HIGHLIGHTER",
      price: "649",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
      name: "TRIPLE DELIGHT MAKEUP SET",
      price: "649",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "847",
      disPer: "(23% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
      name: "PARTY READY KIT",
      price: "1299",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1994",
      disPer: "(34% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
      name: "OWN THE HIGH LIQUID HIGHLIGHTER",
      price: "649",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
      name: "TRIPLE DELIGHT MAKEUP SET",
      price: "649",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "847",
      disPer: "(23% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
      name: "DOUBLE DATE EXTREME VOLUME MASCARA DUO 01...",
      price: "799",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
  ],
];

let sugarbeautyArr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/a78e7ad2-9fa3-4792-9cb4-4cbcfcb1a06c.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/f9c0043b-0f54-4ad2-89a6-237fdad41f08.gif",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/abe31497-beb2-4d37-96d5-6d2967c6e1cd.jpg",
    },
  ],
];

let skincareBasicsArr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294",
      name: "AQUAHOLIC HYDRATING STICK",
      price: "899",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-priming-moisturizer-13548826886227.jpg?v=1619115290",
      name: "AQUAHOLIC PRIMING MOISTURIZER",
      price: "499",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
      name: "BLING LEADER ILLUMINATING MOISTURIZER",
      price: "499",
      text: "SELECT SHADE",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723",
      name: "CITRUS GOT REAL SPF30 SUNSCREEN",
      price: "399",
      text: "ADD TO CART",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",
      name: "CITRUS GOT REAL DAILY MOISTURIZER",
      price: "499",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
      name: "SWIPE RIGHT CLEANSING WATER",
      price: "399",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393",
      name: "CHEAT SHEET CLARIFYING MARK",
      price: "99",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341",
      name: "CHARCOAL PATROL BUBBLE MASK",
      price: "149",
      text: "ADD TO CART",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
      name: "SWIPE RIGHT CLEANSING WATER",
      price: "399",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393",
      name: "CHEAT SHEET CLARIFYING MARK",
      price: "99",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341",
      name: "CHARCOAL PATROL BUBBLE MASK",
      price: "149",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1586848309",
      name: "CHEAT SHEET ANTI-AGING MASK",
      price: "99",
      text: "ADD TO CART",
    },
  ],
];

let exploreArr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/a7b72adf-7e02-45c4-a208-552d46eefc4c.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/88ee8d58-7cc5-450a-953b-aa16ef190d52.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
    },
  ],
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/60bdba27-5962-401b-b03e-2c55baa74bd1.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/259217a4-239d-4103-8bf7-cd2a7e1529c1.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/8e3d35ed-5e1f-4056-b36a-575761e2c995.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
    },
  ],
  [
    {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/60bdba27-5962-401b-b03e-2c55baa74bd1.jpg",
      },
      {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/259217a4-239d-4103-8bf7-cd2a7e1529c1.jpg",
      },
      {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/8e3d35ed-5e1f-4056-b36a-575761e2c995.jpg",
      },
      {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
      },
  ],
  [
    {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
      }
  ],
  [
    {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
      }
  ],
  [
    {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
      }
  ],
];

// Sliding images part
let top_slide_bar_div = document.querySelector(".sliding_window");
let isPaused = false;
let topTemp = 0;
let winWidth = 1263;
setInterval(() => {
  if (!isPaused) {
    topTemp = topTemp + winWidth;

    if (topTemp < winWidth * (top_slide_images_arr.length - 1)) {
      top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`;
      top_slide_bar_div.style.transition = ".4s";
      console.log(topTemp, winWidth, i++);
    } else {
      top_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
      top_slide_bar_div.style.transition = "0.2s";
      topTemp = 0;
    }
  }
}, 3000);

let start = (arr, container) => {
  container.innerText = "";

  for (let i = 0; i < arr.length; i++) {
    let img = document.createElement("img");
    img.className = "top_img";
    img.src = arr[i].url;
    container.append(img);
  }
};
start(top_slide_images_arr, top_slide_bar_div);

top_slide_bar_div.addEventListener("mouseover", () => {
  pause();
});
top_slide_bar_div.addEventListener("mouseout", () => {
  play();
});
document.querySelector(".lArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".rArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".lArrow").addEventListener("mouseout", () => {
  play();
});
document.querySelector(".rArrow").addEventListener("mouseout", () => {
  play();
});

let play = () => {
  isPaused = false;
  ispaused = false;
};
let pause = () => {
  isPaused = true;
  ispaused = true;
};

document.querySelector(".lArrow").addEventListener("click", () => {
  // let winWidth = 1263
  topTemp = topTemp - winWidth;
  let final = winWidth * (top_slide_images_arr.length - 1);
  if (topTemp >= 0) {
    console.group("left", topTemp);
    top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`;
    top_slide_bar_div.style.transition = ".4s";
  } else {
    top_slide_bar_div.style.transform = `translate3d(${-final}px,0px,0px)`;
    top_slide_bar_div.style.transition = "0.2s";
    topTemp = final;
  }
});

document.querySelector(".rArrow").addEventListener("click", () => {
  // let winWidth = 1263

  topTemp = topTemp + winWidth;

  if (topTemp < winWidth * top_slide_images_arr.length) {
    top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`;
    top_slide_bar_div.style.transition = ".4s";
  } else {
    top_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
    top_slide_bar_div.style.transition = "0.1s";
    topTemp = 0;
  }
});

//    Best sellers part

let pro_div = document.querySelector(".best_seller_products");
let bestSeller = (bestSellersLeftArr, container) => {
  container.innerText = "";
  bestSellersLeftArr.forEach((el) => {
    // console.log(el)

    let div = document.createElement("div");
    div.className = "four_pro_div";

    let bsimg = document.createElement("img");
    bsimg.src = el.img_url;
    bsimg.style.height = "250px";
    bsimg.style.width = "100%";

    let bsname = document.createElement("div");
    bsname.className = "pro_name";
    bsname.innerText = el.name;

    let pdiv = document.createElement("div");
    pdiv.className = "pdiv";
    let bsprice = document.createElement("p");
    bsprice.innerText = `₹ ${el.price}`;
    pdiv.append(bsprice);

    let bstag = document.createElement("div");
    bstag.className = "text_tag";
    bstag.innerText = el.text;

    let img_name_price_div = document.createElement("div");
    img_name_price_div.className = "img_name_price_div";

    img_name_price_div.append(bsimg, bsname, pdiv);
    div.append(img_name_price_div, bstag);
    // console.log(div)
    container.append(div);
  });
};
bestSeller(bestSellersLeftArr, pro_div);
let flag1 = true;

document.querySelector(".left_arr_div").addEventListener("click", () => {
  flag1 = !flag1;
  if (flag1) {
    bestSeller(bestSellersLeftArr, pro_div);
  } else {
    bestSeller(bestSellersRightArr, pro_div);
  }
});
let flag2 = false;
document.querySelector(".right_arr_div").addEventListener("click", () => {
  flag2 = !flag2;
  if (flag2) {
    bestSeller(bestSellersRightArr, pro_div);
  } else {
    bestSeller(bestSellersLeftArr, pro_div);
  }
});

// quick beauty tips
let midTemp = 0;
let ispaused = false;
start(middle_slide_bar_arr, middle_slide_bar_div);
setInterval(() => {
  if (!ispaused) {
    midTemp = midTemp + winWidth;

    if (midTemp < winWidth * middle_slide_bar_arr.length) {
      middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px,0px,0px)`;
      middle_slide_bar_div.style.transition = ".4s";
    } else {
      middle_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
      middle_slide_bar_div.style.transition = "0.2s";
      midTemp = 0;
    }
  }
}, 3000);

middle_slide_bar_div.addEventListener("mouseover", () => {
  pause();
});
middle_slide_bar_div.addEventListener("mouseout", () => {
  play();
});
document.querySelector(".lArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".rArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".lArrow").addEventListener("mouseout", () => {
  play();
});
document.querySelector(".rArrow").addEventListener("mouseout", () => {
  play();
});

document.querySelector(".qbLArr").addEventListener("click", () => {
  pause();

  midTemp = midTemp - winWidth;
  let final = winWidth * (middle_slide_bar_arr.length - 1);
  if (midTemp >= 0) {
    console.group("left", midTemp);
    middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px)`;
    middle_slide_bar_div.style.transition = ".4s";
  } else {
    middle_slide_bar_div.style.transform = `translate3d(${-final}px)`;
    middle_slide_bar_div.style.transition = "0.2s";
    midTemp = final;
  }
});

document.querySelector(".qbRArr").addEventListener("click", () => {
  midTemp = midTemp + winWidth;
  pause();
  if (midTemp < winWidth * middle_slide_bar_arr.length) {
    middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px,0px,0px)`;
    middle_slide_bar_div.style.transition = ".4s";
  } else {
    middle_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
    middle_slide_bar_div.style.transition = "0.2s";
    midTemp = 0;
  }
});

// Hot deals part

let main_div = document.querySelector(".slider");
let imageSlide = (arr, container) => {
  container.innerText = "";
  for (let i = 0; i < arr.length; i++) {
    //    console.log(arr)
    arr[i].map((el) => {
      let sliding_div = document.createElement("div");
      sliding_div.className = "sliding_div";
      let img_div = document.createElement("img");
      img_div.className = "bannerimg";
      img_div.src = el.img_url;
      sliding_div.append(img_div);
      container.append(sliding_div);
    });
  }
};
imageSlide(hotDealsarr, main_div);
let hdSlide = document.querySelector(".slider");
let temp = 0;
document.querySelector(".hdLarr").addEventListener("click", () => {
  let winWidth = 1263;
  temp = temp - winWidth;
  let final = winWidth * (hotDealsarr.length - 1);
  if (temp > 0) {
    console.group("left", temp);
    hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`;
    hdSlide.style.transition = ".4s";
  } else {
    hdSlide.style.transform = `translate3d(${-final}px,0px,0px)`;
    hdSlide.style.transition = "0.2s";
    temp = final;
  }
});

document.querySelector(".hdRarr").addEventListener("click", () => {
  let winWidth = 1263;

  temp = temp + winWidth;
  console.group("right", temp);
  if (temp < winWidth * 7) {
    hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`;
    hdSlide.style.transition = ".4s";
  } else {
    hdSlide.style.transform = `translate3d(${-0}px,0px,0px)`;
    hdSlide.style.transition = "0.2s";
    temp = 0;
  }
});

//  Sugar streaming part

let vid_div = document.querySelector(".vidSlider");
let videoPlay = (data) => {
  data.forEach((el) => {
    let video_div = document.createElement("div");
    video_div.className = "video_div";
    let video = document.createElement("video");
    video.src = el.src;
    video.style.border = "0";
    video.className = "videoshorts";
    video.style.cursor = "pointer";
    // console.log(video)
    vid_div.append(video);
  });
};
videoPlay(videoPlayArr);
const clip = document.querySelectorAll(".videoshorts");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", (e) => {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", (e) => {
    clip[i].pause();
  });
}
let vidTemp = 0;
document.querySelector("#left").addEventListener("click", () => {
  let winWidth = window.outerWidth;
  vidTemp = vidTemp - winWidth * 0.74;

  if (vidTemp > 0) {
    console.group("left", vidTemp);
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vid_div.style.transform = `translateX(${-0}px)`;
    vid_div.style.transition = ".4s";
    vidTemp = 0;
  }
});
document.querySelector("#right").addEventListener("click", () => {
  let winWidth = window.outerWidth;

  vidTemp = vidTemp + winWidth * 0.74;
  console.group("right", vidTemp, winWidth);
  if (vidTemp < winWidth * 3) {
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vidTemp = vidTemp - winWidth * 0.74;
  }
});

// Super savers part

let superSaversdiv = document.querySelector(".ninth_box_slide_div");
let superSavers = (superSaversarr, container) => {
  container.innerText = "";
  superSaversarr.forEach((el) => {
    // console.log(el)

    let div = document.createElement("div");
    div.className = "four_pro_div";

    let bsimg = document.createElement("img");
    bsimg.src = el.img_url;
    bsimg.style.height = "250px";
    bsimg.style.width = "100%";

    let bsname = document.createElement("div");
    bsname.className = "pro_name";
    bsname.innerText = el.name;

    let main_price_div = document.createElement("div");
    main_price_div.className = "ssprice_div";
    let stoffdiv = document.createElement("div");
    stoffdiv.className = "stoffdiv";
    let rupee = document.createElement("p");
    rupee.innerText = el.rupee;
    let stoffPrice = document.createElement("p");
    stoffPrice.innerText = `${el.stoffPrice}`;
    stoffdiv.append(rupee, stoffPrice);

    let pdiv = document.createElement("div");
    pdiv.className = "pdiv";
    let bsprice = document.createElement("p");
    bsprice.innerText = ` ₹ ${el.price}`;
    pdiv.append(bsprice);

    let disPer = document.createElement("p");
    disPer.style.color = "#fc3183";
    disPer.innerText = el.disPer;
    main_price_div.append(stoffdiv, pdiv, disPer);

    let bstag = document.createElement("div");
    bstag.className = "text_tag";
    bstag.innerText = el.text;

    let img_name_price_div = document.createElement("div");
    img_name_price_div.className = "img_name_price_div";

    img_name_price_div.append(bsimg, bsname, main_price_div);
    div.append(img_name_price_div, bstag);
    // console.log(div)
    container.append(div);
  });
};
superSavers(superSaversarr[0], superSaversdiv);
let ssleft = 0;
let ssright = 0;
document.querySelector(".ssleft_arr_div").addEventListener("click", () => {
  ssleft--;
  if (ssleft >= 0) {
    ssright--;
    superSavers(superSaversarr[ssleft], superSaversdiv);
  } else {
    ssleft = 2;
    ssright = 2;
    superSavers(superSaversarr[2], superSaversdiv);
  }
});

document.querySelector(".ssright_arr_div").addEventListener("click", () => {
  ssright++;
  if (ssright < 3) {
    ssleft++;
    superSavers(superSaversarr[ssright], superSaversdiv);
  } else {
    ssleft = 0;
    ssright = 0;
    superSavers(superSaversarr[0], superSaversdiv);
  }
});

// Top pics of the week part

let topPicksdiv = document.querySelector(".tpSlider");
imageSlide(topPicksArr, topPicksdiv);
let tpTemp = 0;
document.querySelector(".tpLarr").addEventListener("click", () => {
  tpTemp = tpTemp - winWidth;
  let final = winWidth * (topPicksArr.length - 1);
  if (tpTemp >= 0) {
    console.group("left", tpTemp);
    topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`;
    topPicksdiv.style.transition = ".4s";
  } else {
    topPicksdiv.style.transform = `translate3d(${-final}px,0px,0px)`;
    topPicksdiv.style.transition = "0.2s";
    tpTemp = final;
  }
});

document.querySelector(".tpRarr").addEventListener("click", () => {
  tpTemp = tpTemp + winWidth;
  console.group("right", tpTemp);
  if (tpTemp < winWidth * topPicksArr.length) {
    topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`;
    topPicksdiv.style.transition = ".4s";
  } else {
    topPicksdiv.style.transform = `translate3d(${-0}px,0px,0px)`;
    topPicksdiv.style.transition = "0.2s";
    tpTemp = 0;
  }
});

//  Gift sets part

let giftSetsdiv = document.querySelector(".eleventh_box_slide_div");
superSavers(giftSetsArr[0], giftSetsdiv);
let gsleft = 0;
let gsright = 0;
document.querySelector(".gsleft_arr_div").addEventListener("click", () => {
  gsleft--;
  if (gsleft >= 0) {
    gsright--;
    superSavers(giftSetsArr[gsleft], giftSetsdiv);
  } else {
    gsleft = 1;
    gsright = 1;
    superSavers(giftSetsArr[1], giftSetsdiv);
  }
});

document.querySelector(".gsright_arr_div").addEventListener("click", () => {
  gsright++;
  if (gsright < 2) {
    gsleft++;
    superSavers(giftSetsArr[gsright], giftSetsdiv);
  } else {
    gsleft = 0;
    gsright = 0;
    superSavers(giftSetsArr[0], giftSetsdiv);
  }
});

//  This or That part

let thisorthatdiv = document.querySelector(".twelth_box_div");
imageSlide(thisorthatarr, thisorthatdiv);

//  Just in part

let justInDiv = document.querySelector(".thirteenth_box_slide_div");
superSavers(justInArr[0], justInDiv);
let jileft = 0;
let jiright = 0;
document.querySelector(".jileft_arr_div").addEventListener("click", () => {
  jileft--;
  if (jileft >= 0) {
    jiright--;
    superSavers(justInArr[jileft], justInDiv);
  } else {
    jileft = 3;
    jiright = 3;
    superSavers(justInArr[3], justInDiv);
  }
});

document.querySelector(".jiright_arr_div").addEventListener("click", () => {
  jiright++;
  if (jiright < 4) {
    jileft++;
    superSavers(justInArr[jiright], justInDiv);
  } else {
    jileft = 0;
    jiright = 0;
    superSavers(justInArr[0], justInDiv);
  }
});

//   Sugar beauty blog part

let sugarbeautydiv = document.querySelector(".fourteenth_box_div");
imageSlide(sugarbeautyArr, sugarbeautydiv);

//   Skincare Basics part

let skincareBasicDiv = document.querySelector(".fifteenth_box_slide_div");
bestSeller(skincareBasicsArr[0], skincareBasicDiv);
let sbleft = 0;
let sbright = 0;
document.querySelector(".sbleft_arr_div").addEventListener("click", () => {
  console.log("i am in");
  sbleft--;
  if (sbleft >= 0) {
    sbright--;
    bestSeller(skincareBasicsArr[sbleft], skincareBasicDiv);
  } else {
    sbleft = 2;
    sbright = 2;
    bestSeller(skincareBasicsArr[2], skincareBasicDiv);
  }
});

document.querySelector(".sbright_arr_div").addEventListener("click", () => {
  console.log("i am in");
  sbright++;
  if (sbright < 3) {
    sbleft++;
    bestSeller(skincareBasicsArr[sbright], skincareBasicDiv);
  } else {
    sbleft = 0;
    sbright = 0;
    bestSeller(skincareBasicsArr[0], skincareBasicDiv);
  }
});

//   Explore part

let exploreDiv = document.querySelector(".exSlider");
imageSlide(exploreArr, exploreDiv);
let exTemp = 0;
document.querySelector(".exLarr").addEventListener("click", () => {
  exTemp = exTemp - winWidth;
  let final = winWidth * (exploreArr.length - 1);
  if (exTemp >= 0) {
    console.group("left", exTemp);
    exploreDiv.style.transform = `translate3d(${-exTemp}px,0px,0px)`;
    exploreDiv.style.transition = ".4s";
  } else {
    exploreDiv.style.transform = `translate3d(${-final}px,0px,0px)`;
    exploreDiv.style.transition = "0.2s";
    exTemp = final;
  }
});

document.querySelector(".exRarr").addEventListener("click", () => {
  exTemp = exTemp + winWidth;
  console.group("right", exTemp);
  if (exTemp < winWidth * exploreArr.length) {
    exploreDiv.style.transform = `translate3d(${-exTemp}px,0px,0px)`;
    exploreDiv.style.transition = ".4s";
  } else {
    exploreDiv.style.transform = `translate3d(${-0}px,0px,0px)`;
    exploreDiv.style.transition = "0.2s";
    exTemp = 0;
  }
});


 

let url =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick`;

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    console.log(res);
    append(res);
}).catch(function(err){
    console.log(err);
})

var container=document.getElementById("container");

function append(data){
  container.innerHTML=null;
   data.forEach(function(el){

    let div=document.createElement("div");
    div.setAttribute("id","box")

  

   let div2 =document.createElement("div");
    

    let img =document.createElement("img");
    img.src=el.image_link;
    img.setAttribute("id","img1")

    let img2=document.createElement("img");
    img2.setAttribute("id","icon")
    img2.src="https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png";



    let icon_div=document.createElement("div");
    let span =document.createElement("span")
    span.innerText=Math.floor(Math.random()*50);
    span.setAttribute("id","rating");

    icon_div.append(span,img2);

    let name1=document.createElement("h4");
    name1.innerText=el.name;

    let price=document.createElement("p");
    price.innerText=`Rs. ${el.price}`;
    price.style="margin-top:-15px;"

    let bot_div=document.createElement("div");
    bot_div.setAttribute("id","bot_div");
    

    let heart=document.createElement("img");
    heart.src="data:image/jpeg;base64,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";
  
     let shade=document.createElement("p");
     shade.innerText="Add to Cart";
     shade.addEventListener("click",function(){
      window.location="cart.html";
      let obj ={
          img:el.image_link,
          price:el.price,
          qty:1
      }
      var arr =JSON.parse(localStorage.getItem("cartItems"));
      arr.push(obj);
      localStorage.setItem("cartItems",JSON.stringify(arr));
  })


     bot_div.append(heart,shade);

    div2.append(img,icon_div)
    div2.setAttribute("id","div2");

    var rating =document.createElement("p");
    if(el.rating==null){
      rating.innerText=`rating: 8`;
    }
    else{
      rating.innerText=`rating:  ${el.rating}`;
    }
    
    div.addEventListener("click",()=>{
      ProductPage(el);
      window.location.href = "product.html"
  })

    div.append(div2,name1,price,rating);

    let demo =document.createElement("div");
    demo.append(div,bot_div);

    container.append(demo);
   })  
}


function ProductPage(elem){
  localStorage.setItem("ProductPage",JSON.stringify(elem))
}


    
    

let fetchdata=async(value)=>{
    try{
      const api = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${value}`;

      let res= await fetch(api);
     var data= await res.json();
     var length =data.length;


  
       // this is for sort data
       document.getElementById("select2").addEventListener("change",function(){
        console.log(this.value);

        if(this.value==`htl`){
            var  Htl =data.sort((a,b)=>{
                return b.price-a.price;
            })
            append(Htl);
        }
        else if(this.value==`lth`){
            var  Lth =data.sort((a,b)=>{
                return a.price-b.price;
            })
          append(Lth);
        }
        else if(this.value==`rating`){
            var  rating =data.sort((a,b)=>{
                return a.rating-b.rating;
            })
            append(rating);
        }
        else{
            window.location.reload();
        }
       
    
    })
 
     document.getElementById("length").innerText=length;

 
     append(data)
     
     console.log(data)
    
     }catch(err){
         console.log(err);
     }
     
 }

 fetchdata(`maybelline`);//calling fetch
 // append data
 function append(data){
    container.innerHTML=null;
     data.forEach(function(el){

      let div=document.createElement("div");
      div.setAttribute("id","box")

    

     let div2 =document.createElement("div");
      

      let img =document.createElement("img");
      img.src=el.image_link;
      img.setAttribute("id","img1")
      img.addEventListener("click",function(){
          window.location="product.html";
      })

      let img2=document.createElement("img");
      img2.setAttribute("id","icon")
      img2.src="https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png";
 
 

      let icon_div=document.createElement("div");
      let span =document.createElement("span")
      span.innerText=Math.floor(Math.random()*50);
      span.setAttribute("id","rating");

      icon_div.append(span,img2);
 
      let name1=document.createElement("h4");
      name1.innerText=el.name;

      let price=document.createElement("p");
      price.innerText=`Rs. ${el.price}`;
      price.style="margin-top:-15px;"

      let bot_div=document.createElement("div");
      bot_div.setAttribute("id","bot_div");
      

      let heart=document.createElement("img");
      heart.src="data:image/jpeg;base64,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";
     

       let shade=document.createElement("p");
       shade.innerText="Add to Cart";
       shade.addEventListener("click",function(){
           window.location="cart.html";
           let obj ={
               img:el.image_link,
               price:el.price,
               qty:1
           }
           var arr =JSON.parse(localStorage.getItem("cartItems"));
           arr.push(obj);
           localStorage.setItem("cartItems",JSON.stringify(arr));
       })
  
       bot_div.append(heart,shade);

      div2.append(img,icon_div)
      div2.setAttribute("id","div2");

      var rating =document.createElement("p");
      if(el.rating==null){
        rating.innerText=`rating: 8`;
      }
      else{
        rating.innerText=`rating:  ${el.rating}`;
      }
      
      div.addEventListener("click",()=>{
        ProductPage(el);
        window.location.href = "product.html"
    })


      div.append(div2,name1,price,rating);

      let demo =document.createElement("div");
      demo.append(div,bot_div);

      container.append(demo);
     })  
 }
// this is for filter data by brands
 document.getElementById("select1").addEventListener("change",function(){
   console.log(this.value)
   if(this.value==`none`){
       window.location.reload();
   }
   else
   fetchdata(this.value);
 })
   


 function ProductPage(elem){
    localStorage.setItem("ProductPage",JSON.stringify(elem))
}




let payment = ()=>{
    return `<div class="cartPriceOffer">
    <div class="payContainer">
        
        <div class="priceDetailTag"><img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt=""> Payment Method</div>
        <p>Seclect Payment Method</p>
        
        <div>
           <div id="upi">
               <img src="https://in.sugarcosmetics.com/paymentIcons/upi.svg" alt=""> 
               <div class="iconfles">
               <p>Instant Pay Using UPI</p>
               <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="uiconleft">
            </div> 
            </div> 
           <div class="paydrop">
              <div id="payinput"><input type="text" placeholder="Enter UPI Id"></div>
           </div>
        </div>
        <div>
            <div id="mobwallet">
                <img src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg" alt="">
                <div class="iconfles">
                <p>Mobile Wallets</p>
                <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="miconleft">
                </div>
            </div>
        </div>
        <div>
            <div id="debitcard">
                <img src="https://in.sugarcosmetics.com/paymentIcons/creditDebit.svg" alt="">
                <div class="iconfles">
                <p>Credit/Debit Cards</p>
                <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="diconleft">
                </div>
            </div>
            <div id="dropdebit">
                <input type="number" placeholder="Card Holder Number">
                <br>
                <input type="text" placeholder="Card Holder Name">
                <br>
                <div id="exp">
                    <input type="text" placeholder="Expiriy Date(MM/YY)">
                    <input type="text" placeholder="CVV">
                </div>
                <div>
               <p> <span> <input type="checkbox"></span>We will securely save this card for faster paymnet experience (CVV will not saved). If required you can remove this card from My Account > Payment Methods</p>
                </div>
            </div>
        </div>
        <div id="netbanking">
            <img src="https://in.sugarcosmetics.com/paymentIcons/netBanking.svg" alt="">
            <div class="iconfles">
            <p>Net Banking</p>
            <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="niconleft">
            </div>
        </div>
        <div >
            <div id="cash">
                <img src="https://in.sugarcosmetics.com/paymentIcons/cod.svg" alt="">
                <div class="iconfles">
                <p>Cash On Delivery</p>
                <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="ciconleft">
                </div>
            </div>
           <div id="cashdrop">
               <p>We recommend using a digital payment method for completing the payment</p>
           </div> 
        </div>
        
        <div class="button_delivery_shopping">
            <div class="continueShopping_btn"><&nbsp;&nbsp;<a href="../HTML/index.html">delivery Info</a></div>
            <div class="PaymentInfo_btn">Proceed to Payment</div>
        </div>
    </div>
</div>
</div>`
}

export {payment}


let SkinCareData = [
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-water-boost-mask-13548848087123.jpg?v=1619115321",
        name: "Aquaholic Water Boost Mask",
        price: 149,
        rating: "4.7(414)",
        strike: '',
    },

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181",
        name: "Citrus Got Real Cooling Stick",
        price: 399,
        rating: "4.6(141)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
        name: "Cheat Sheet Clarifying Mask",
        price: 99,
        rating: "4.9(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
        name: "Charcoal Patrol Bubble Mask",
        price: 149,
        rating: "4.9(41)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
        name: "Cheat Sheet Anti-Aging Mask",
        price: 99,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
        name: "Coffee Culture Eye Firming Cream",
        price: 399,
        rating: "4.9(54)",
        strike: 'RS.799',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976",
        name: "Aquaholic Clarifying Spot Gel",
        price: 399,
        rating: "4.7(421)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
        name: "Swipe Right Cleansing Water",
        price: 399,
        rating: "4.9(197)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
        name: "Acne Combo (Pack of 6)",
        price: 399,
        rating: "4.9(137)",
        strike: '1299',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
        name: "Coffee Culture Pore Purifying Mask",
        price: 499,
        rating: "4.7(421)",
        strike: '1399',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Pore-Exfoliating-Scrub-3_1.jpg?v=1626363966",
        name: "Aquaholic Pore Exfoliating Scrub",
        price: 399,
        rating: "4.9(14)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-refreshing-mist-28037990842451.jpg?v=1619155739",
        name: "Citrus Got Real Refreshing Mist",
        price: 799,
        rating: "4.8(201)",
        strike: '2100',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCBrighteningSerumWBG-3.jpg?v=1628610327",
        name: "Coffee Culture Brightening Serum",
        price: 399,
        rating: "4.6(137)",
        strike: '',
    },
    
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-pack-of-6-12784634527827.jpg?v=1619114589",
         name:   "Cheat Sheet Clarifying Mask (Pack of 6)",
        price: 399,
        rating: "4.8(27)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
        name: "Aquaholic Hydrating Primer",
        price: 999,
        rating: "4.5(421)",
        strike: 'RS.1199',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292",
        name: "Aquaholic Priming Moisturizer",
        price: 799,
        rating: "4.8(421)",
        strike: 'RS.999',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
        name: "Citrus Got Real Retinol Brightening Serum",
        price: 1499,
        rating: "4.5(421)",
        strike: 'RS.1799',
    },
    
];


localStorage.setItem("cart", JSON.stringify(SkinCareData));

SkinCareData.map(function (elem) {

    var box = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement("div");
    var rating_wrapper = document.createElement("div");
    var price_wrapper = document.createElement("div");

    var shade = document.createElement("p");
    shade.textContent = elem.shade;

    var img_shade = document.createElement("img");
    img_shade.src = elem.shade_image;

    var img = document.createElement("img");
    img.src = elem.image_link;
    img.classList.add("main-img");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("s");
    strike.innerText = elem.strike;

    var rating = document.createElement("span");
    rating.innerText = elem.rating;

    var star_icon = document.createElement("span");
    star_icon.innerHTML += '<i class="fa fa-star" aria-hidden="true"></i>'

    var heart_icon = document.createElement("span");
    heart_icon.innerHTML += '<i class="fa-regular fa-heart"></i>'
    
    heart_icon.addEventListener("click", function () {
        wishList(elem);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });
    
    box.addEventListener("click",()=>{
        ProductPage(elem);
        window.location.href = "product.html"
    })


    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});
 
var cartArray= JSON.parse(localStorage.getItem("cartItem")) || [];
 function addToCart(elem){
    cartArray.push(elem);
    alert("item added to cart")

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem){
    cartwish.push(elem);
    alert("item added to wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
 }


 
 function ProductPage(elem){
    localStorage.setItem("ProductPage",JSON.stringify(elem))
}




let countTrendingItem = 0;

let itemCountTrending = document.querySelector('.item-count');
itemCountTrending.innerText = `${countTrendingItem} items`
const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox';

let ratingArray = [];
const appendData = (data) => {
    
    countTrendingItem = data.length
    itemCountTrending.innerText = `${countTrendingItem} items`
    let containerContent = document.getElementById("container-content");
    containerContent.innerHTML = null;
    data.forEach(({image_link,name,price},index) => {
        let rx = (Math.random()*3)+2;
        let ry = Math.floor(Math.random()*270)+71;
        let rz = Math.floor(Math.random()*70)+15;
        ratingArray.push([rx.toFixed(1),ry,rz]);
        let div = document.createElement('div');
        div.setAttribute('class', 'trending-card');
        div.addEventListener('click', ()=> {
            
            ProductPage(image_link,name,price,4);
           window.location.href = "product.html"
        })
        let div_img_top_num = document.createElement('div');
        div_img_top_num.setAttribute('class', 'img-top-num');
        let div_img_top_img = document.createElement('img');
        div_img_top_img.src = 'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png';
        div_img_top_num.append(`${rz} `,div_img_top_img);
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'imgDiv');
        let imgDivimg = document.createElement('img');
        imgDivimg.src = image_link;
        imgDiv.append(imgDivimg);
        let textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'trending-text');
        let textP = document.createElement('p');
        textP.textContent = name;
        textDiv.append(textP);
        let priceDiv = document.createElement('div');
        priceDiv.setAttribute('class', 'trending-price');
        let priceP = document.createElement('p');
        priceP.textContent = `Rs.${price}`;
        priceDiv.append(priceP);
        let ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class', 'trending-rating');
        let ratingimg = document.createElement('img');
        ratingimg.src = 'https://in.sugarcosmetics.com/star_filled.png';
        ratingDiv.append(ratingimg,`${ratingArray[ratingArray.length-1][0]} (${ratingArray[ratingArray.length-1][1]})`);
        let fevOuterDiv = document.createElement('div');
        fevOuterDiv.setAttribute('class','trending-fev-card');
        fevOuterDiv.innerHTML = `<div class="trending-fev-sign"><i class="fa fa-heart-o" aria-hidden="true"></i></div><div class="select-shade-text">SELECT SHADE</div>`;
        div.append(div_img_top_num,imgDiv,textDiv,priceDiv,ratingDiv,fevOuterDiv)
        containerContent.append(div);
    });

}
let urlDataArray = [];
let defaultArray = []
const fetchData = async () => {
    let middleware = document.querySelector('.middleware');
    middleware.style.display = 'flex';
    let res = await fetch(url);
    let data = await res.json();

    //console.log(data);

    console.log(data);
    defaultArray.push(data);
    urlDataArray.push(data);
    middleware.style.display = 'none';
    appendData(data);
}
fetchData();

const setDataToLocal = (data,index) => {
    let obj = {
        data:data,
        rating: ratingArray[index],
        index:index
    }
    localStorage.setItem('productData', JSON.stringify(obj));
}

document.querySelector('.applyFilter').addEventListener('click', ()=>{
    let filterArr = {};
    let arrF = [];
    let xy = document.querySelector('.inputCheck').children;
    for(let m = 0; m<xy.length; m++){
        if(xy[m].childNodes[0].checked === true){
            filterArr[xy[m].innerText.toLowerCase()] = true;
        }
    }
    if(Object.keys(filterArr).length > 0){
        for(let nn = 0; nn<urlDataArray[0].length; nn++){
            if(urlDataArray[0][nn].product_type in filterArr){
                arrF.push(urlDataArray[0][nn])
            }
        }
        appendData(arrF);
    }
    else{
        appendData(urlDataArray[0]);
    }
})


function ProductPage(image_link,name,price,rating){
  let obj = {image_link,name,price,rating};
  localStorage.setItem("ProductPage",JSON.stringify(obj))
}

document.querySelector('.cursor').addEventListener('click', ()=> {
    let xy = document.querySelector('.inputCheck').children;
    for(let m = 0; m<xy.length; m++){
        xy[m].childNodes[0].checked = false;
    }
    appendData(urlDataArray[0]);
})
document.querySelector('#highToLow').addEventListener('click', ()=>{
    bblSortHL(urlDataArray[0]);
    console.log('high to low')
})
document.querySelector('#lowToHigh').addEventListener('click', ()=>{
    bblSortLH(urlDataArray[0]);
    console.log('low to high')
})

function bblSortLH(urlDataArrayy){
    for(var i = 0; i < urlDataArrayy.length; i++){
      for(var j = 0; j < (urlDataArrayy.length-i-1); j++){
        if(+urlDataArrayy[j].price > +urlDataArrayy[j+1].price){
          var temp = urlDataArrayy[j]
          urlDataArrayy[j] = urlDataArrayy[j+1];
          urlDataArrayy[j+1] = temp;
        }
      }
    }
    appendData(urlDataArrayy);
}
function bblSortHL(urlDataArrayy){
    for(var i = 0; i < urlDataArrayy.length; i++){
      for(var j = 0; j < (urlDataArrayy.length-i-1); j++){
        if(+urlDataArrayy[j].price < +urlDataArrayy[j+1].price){
          var temp = urlDataArrayy[j]
          urlDataArrayy[j] = urlDataArrayy[j+1];
          urlDataArrayy[j+1] = temp;
        }
      }
    }
    appendData(urlDataArrayy);
}
document.querySelector('.cursorSort').addEventListener('click',()=>{
    fetchData();
})





let wishlistData = [
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        name: "BLEND TREND EYESHADOW BRUSH - 043 ROUND Xl",
        price: 399,
        rating: "4.8(414)",
        strike: '',
    },

    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        name: "Blend Trend Dual Face Brush - 075 Powder + … ",
        price: 599,
        rating: "4.5(141)",
        strike: '',
    },
  
    
];


localStorage.setItem("cartItems", JSON.stringify(wishlistData));

wishlistData.map(function (elem,index) {

    var box = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement("div");
    var rating_wrapper = document.createElement("div");
    var price_wrapper = document.createElement("div");

    var shade = document.createElement("p");
    shade.textContent = elem.shade;

    var img_shade = document.createElement("img");
    img_shade.src = elem.shade_image;

    var img = document.createElement("img");
    img.src = elem.image_url;
    img.classList.add("main-img");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("s");
    strike.innerText = elem.strike;

    var rating = document.createElement("span");
    rating.innerText = elem.rating;

    var star_icon = document.createElement("span");
    star_icon.innerHTML += '<i class="fa fa-star" aria-hidden="true"></i>'

    var heart_icon = document.createElement("span");
    heart_icon.innerHTML += '<i class="fa-solid fa-heart"></i>'
    
    heart_icon.addEventListener("click", function () {
        wishList(elem,index);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "SHOP NOW";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });

    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});
 
var cartArray= JSON.parse(localStorage.getItem("cartItems")) || [];
 function addToCart(elem){
    cartArray.push(elem);

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
    window.location.href="./product.html"
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem,index){
    cartwish.splice(index,1);
    alert("item removed from wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
    window.location.reload();
 }          


 