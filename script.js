const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.style.cssText = open
    ? 'display:flex;position:absolute;top:70px;left:0;right:0;margin:0;padding:22px 20px;background:var(--ink);border-bottom:1px solid var(--line);flex-direction:column;gap:20px;'
    : '';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    navigation.style.display = '';
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
