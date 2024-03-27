// import '../styles/main.scss';

document.addEventListener("DOMContentLoaded", () => {
  const learnMoreButton = document.querySelector(".hero button");
  learnMoreButton.addEventListener("click", () => {
    document.querySelector(".contacts").scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addressDiv = document.querySelector(".addressContainer__address");
  var copyIcon = addressDiv.querySelector(".fa-copy");

  addressDiv.addEventListener("click", function () {
    var textArea = document.createElement("textarea");
    textArea.value = addressDiv.textContent.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    copyIcon.classList.add("copied");
    setTimeout(function () {
      copyIcon.classList.remove("copied");
    }, 1000);
  });
});
