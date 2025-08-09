function openMobileNav(){
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('open');
}
function toggleTheme(){
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
function toggleContrast(){
  const isContrast = document.documentElement.classList.toggle('contrast');
  localStorage.setItem('contrast', isContrast ? '1' : '0');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const pref = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark', pref === 'dark');
  const contrast = localStorage.getItem('contrast') === '1';
  document.documentElement.classList.toggle('contrast', contrast);
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});