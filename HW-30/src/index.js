const emojiButtonElement = document.querySelectorAll(".emoji-btn");
const likesCountElement = document.querySelectorAll(".likes-count");

const handleClick = (event) => {
  const target = event.target;
  const likesCountElement = target.parentElement.querySelector(".likes-count");
  likesCountElement.innerHTML = (
    parseInt(likesCountElement.innerHTML, 10) + 1
  ).toString();
};

emojiButtonElement.forEach((emoji) => {
  emoji.addEventListener("click", handleClick);
});
