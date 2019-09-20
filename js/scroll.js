(() => {
  const scrollTo = document.querySelectorAll(".scrollTo");
  console.log("aa", scrollTo.textContent);

  scrollTo.forEach(e => e.addEventListener("click", scrollto));

  function scrollToBio() {
    TweenLite.to(window, 0.5, {
      scrollTo: { y: `.bio-wrapper`, offsetY: 20 }
    });
  }

  function scrollto() {
    TweenLite.to(window, 0.5, {
      scrollTo: { y: `.${this.textContent}`, offsetY: 0 }
    });
  }
})();
