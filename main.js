// Hamburger menu:
// mostrare / nascondere il menu principale (mobile)

const button = document.querySelector(".fas");

button.addEventListener('click',

    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu active";
    }
);

const buttonClose = document.querySelector(".close");

buttonClose.addEventListener('click',

    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu";
    }
);