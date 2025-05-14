if (sessionStorage.getItem('visitCount')) {
  let count = parseInt(sessionStorage.getItem('visitCount'));
  sessionStorage.setItem('visitCount', count + 1);
} else {
  sessionStorage.setItem('visitCount', 1);
}