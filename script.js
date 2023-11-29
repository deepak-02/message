const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the next saturday";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Why!!??";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnBya3k5eTh5aWVveXNoNTZuOWZqYXJkcHUycDNkbW45NGFycTd4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AsL3dRShYSDSRArGhW/giphy.gif";
});