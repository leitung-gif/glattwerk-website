/* Glattwerk «Champagne» — Verhalten: Header, Reveals, Slider, Tabs, Parallax */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header-Zustand + Parallax auf dem Hero-Wort */
  var hd = document.querySelector('.site-header');
  var heroWord = document.querySelector('[data-hero-word]');
  window.addEventListener('scroll', function () {
    if (hd) hd.classList.toggle('solid', window.scrollY > 40);
    if (heroWord && !reduced) heroWord.style.transform = 'translateY(' + Math.min(window.scrollY * 0.18, 140) + 'px)';
  }, { passive: true });

  /* Mobile-Menü: öffnen/schliessen mit Scroll-Lock */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.site-nav');
  function closeNav() { if (nav) { nav.classList.remove('open'); document.body.style.overflow = ''; if (burger) burger.setAttribute('aria-expanded', 'false'); } }
  if (burger && nav) {
    burger.addEventListener('click', function () { nav.classList.add('open'); document.body.style.overflow = 'hidden'; burger.setAttribute('aria-expanded', 'true'); });
    var closeBtn = nav.querySelector('.nav-close');
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
  }

  /* Scroll-Reveals — Above-the-fold sofort */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.rv').forEach(function (el) {
    if (!io || el.getBoundingClientRect().top < window.innerHeight * 1.05) { el.classList.add('in'); }
    else io.observe(el);
  });

  /* Vorher/Nachher-Slider: Composite-Bild (links=vorher, rechts=nachher) in zwei Layer */
  document.querySelectorAll('.ba[data-img]').forEach(function (ba) {
    var img = ba.getAttribute('data-img');
    var before = document.createElement('div'); before.className = 'layer before'; before.style.backgroundImage = 'url(' + img + ')';
    var after = document.createElement('div'); after.className = 'layer after'; after.style.backgroundImage = 'url(' + img + ')';
    var divider = document.createElement('div'); divider.className = 'divider';
    var handle = document.createElement('div'); handle.className = 'handle'; handle.textContent = '⇄';
    var range = document.createElement('input'); range.type = 'range'; range.min = 0; range.max = 100; range.value = 50;
    range.setAttribute('aria-label', 'Vorher-Nachher-Vergleich');
    ba.prepend(divider); ba.prepend(after); ba.prepend(before); ba.append(handle); ba.append(range);
    function set(v) { after.style.clipPath = 'inset(0 0 0 ' + v + '%)'; divider.style.left = v + '%'; handle.style.left = v + '%'; }
    range.addEventListener('input', function () { set(range.value); });
    set(50);
  });

  /* Preis-Tabs */
  document.querySelectorAll('.tabbar button').forEach(function (b) {
    b.addEventListener('click', function () {
      b.closest('.tabbar').querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
      var root = b.closest('[data-pricelist]') || document;
      root.querySelectorAll('.pricebook').forEach(function (p) {
        p.classList.toggle('on', p.getAttribute('data-tab') === b.getAttribute('data-tab'));
      });
      root.querySelectorAll('.pricebook.on .rv').forEach(function (el) { el.classList.add('in'); });
    });
  });
})();
