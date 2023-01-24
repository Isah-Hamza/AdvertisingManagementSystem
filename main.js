const catBtns = [...document.querySelectorAll(".cat-btns button")];

catBtns?.forEach((btn) => {
  btn.addEventListener("click", () => {
    catBtns.forEach((innerBtn) => innerBtn.classList.remove("active"));
    btn.classList.add("active");
  });
});
