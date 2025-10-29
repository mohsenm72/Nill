// اسکرول نرم به بخش تماس با من
function scrollToContact() {
  const contactSection = document.querySelector(".contact");
  contactSection.scrollIntoView({ behavior: "smooth" });

  // کمی تأخیر برای افکت ظاهر شدن
  setTimeout(() => {
    contactSection.classList.add("visible");
  }, 400);
}
