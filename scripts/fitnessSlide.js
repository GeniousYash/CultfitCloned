var dataslider=[
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/6d630057-1def-477f-8f56-c268b64198ed",
        Pname:"Rahul Shetty",
        name:"Cardio HEAT",
        para:"CARDIO • INTERMEDIATE • 30 Min",
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/54a5ff17-5671-4bb5-890a-3f2bf197a625",
        Pname:"Deeksha K",
        name:"Dance Fitness Xpress",
        para:"DANCE • BEGINNER • 30 Min",
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/23b8f540-48d1-4bd5-861b-cb196df7847f",
        Pname:"Shwetha Rahul",
        name:"Power Yoga",
        para:"YOGA • BEGINNER • 30 Min",
    },
];

dataslider.forEach(function(el){
    let card = document.createElement("div");
    card.setAttribute("id","cardslider");

    let pimg = document.createElement("img");
    pimg.setAttribute("id","pimg");
    pimg.src = el.image;

    let divtext = document.createElement("div");
    divtext.setAttribute("id","divtext");

    let p1 = document.createElement("p");
    p1.setAttribute("id","p1text");
    p1.innerText = el.Pname;

    let h2 = document.createElement("h2");
    h2.setAttribute("id","h2text");
    h2.innerText = el.name;

    let p2 = document.createElement("p");
    p2.setAttribute("id","p2text");
    p2.innerText = el.para;

    let button = document.createElement("button");
    button.setAttribute("id","buttonbook");
    button.innerText = ` Book`;

    
    divtext.append(p1,h2,p2,button);

    card.append(pimg,divtext);

    document.querySelector("#slidercardImg").append(card);
});