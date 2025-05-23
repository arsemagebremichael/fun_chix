window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) { // Change the '100' value to your desired scroll threshold
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });