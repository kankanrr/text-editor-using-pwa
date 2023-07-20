const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("hit");
  console.log("event" + event);
  event.preventDefault();
  window.defrredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.defrredPrompt;
  if (!promptEvent) return;
  promptEvent.prompt();
  window.defrredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // prompt clearing
  console.log("install hit");
  window.defrredPrompt = null;
});
