// script.js
function respond(yes) {
  if (yes) {
      confetti();
      setTimeout(() => {
          window.location.href = "yes.html";
      }, 1000);
  } else {
      window.location.href = "no.html";
  }
}
