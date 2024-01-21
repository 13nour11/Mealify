// Variables
// variables for funcion-1
let body = document.querySelector("body"),
    iconBtn = document.querySelector(".navbar .icon-light i"),
    zigzagImgs = document.querySelectorAll(".chefs .inner-card .image");
    // variables for funcion-2
    navlinks = document.querySelectorAll(".navbar .nav-links a"),

    // variables for funcion-3
    menuBtn = document.querySelector(".menu"),
    menuList = document.querySelector(".nav-links"),
    linksList = document.querySelector(".navbar .nav-links ul"),
    nav = document.querySelector(".navbar"),
    crossIcon = document.querySelector(".navbar .nav-links i");




// function to dark mode
iconBtn.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    iconBtn.classList.toggle("fa-moon");
    iconBtn.classList.toggle("fa-gear");

    if(iconBtn.classList.contains("fa-gear")){
        zigzagImgs.forEach(zigzagImg => {
            zigzagImg.classList.add("active");
        });
    }
    else{
        zigzagImgs.forEach(zigzagImg => {
            zigzagImg.classList.remove("active");
        });
    }
});


// function to add click event listener to navbar links to toggle the "active" class
navlinks.forEach(navlink => {
    navlink.addEventListener("click", () => {
        // Remove "active" class from all links
        navlinks.forEach(link => link.classList.remove("active"));
        // Add "active" class to the clicked link
        navlink.classList.add("active");

        // Close the menu by toggling classes
        // menuList.style.opacity = "0";
        linksList.classList.remove("menu-links");
        nav.classList.remove("active");
        crossIcon.style.display = "none";
    });
});


// function to add click event listener to the menu button
menuBtn.addEventListener("click", () => {
    // Check the current opacity of the menuList
    let currentOpacity = parseFloat(window.getComputedStyle(menuList).getPropertyValue("opacity"));

    // Toggle the opacity between 0 and 1
    menuList.style.opacity = currentOpacity === 0 ? "1" : "1"; /* 0 */



    // Toggle the "menu-links" class on the linksList
    linksList.classList.add("menu-links");

    

    // Toggle the "active" class on the navbar (for overlay or other styling)
    nav.classList.toggle("active");

    navlinks.forEach(link =>{
        link.classList.remove("active");
    });

});
