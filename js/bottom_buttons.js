var topButton = document.getElementById("homeBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (topButton.style.display !== "block") {
      fadeIn(topButton);
    }
  } else {
    if (topButton.style.display !== "none") {
      fadeOut(topButton);
    }
  }
}

function fadeIn(element) {
  var op = 0.1;  
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += op * 0.1;
  }, 10);
}

function fadeOut(element) {
  var op = 1; 
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    op -= op * 0.1;
  }, 10);
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var darkTheme = false;

function changeTheme() {
  var body = document.body;
  var themeIcon = document.getElementById('themeIcon');
  if (darkTheme) {
    body.style.backgroundColor = 'white';
    body.classList.remove('dark-theme');
    themeIcon.textContent = '🌙'; // Moon icon for light theme
    darkTheme = false;
  } else {
    body.style.backgroundColor = '#313131';
    themeIcon.textContent = '☀'; // Sun icon for dark theme
    body.classList.add('dark-theme');
    darkTheme = true;
  }
}

