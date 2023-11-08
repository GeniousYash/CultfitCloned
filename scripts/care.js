import footerc from "../components/footercommon.js";
import navbar from "../components/navbar.js";
document.querySelector(`#footer`).innerHTML = footerc();
document.getElementById('navbar').innerHTML=navbar();


let data=[
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FitCheck_Magazine-02.png",
        price:"1990",
        offerPrice:"990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Vitamin_Profile_clp.jpg",
        price:"1990",
        offerPrice:"890",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Thyroid_Screening_clp.jpg",
        price:"590",
        offerPrice:"450",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/WorkoutWellness_men_magazine_web2.png",
        price:"2990",
        offerPrice:"2990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/WorkoutWellness_women_magazine_web2.png",
        price:"2990",
        offerPrice:"1990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
        price:"5999",
        offerPrice:"2990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png",
        price:"5999",
        offerPrice:"2990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/IronScreeningClp122020.png",
        price:"990",
        offerPrice:"690",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/WomensHealthScreening_Magazine.png",
        price:"3490",
        offerPrice:"1690",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/PCODMagazineWeb.png",
        price:"2490",
        offerPrice:"1990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_clp.jpg",
        price:"590",
        offerPrice:"490",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/LipidScreening_Magazine.png",
        price:"690",
        offerPrice:"390",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png",
        price:"2990",
        offerPrice:"1390",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/CF01032_hero_2.png",
        offerPrice:"990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/PregnancyScreening_Magazine.png",
        price:"790",
        offerPrice:"590",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Kidney_Screening_clp.jpg",
        price:"490",
        offerPrice:"390",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/HairFallScreeningClp122019.png",
        price:"2990",
        offerPrice:"1290",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/BoneHealthScreening_Magazine.png",
        price:"1490",
        offerPrice:"990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Liver_Screening_clp.jpg",
        price:"690",
        offerPrice:"390",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FeverPanel_Magazine.jpg",
        price:"1990",
        offerPrice:"990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png",
        price:"2990",
        offerPrice:"1490",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/Anemia_Magazine_Web_new.png",
        offerPrice:"1990",
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Obesity_Risk_Magazine.jpg",
        price:"2990",
        offerPrice:"1390",
    },
];


data.forEach(function(el,i){
    let card = document.createElement("div");
    card.setAttribute("id","card");

    let img = document.createElement("img");
    img.setAttribute("id","cardImage");
    img.src = el.image;

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("id","priceDiv");

    let priceTag = document.createElement("p");
    priceTag.innerText = "Price";

    let price = document.createElement("div");
    price.setAttribute("id","price");
    price.innerText = `₹ ${el.price}`;

    priceDiv.append(priceTag,price);

    let offerPriceDiv = document.createElement("div");
    offerPriceDiv.setAttribute("id","offerPriceDiv");

    let offerPriceTag = document.createElement("p");
    offerPriceTag.innerText = "Offer Price";

    let offerPrice = document.createElement("div");
    offerPrice.setAttribute("id","offerPrice");
    offerPrice.innerText = `₹ ${el.offerPrice}`;

    priceDiv.append(priceTag,price);
    offerPriceDiv.append(offerPriceTag,offerPrice);

    card.append(img,priceDiv,offerPriceDiv);

    document.querySelector("#cards").append(card);

});







let datatwo = [
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
        price:"5999",
        offerPrice:"2990",
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png",
        price:"5999",
        offerPrice:"2990",
    },
]



// 
datatwo.forEach(function(el,i){
    let card = document.createElement("div");
    card.setAttribute("id","card2");

    let img = document.createElement("img");
    img.setAttribute("id","cardImage2");
    img.src = el.image;

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("id","priceDiv2");

    let priceTag = document.createElement("p");
    priceTag.innerText = "Price";

    let price = document.createElement("div");
    price.setAttribute("id","price2");
    price.innerText = `₹ ${el.price}`;

    priceDiv.append(priceTag,price);
    
    let offerPriceDiv = document.createElement("div");
    offerPriceDiv.setAttribute("id","offerPriceDiv2");

    let offerPriceTag = document.createElement("p");
    offerPriceTag.innerText = "Offer Price";

    let offerPrice = document.createElement("div");
    offerPrice.setAttribute("id","offerPrice2");
    offerPrice.innerText = `₹ ${el.offerPrice}`;

    priceDiv.append(priceTag,price);
    offerPriceDiv.append(offerPriceTag,offerPrice);

    card.append(img,priceDiv,offerPriceDiv);

    document.querySelector("#cardsSenior").append(card);

});
