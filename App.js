if ("serviceWorker" in navigator) {
  console.log("found serviceWorker");
  navigator.serviceWorker
    .register("/ServiceWorker.js")
    .then((reg) => console.log("serviceWorker registered", reg))
    .catch((err) => console.log("serviceWorker NOT registered", err));
}
