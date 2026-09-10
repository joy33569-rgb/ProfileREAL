// =========================================================
// MY PROFILE — สคริปต์กลาง ใช้ร่วมกันทุกหน้า
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- ไฮไลต์เมนูที่กำลังเปิดอยู่ ----------
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });

  // ---------- ฟอร์มติดต่อ (จำลองการส่ง ยังไม่เชื่อมต่อ backend จริง) ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const alertBox = document.getElementById('formAlert');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      contactForm.reset();
    });
  }

});
