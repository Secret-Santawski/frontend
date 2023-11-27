document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("main").classList.add("scaleIn");

  document.querySelectorAll(".config").forEach((el) =>
    el.addEventListener("click", function () {
      document.querySelector("body").classList.add("overflow-hidden");
      document
        .querySelector("html")
        .classList.add("loadingOut", "overflow-hidden");
      setTimeout(
        () =>
          (window.location.href = `../${this.getAttribute("data-navigate")}`),
        1500
      );
    })
  );
  document.getElementById("xmasButton").addEventListener("click", () => {
    document.querySelector("body").classList.add("overflow-hidden");
    document
      .querySelector("html")
      .classList.add("loadingOut", "overflow-hidden");
    setTimeout(() => (window.location.href = "./chooseConfig"), 1500);
  });
  setTimeout(() => {
    document.querySelector("html").classList.add("loadingIn");
    setTimeout(() => {
      document.querySelector("body").classList.add("overflow-auto");
      document.querySelector("body").classList.remove("overflow-hidden");
      document
        .querySelectorAll("#decoration img")[0]
        .classList.add("opacityIn");
      document
        .querySelectorAll("#decoration img")[1]
        .classList.add("opacityIn");
      setTimeout(() => {
        //attivo animazione illustrazioni laterali
        document
          .querySelectorAll("#decoration img")[0]
          .classList.add("animationBackground");
        document
          .querySelectorAll("#decoration img")[1]
          .classList.add("animationBackground");
      }, 500);
    }, 1000);
  }, 1);
});
