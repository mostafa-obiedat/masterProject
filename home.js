// document.addEventListener('DOMContentLoaded', function () {
//     const carousel = document.querySelector('#workshopCarousel');
//     const carouselItems = document.querySelectorAll('.carousel-item');

//     carousel.addEventListener('slid.bs.carousel', function (event) {
//         // إزالة الفئة النشطة من جميع البطاقات
//         carouselItems.forEach((item) => item.classList.remove('active'));
//         // إضافة الفئة النشطة للبطاقة النشطة الحالية
//         const activeItem = event.relatedTarget;
//         activeItem.classList.add('active');
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("mainNavbar");
    var heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSection.offsetHeight / 2) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
