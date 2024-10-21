(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-menu-open-mobile]'),
    openTabletMenuBtn: document.querySelector('[data-menu-open-tablet]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('.mob-menu-nav-link'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMenu);
  refs.openTabletMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
  }
})();
