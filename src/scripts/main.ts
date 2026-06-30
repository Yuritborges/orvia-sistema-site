/**
 * Scripts da landing page ORVIA
 * — menu mobile, tema claro/escuro, carrossel e lightbox
 */

function initTheme(): void {
  const root = document.documentElement;
  const toggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-mobile'),
  ].filter(Boolean) as HTMLButtonElement[];

  const updateIcons = (): void => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('#icon-sun, .icon-sun-mobile').forEach((el) => {
      el.classList.toggle('hidden', !isDark);
    });
    document.querySelectorAll('#icon-moon, .icon-moon-mobile').forEach((el) => {
      el.classList.toggle('hidden', isDark);
    });
  };

  const setTheme = (theme: 'light' | 'dark'): void => {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('orvia-theme', theme);
    updateIcons();
  };

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  });

  updateIcons();
}

function initMobileMenu(): void {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  if (!toggle || !menu) return;

  const closeMenu = (): void => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu de navegação');
    iconMenu?.classList.remove('hidden');
    iconClose?.classList.add('hidden');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    iconMenu?.classList.toggle('hidden', isOpen);
    iconClose?.classList.toggle('hidden', !isOpen);
  });

  menu.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = (): void => {
    header.classList.toggle('header-scrolled', window.scrollY > 8);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initGallery(): void {
  const track = document.getElementById('gallery-track');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const counter = document.getElementById('gallery-counter');
  const slides = track?.querySelectorAll('.gallery-slide');
  const total = slides?.length ?? 0;

  if (!track || !slides || total === 0) return;

  const getSlideWidth = (): number => {
    const slide = slides[0] as HTMLElement;
    return slide.offsetWidth + 16; // gap-4
  };

  const updateCounter = (): void => {
    if (!counter) return;
    const scrollLeft = track.scrollLeft;
    const index = Math.round(scrollLeft / getSlideWidth()) + 1;
    counter.textContent = `${Math.min(index, total)} / ${total}`;
  };

  prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateCounter, { passive: true });
}

function initLightbox(): void {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  if (!lightbox || !lightboxImg || !lightboxCaption) return;

  const open = (src: string, caption: string, alt: string): void => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('is-open');
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const close = (): void => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('hidden', '');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  const bindItem = (el: Element): void => {
    const src = el.getAttribute('data-src');
    const caption = el.getAttribute('data-caption') ?? '';
    const img = el.querySelector('img');
    const alt = img?.alt ?? caption;

    if (!src) return;

    el.addEventListener('click', () => open(src, caption, alt));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(src, caption, alt);
      }
    });
  };

  document.querySelectorAll('.gallery-slide').forEach(bindItem);

  closeBtn?.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

function init(): void {
  initTheme();
  initMobileMenu();
  initHeaderScroll();
  initGallery();
  initLightbox();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
