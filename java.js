const navList = document.getElementById('mainNavList');
function setNav(open, btn) {
  navList.classList.toggle('open', open);
  if (btn) btn.setAttribute('aria-expanded', open);
}
document.getElementById('navToggle').addEventListener('click', function() { setNav(!navList.classList.contains('open'), this); });
document.getElementById('navToggleMobile').addEventListener('click', function() { setNav(!navList.classList.contains('open'), this); });
document.addEventListener('click', function(e) {
  if (!e.target.closest('nav.main-nav') && !e.target.closest('#navToggle'))
    setNav(false, document.getElementById('navToggle'));
});

/* LOGO PER IL MOBILE */
function checkMobile() {
  const bar = document.querySelector('.mobile-logo-bar');
  bar.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
}
checkMobile();
window.addEventListener('resize', checkMobile);

/* NAVBAR RIDOTTA CHE APPARE APPENA SCROLLI L'HEADER PRINCIPALE */
const stickyNav = document.getElementById('stickyNav');
const siteHeader = document.querySelector('.site-header');
function handleSticky() {
  const threshold = siteHeader ? siteHeader.offsetHeight + 60 : 120;
  if (window.scrollY > threshold) {
    stickyNav.classList.add('visible');
    stickyNav.setAttribute('aria-hidden', 'false');

  } else {
    stickyNav.classList.remove('visible');
    stickyNav.setAttribute('aria-hidden', 'true');
  }
}
window.addEventListener('scroll', handleSticky, { passive: true });
