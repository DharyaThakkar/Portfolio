document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleSidebar = document.getElementById('theme-toggle-sidebar');

  // Load theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  }

  function toggleTheme() {
    html.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      html.classList.contains('dark') ? 'dark' : 'light'
    );
  }

  themeToggle?.addEventListener('click', toggleTheme);
  themeToggleSidebar?.addEventListener('click', toggleTheme);

  // Mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
});
