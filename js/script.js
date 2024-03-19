/************* SWIPER WEB STORIES *************/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/************* SWIPER GALLERY *************/
var swiper = new Swiper(".swiperGallery", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/************* HEADER MENU *************/

/************* SHOW MENU *************/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
        // Add show-menu class to nav menu
        nav.classList.toggle("show-menu");

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle("show-icon");
    });
};

showMenu("nav-toggle", "nav-menu");

/************* SIDEBAR MENU VARS *************/
const sidebar = document.querySelector(".sidebar");
const btnSidebar = document.querySelector(".btn-sidebar");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const submenuTitles = document.querySelectorAll(".submenu .menu-title");

/************* SHOW SIDEBAR *************/
function toggleMenu() {
    sidebar.classList.toggle("sidebar-active");
}

/************* CLOSE SIDEBAR *************/
document.onclick = (e) => {
    if (!btnSidebar.contains(e.target) && !sidebar.contains(e.target)) {
        sidebar.classList.remove("sidebar-active");
    }
};

/************* SUBMENU SIDEBAR ITEMS *************/
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        menu.classList.add("submenu-active");
        item.classList.add("show-submenu");
        menuItems.forEach((item2, index2) => {
            if (index !== index2) {
                item2.classList.remove("show-submenu");
            }
        });
    });
});

submenuTitles.forEach((title) => {
    title.addEventListener("click", () => {
        menu.classList.remove("submenu-active");
    });
});
