const menu = document.getElementById("main_menu");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function() {

    if (menu.classList.contains("menu--open")) {
        menu.classList.remove("menu--open");
        toggle.classList.remove("open");
        menu.classList.add("menu--closed");
    }
    else {
        menu.classList.remove("menu--closed");
        toggle.classList.add("open");
        menu.classList.add("menu--open");
    }
})



// menu.addEventListener("click", function() {
//     if (menu.classList.contains("menu--open")){
//         menu.classList.remove("menu--open");
//         toggle.classList.remove("open");
//         menu.classList.add("menu--closed");
//     }
//     else {
//         menu.classList.remove("menu--closed");
//         toggle.classList.add("closed");
//         menu.classList.add("menu--open");
//     }
// });
