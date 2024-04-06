var topButton = document.getElementById("homeBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
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