var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//sticky scroll effect
window.onscroll = function () {
  stickyFunction();
};
const stickyFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".header").className = "header sticky-header";
    // document.getElementsByClassName("header")[0].className =
    //   "header sticky-header";
  } else {
    document.querySelector(".header").className = "header";
  }
};

//Features section.
let overlay = document.querySelectorAll(".overlay");

for (let i = 0; i <= overlay.length - 1; i++) {
  //visible event.
  overlay[i].addEventListener("mouseover", (e) => {
    e.target.parentNode.children[3].style.visibility = "visible";

    e.target.parentNode.children[3].addEventListener("mouseover", () => {
      e.target.parentNode.children[3].style.visibility = "visible";
    });
  });

  //Hide event.
  overlay[i].addEventListener("mouseout", (e) => {
    e.target.parentNode.children[3].style.visibility = "hidden";
  });
}

//Trainers section
let trainersDetails = document.querySelectorAll(".trainer-details");
let trainers = document.querySelectorAll(".training");

//unhide and hide trainer details
for (let i = 0; i <= trainers.length - 1; i++) {
  //unhide
  trainers[i].addEventListener("mouseover", (e) => {
    trainersDetails[i].style.height = "100%";
    trainersDetails[i].style.transition =
      "height 0.5s ease-in, opacity 0.5s ease-in";
    trainersDetails[i].style.opacity = "1";
  });
  //Hide on mouse out
  trainers[i].addEventListener("mouseout", (e) => {
    trainersDetails[i].style.opacity = "0";
    trainersDetails[i].style.height = "80px";
    trainersDetails[i].style.transition =
      "height 0.5s ease-out, opacity 0.5s ease-out";
  });
}