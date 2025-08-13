
// Theme toggle + persist
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
function setTheme(t){
  if(t==='light'){root.setAttribute('data-theme','light'); toggle.textContent='🌙'}
  else {root.removeAttribute('data-theme'); toggle.textContent='☀️'}
  localStorage.setItem('theme', t || 'dark');
}
toggle.addEventListener('click', ()=> setTheme(localStorage.getItem('theme')==='light'? 'dark':'light'));
setTheme(localStorage.getItem('theme') || 'dark');
// Typing effect
const words = ['UI Designer','Front-end Developer','Accessibility Advocate'];
let i=0, j=0, cur='';
function type(){
  if(i>=words.length) i=0;
  const word = words[i];
  cur = word.slice(0, ++j);
  document.getElementById('typed').textContent = cur;
  if(j===word.length){ setTimeout(()=>{ j=0; i++; type(); }, 900); } else { setTimeout(type, 100); }
}
type();
// Simple contact form handler (demo only)
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thanks — message simulated as sent (demo).');
  e.target.reset();
});
