var timeline = document.querySelector('.timeline');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

observer.observe(timeline);