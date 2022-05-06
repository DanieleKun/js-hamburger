// Hamburger menu:
// mostrare / nascondere il menu principale (mobile)

const button = document.querySelector(".header-right > a > .fas.fa-bars"); 
const buttonClose = document.querySelector(".close");

button.addEventListener('click',

    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu active";
    }
);

buttonClose.addEventListener('click',

    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu";
    }
);
