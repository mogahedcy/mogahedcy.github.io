// تبديل قائمة التنقل
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

// فتح المودال لعرض الصور
function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modalImg.src = src;
}

// إغلاق المودال
function closeModal() {
    document.getElementById("modal").style.display = "none";
}



// إظهار أو إخفاء زر الصعود بناءً على موضع التمرير
window.onscroll = function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// دالة الصعود إلى أعلى الصفحة
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
