const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  const opened = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', opened);
  toggle.textContent = opened ? '×' : '☰';
});

document.querySelectorAll('.menu a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
