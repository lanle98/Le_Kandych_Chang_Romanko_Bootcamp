import Team from "./modules/member_object.js";

(() => {
  const members = document.querySelector(".members");
  const bio = document.querySelector(".bio-wrapper");
  const close_popup = document.querySelector(".bio-wrapper span");
  const avatar = document.querySelector(".bio-wrapper img");
  const info = document.querySelector(".info").children;
  const blurry = document.querySelector(".blurry_background");

  //scroll to pop up window function
  function scrollToBio() {
    TweenLite.to(window, 0.5, {
      scrollTo: { y: `.bio-wrapper`, offsetY: 20 }
    });
  }

  //show bio data function
  function showProfData() {
    bio.style.display = "flex";

    //slice the class of each member so it will appear their object name
    const currentProf = this.className.slice(7);
    console.log(currentProf);

    //adding value into pop up window
    avatar.src = `images/popup_avatar/${Team[currentProf].popup}`;
    info[0].textContent = `${Team[currentProf].name}`;
    info[1].textContent = `${Team[currentProf].bio}`;

    //adding social media to pop up window
    document.querySelector(".member-social").innerHTML =
      `<a href='${Team[currentProf].linkedin}'><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
      `<a href='${Team[currentProf].twitter}'><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
      `<a href='${Team[currentProf].facebook}'><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
      `<a href='${Team[currentProf].instagram}'><img src="images/social_media/instagram.svg" alt="instagram"></a>`;
    scrollToBio();

    blurry.style.display = "block";
  }

  //close pop up window function
  function closePopup() {
    bio.style.display = "none";
    blurry.style.display = "none";
  }

  //loop through object
  for (let prof in Team) {
    console.log("aaa:" + prof);

    //declare varibles for bio window
    let member = document.createElement("div");
    let member_name = document.createElement("div");
    let member_social = document.createElement("div");

    //add class to var
    member.className = `member ${prof}`;
    member_name.className = "member-name";
    member_social.className = "member-social";

    //append into DOM

    //adding img and names
    member.innerHTML = `<img class="potrait" src=images/avatar/${Team[prof].avatar}.jpg>`;
    member_name.innerHTML = `<h4>${Team[prof].name}</h4>`;

    members.appendChild(member);
    member.appendChild(member_name);
    member.appendChild(member_social);

    console.log(member_social);

    //adding social media for each member
    member_social.innerHTML =
      `<a href='${Team[prof].linkedin}'><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
      `<a href='${Team[prof].twitter}'><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
      `<a href='${Team[prof].facebook}'><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
      `<a href='${Team[prof].instagram}'><img src="images/social_media/instagram.svg" alt="instagram"></a>`;

    //click event to show bio
    member.addEventListener("click", showProfData);
  }

  //click event to close popup window
  close_popup.addEventListener("click", closePopup);
})();
