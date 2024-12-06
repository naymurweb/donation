document
  .getElementById("noakhali-donate")
  .addEventListener("click", function () {
    donate(
      "noakhali-input",
      "donate-noakali",
      "noakhali-donate",
      "noakhali-title"
    );
  });

document.getElementById("feni-donate").addEventListener("click", function () {
  donate("feni-input", "donate-feni", "feni-donate", "feni-title");
});

document.getElementById("aid-donate").addEventListener("click", function () {
  donate("aid-input", "donate-aid", "aid-donate", "aid-title");
});

// button handel
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const main = document.getElementById("main");
const history = document.getElementById("con");

donationBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.target.classList.add("bg-primary");
  historyBtn.classList.remove("bg-primary");
  main.classList.remove("hidden");
  history.classList.add("hidden");
});
historyBtn.addEventListener("click", function (e) {
  main.classList.add("hidden");
  e.target.classList.add("bg-primary");
  donationBtn.classList.remove("bg-primary");
  history.classList.remove("hidden");
});
