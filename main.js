const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

//FAQ

$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a span").removeClass("minus").addClass("plus");
        } else {
            $(".set > a span").removeClass("minus").addClass("plus");
            $(this).find("span").removeClass("plus").addClass("minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });
});


var parentTitleAcc = document.querySelector('.sn-accordion-container');
var titleAcc = document.querySelector('.sn-accordion-container a');

titleAcc.onclick = function (e) {
    e.preventDefault();
    var target = e.target;

    if (target.titleAcc != 'a') return;

    highlight(target);
};