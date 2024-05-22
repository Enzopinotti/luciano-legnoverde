function setFavicon() {
  const favicon = document.getElementById('favicon');
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    favicon.href = '/favicon-dark.webp';
  } else {
    favicon.href = '/favicon-light.webp';
  }
}

setFavicon();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
