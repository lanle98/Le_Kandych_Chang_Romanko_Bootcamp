import Team from "./modules/member_object.js";

(() => {
  const members = document.querySelector(".members");
  const bio_wrapper = document.querySelector(".bio-wrapper").children;
  const bio = document.querySelector(".bio-wrapper");
  const close_popup = document.querySelector(".bio-wrapper span");

  function showProfData() {
    bio.style.display = "flex";
    const currentProf = this.className.slice(7);
    console.log(currentProf);

    bio_wrapper[1].src = `images/${Team[currentProf].popup}`;
    bio_wrapper[3].textContent = `${Team[currentProf].bio}`;
  }

  function closePopup() {
    bio.style.display = "none";
  }

  for (let prof in Team) {
    console.log("aaa:" + prof);

    let member = document.createElement("div");
    let member_name = document.createElement("div");

    member.className = `member ${prof}`;
    members.appendChild(member);
    member.innerHTML = `<img class="potrait" src=images/${Team[prof].avatar}.jpg>`;
    member_name.className = "member-name";
    member.appendChild(member_name);
    member_name.innerHTML = `<h4>${Team[prof].name}</h4>`;
    member.innerHTML += "<div class=member-social>";

    let member_social = document.querySelectorAll(".member-social");
    member_social.forEach(
      e =>
        (e.innerHTML =
          `<a href="https://www.facebook.com/"><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
          `<a href="https://www.facebook.com/"><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
          `<a href="https://www.facebook.com/"><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
          `<a href="https://www.facebook.com/"><img src="images/social_media/instagram.svg" alt="instagram"></a>`)
    );

    member.addEventListener("click", showProfData);
  }

  close_popup.addEventListener("click", closePopup);
})();
