/* 粗體誌 BOLDFACE — 互動腳本 */
(function () {
  "use strict";

  // 行動版選單開關
  var toggle = document.querySelector(".navtoggle");
  var menu = document.getElementById("primary-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 頁尾年份
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // 投稿 / 訂閱表單(前端示範,無後端)
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-msg");
      if (msg) {
        msg.textContent = "已收到!粗體誌編輯部會在三個工作日內回覆。(此為作品集示範表單)";
        msg.style.display = "block";
      }
      form.reset();
    });
  });
})();
