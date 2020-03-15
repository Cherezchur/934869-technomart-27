      var link = document.querySelector(".contacts-form-button");

      var popup = document.querySelector(".user-form");
      var close = document.querySelector(".modal-close");

      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      var text = popup.querySelector("[name=text]")

      var isStorageSupport = true;
      var storage = "";

      var mapLink = document.querySelector(".contacts-button-map");
      var mapPopup = document.querySelector(".modal-map");
      var mapClose = mapPopup.querySelector(".modal-close");

      var cartLink = document.querySelectorAll(".button-buy");
      var cartPopup = document.querySelector(".cart-form-modal");
      var cartClose = cartPopup.querySelector(".modal-close");
      
      try {
        storage = localStorage.getItem("login");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener ("click", function (evt) {
          evt.preventDefault();
          popup.classList.add("modal-show");

          if (storage) {
            login.value = storage;
            email.focus();
          } else {
              login.focus();
          }
      });

      close.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        if (!login.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
          localStorage.setItem("login", login.value);
          };
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
        }
      })

      mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
        });

      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
        });

      cartLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
        });
  
      cartClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
        });