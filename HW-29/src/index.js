// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const link = { href: "" };

function enterUrl(event) {
  link.href = prompt("Enter the URL you want to go to:").trim();

  if (!link.href) {
    alert("Please, reload page and enter the URL");
  } else {
    if (!link.href.includes("http://") && !link.href.includes("https://")) {
      link.href = "https://" + link.href;
    }

    alert(`Your entered for visiting this link:\n ${link.href}`);
  }
}

function redirect(event) {
  if (link.href) {
    window.open(link.href, "_blank");
  } else {
    alert("Please enter a URL");
  }
}

const enterBtn = document.querySelector("#enter-button");
enterBtn.addEventListener("click", enterUrl, { once: true });

const redirectBtn = document.querySelector("#redirect-button");
redirectBtn.addEventListener("click", redirect, { once: true });
