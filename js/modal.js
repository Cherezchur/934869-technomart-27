var link = document.querySelector(".contacts-form-button");

    var popup = document.querySelector(".user-form");
    var close = document.querySelector(".modal-close");

    var form = popup.querySelector("form");
    var name = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
    var text = popup.querySelector("[name=text]")

    link.addEventListener ("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
      if (!name.value || !email.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин, пароль и текст письма")
      }
    });