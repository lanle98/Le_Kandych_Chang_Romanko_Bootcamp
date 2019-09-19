import Team from "./modules/member_object.js";

(() => {
  const members = document.querySelector(".members");
  const bio = document.querySelector(".bio-wrapper");
  const close_popup = document.querySelector(".bio-wrapper span");
  const avatar = document.querySelector(".bio-wrapper img");
  const info = document.querySelector(".info").children;

  function showProfData() {
    bio.style.display = "flex";
    const currentProf = this.className.slice(7);

    console.log(currentProf);
    avatar.src = `images/popup_avatar/${Team[currentProf].popup}`;
    info[0].textContent = `${Team[currentProf].name}`;
    info[1].textContent = `${Team[currentProf].bio}`;

    document.querySelector(".member-social").innerHTML =
      `<a href='${Team[currentProf].linkedin}'><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
      `<a href='${Team[currentProf].twitter}'><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
      `<a href='${Team[currentProf].facebook}'><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
      `<a href='${Team[currentProf].instagram}'><img src="images/social_media/instagram.svg" alt="instagram"></a>`;
  }

  function closePopup() {
    bio.style.display = "none";
  }

  for (let prof in Team) {
    console.log("aaa:" + prof);

    let member = document.createElement("div");
    let member_name = document.createElement("div");
    let member_social = document.createElement("div");

    member.className = `member ${prof}`;
    members.appendChild(member);
    member.innerHTML = `<img class="potrait" src=images/avatar/${Team[prof].avatar}.jpg>`;
    member_name.className = "member-name";
    member.appendChild(member_name);
    member_name.innerHTML = `<h4>${Team[prof].name}</h4>`;
    member.appendChild(member_social);
    member_social.className = "member-social";

    console.log(member_social);

    member_social.innerHTML =
      `<a href='${Team[prof].linkedin}'><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
      `<a href='${Team[prof].twitter}'><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
      `<a href='${Team[prof].facebook}'><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
      `<a href='${Team[prof].instagram}'><img src="images/social_media/instagram.svg" alt="instagram"></a>`;

    member.addEventListener("click", showProfData);
  }

  close_popup.addEventListener("click", closePopup);
})();
