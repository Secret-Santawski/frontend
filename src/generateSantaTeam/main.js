document.addEventListener("DOMContentLoaded", function () {
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

  // Insert new chip
  $("#category-input").keyup(function(event) {
    var data = this.value;
    if (event.keyCode === 13) {
      //alert(data);
      $( '<div class="chip"> '+data+' <span class="closeCat" >&times;</span></div>' ).insertBefore(this);
      $(this).val(null);
    }
  });

  // Remove chip
  $(document).on('click','.closeCat',function() {
  //alert('test');
  $(this).parent().remove();
  });
});
