console.log("Website is running");
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://duckduckgo.com/?q=';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);