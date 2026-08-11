const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
