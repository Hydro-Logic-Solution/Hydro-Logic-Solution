// Progressive enhancement for forms wired to a form backend (e.g. Formspree).
// Without this script, forms still work as plain HTML POSTs (set an action URL).
// With it, submission happens over fetch so the page doesn't reload.
document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll("form[data-ajax]");

  forms.forEach(function (form) {
    var status = form.querySelector(".form-status");
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var action = form.getAttribute("action") || "";
      if (!action || action.indexOf("YOUR_FORM_ID") !== -1) {
        setStatus(status, "error", "Form backend isn't configured yet — set the form's action to your Formspree endpoint.");
        return;
      }

      setStatus(status, null, "Sending…");
      if (submitBtn) submitBtn.disabled = true;

      fetch(action, {
        method: form.getAttribute("method") || "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            setStatus(status, "success", "Thanks — we'll be in touch shortly.");
            return;
          }
          return response.json().then(function (data) {
            var message =
              data && data.errors && data.errors.length
                ? data.errors.map(function (e) { return e.message; }).join(", ")
                : "Something went wrong. Please try again.";
            setStatus(status, "error", message);
          });
        })
        .catch(function () {
          setStatus(status, "error", "Something went wrong. Please check your connection and try again.");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });

  function setStatus(el, state, text) {
    if (!el) return;
    el.hidden = false;
    el.textContent = text;
    if (state) {
      el.setAttribute("data-state", state);
    } else {
      el.removeAttribute("data-state");
    }
  }
});
