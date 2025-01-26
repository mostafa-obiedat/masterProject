function toggleDetails() {
    const detailsContent = document.querySelector('.details-content');
    const toggleIcon = document.querySelector('.toggle-details-btn .arrow-icon');

    if (detailsContent.classList.contains('hidden')) {
        // عرض التفاصيل
        detailsContent.classList.remove('hidden');
        toggleIcon.innerHTML = '&uarr;'; // سهم للأعلى
    } else {
        // إخفاء التفاصيل
        detailsContent.classList.add('hidden');
        toggleIcon.innerHTML = '&darr;'; // سهم للأسفل
    }
}
