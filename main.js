const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you — this demo form is ready to connect to your preferred form service or CRM.');});
