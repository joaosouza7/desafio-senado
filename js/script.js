var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

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

/* --------- MENU ------------- */

const sidebar = document.querySelector(".sidebar");
const btnSidebar = document.querySelector(".btn-sidebar");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const submenuTitles = document.querySelectorAll(".submenu .menu-title");

function toggleMenu() {
    sidebar.classList.toggle("sidebar-active");
}

document.onclick = (e) => {
    if (!btnSidebar.contains(e.target) && !sidebar.contains(e.target)) {
        sidebar.classList.remove("sidebar-active");
    }
};

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
