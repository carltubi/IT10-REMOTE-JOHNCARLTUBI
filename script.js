if (sessionStorage.getItem('visitCount')) {
  let count = parseInt(sessionStorage.getItem('visitCount'));
  sessionStorage.setItem('visitCount', count + 1);
} else {
  sessionStorage.setItem('visitCount', 1);
}

let count = localStorage.getItem('visitCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitCount', count);
    document.getElementById('visit-count').textContent = `This page has been visited ${count} times.`;