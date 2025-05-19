// import check from '../assets/check.svg'
// import star from '../assets/star.svg'
import sushi12 from '../assets/assets/sushi-12.png'
import sushi11 from '../assets/assets/sushi-11.png'
import sushi10 from '../assets/assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

// Menu Dropdown

document.addEventListener("DOMContentLoaded",function(){
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const hiddenMenu = document.getElementById("mobile-dropdown");
    const menuIcon = document.getElementById("menu-icon")

    if (toggleBtn && hiddenMenu) {
        toggleBtn.addEventListener("click", () => {
            hiddenMenu.classList.toggle("hidden");
            if(hiddenMenu.classList.contains("hidden")){
                menuIcon.src = "assets/assets/menu.svg"
            }else{
                menuIcon.src = "assets/assets/close.svg"
            }
        });
        document.addEventListener("click", function (e) {
            if (!toggleBtn.contains(e.target) && !hiddenMenu.contains(e.target)) {
                hiddenMenu.classList.add("hidden");
            }
        });
    }
})