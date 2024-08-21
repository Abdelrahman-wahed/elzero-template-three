let scoroll = document.querySelector(".scoroller");
let heeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scorllTop = document.documentElement.scrollTop;
  scoroll.style.width = `${(scorllTop / heeight) * 100}%`;
});

let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let skill = document.querySelector(".our-skills");
let spanProgress = document.querySelectorAll(".progress span");
let stat = document.querySelector(".stat");
var spanbox = document.querySelectorAll(`.stat .box [data-goal]`);

window.onscroll = () => {
  if (window.scrollY >= skill.offsetTop - 100) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= stat.offsetTop - 250) {
    spanbox.forEach((span) => {
      let i = 1;
      setInterval(() => {
        if (i <= span.dataset.goal) {
          span.textContent = i;
          i++;
        }
      }, 10);
    });
  }
};
