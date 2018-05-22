const cookieBtn = document.querySelector('.cookie__btn');

const cookie = document.querySelector('.cookie');

function closeBtn() {
  cookie.style.display = 'none';
  localStorage.cookies_accepted = true; 
}

function checkCookie() {
  if(!localStorage.cookies_accepted) {
    cookie.style.display = 'block';
  } else {
    cookie.style.display = 'none';
  }
}

cookieBtn.addEventListener('click', closeBtn, false);

window.addEventListener('load', checkCookie)