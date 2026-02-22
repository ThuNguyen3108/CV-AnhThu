// Mobile nav toggle
var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav-toggle');
var dropdownTrigger = document.querySelector('.nav-dropdown-trigger');

navToggle && navToggle.addEventListener('click', function () {
  nav.classList.toggle('open');
  if (dropdownTrigger) dropdownTrigger.setAttribute('aria-expanded', 'false');
});

// Dropdown: toggle on trigger click (mobile + a11y)
dropdownTrigger && dropdownTrigger.addEventListener('click', function (e) {
  e.preventDefault();
  var expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
});

// Close nav when clicking a link (mobile)
document.querySelectorAll('.nav-links a, .nav-dropdown-menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    if (dropdownTrigger) dropdownTrigger.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll for anchor links (fallback if CSS scroll-behavior not enough)
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = this.getAttribute('href');
    if (id === '#') return;
    var el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Experience timeline: scroll-driven line (filled = đã scroll, dashed = chưa) + active color per item
(function () {
  var section = document.getElementById('experience');
  var lineFilled = document.getElementById('timeline-line-filled');
  var items = document.querySelectorAll('.timeline-item');

  function updateTimeline() {
    if (!section || !lineFilled) return;

    var rect = section.getBoundingClientRect();
    var sectionTop = rect.top + window.scrollY;
    var sectionHeight = section.offsetHeight;
    var scrollY = window.scrollY;
    var viewportHeight = window.innerHeight;

    // Phần đã scroll qua: line xanh = từ đầu section tới vị trí viewport đang xem
    var filled = (scrollY - sectionTop + viewportHeight) / (sectionHeight + viewportHeight);
    filled = Math.min(1, Math.max(0, filled));
    lineFilled.style.height = (filled * 100) + '%';
  }

  function updateActiveItems() {
    var viewportMid = window.innerHeight * 0.45;
    items.forEach(function (item) {
      var rect = item.getBoundingClientRect();
      if (rect.top < viewportMid) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function onScroll() {
    updateTimeline();
    updateActiveItems();
  }

  if (section && lineFilled) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }
})();
