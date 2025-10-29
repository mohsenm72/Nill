document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("change-bg");

  // لیست عکس‌های پس‌زمینه
  const backgrounds = [
    "img/me.jpg",
    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.jpg"
  ];

  let current = 0;
  const body = document.body;
  const fadeTime = 800; // مدت محو شدن (میلی‌ثانیه)
  const intervalTime = 3000; // هر چند وقت یک‌بار بک‌گراند عوض بشه (3 ثانیه)

  // تابع تغییر پس‌زمینه با افکت نرم
  function changeBackground() {
    body.classList.add("fade-out");
    setTimeout(() => {
      current = (current + 1) % backgrounds.length;
      body.style.backgroundImage = `url("${backgrounds[current]}")`;
      body.classList.remove("fade-out");
    }, fadeTime);
  }

  // دکمه تغییر بک‌گراند
  btn.addEventListener("click", changeBackground);

  // تغییر خودکار با زمان مشخص
  setInterval(changeBackground, intervalTime);
});
