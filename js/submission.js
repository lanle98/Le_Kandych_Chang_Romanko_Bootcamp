(() => {
  const send = document.querySelector(".send");
  const back = document.querySelector(".back");
  const submission = document.querySelector(".submission");
  let body = document.querySelector("body");

  //submission function
  send.addEventListener("click", function() {
    submission.classList.toggle("thank-you");
    TweenLite.to(window, 0.5, {
      scrollTo: { y: ".submission", offsetY: 20 }
    });
    body.classList.toggle("overflow");
  });

  //back to page function
  back.addEventListener("click", function() {
    submission.classList.toggle("thank-you");
    body.classList.remove("overflow");
  });
})();
