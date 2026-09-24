const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const modal=document.querySelector('#modal'),img=document.querySelector('#modalImg'),title=document.querySelector('#modalTitle');
document.querySelectorAll('.cert').forEach(c=>c.addEventListener('click',()=>{const lang=document.documentElement.lang||'en';img.src=c.dataset.img;title.textContent=c.dataset[lang==='ar'?'titleAr':'titleEn'];modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');img.src=''}
document.querySelector('.modal-close')?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const langBtn=document.getElementById('langToggle');
function setLang(lang){
 const ar=lang==='ar'; document.documentElement.lang=lang;document.documentElement.dir=ar?'rtl':'ltr';
 document.querySelectorAll('[data-en][data-ar]').forEach(el=>el.textContent=ar?el.dataset.ar:el.dataset.en);
 document.querySelectorAll('[data-html-en][data-html-ar]').forEach(el=>el.innerHTML=ar?el.dataset.htmlAr:el.dataset.htmlEn);
 document.querySelectorAll('[data-alt-en][data-alt-ar]').forEach(el=>el.alt=ar?el.dataset.altAr:el.dataset.altEn);
 document.querySelectorAll('[data-aria-en][data-aria-ar]').forEach(el=>el.setAttribute('aria-label',ar?el.dataset.ariaAr:el.dataset.ariaEn));
 document.querySelectorAll('[data-title-en][data-title-ar]').forEach(el=>{if(el.tagName==='IFRAME')el.title=ar?el.dataset.titleAr:el.dataset.titleEn});
 document.title=ar?'محمد عاطف | مهندس برمجيات · باحث · مدرب':'Mohamed Atef | Software Engineer · Researcher · Instructor';
 const md=document.querySelector('meta[name="description"]');if(md)md.content=ar?'معرض أعمال محمد عاطف — مهندس برمجيات أول ومتخصص أندرويد وباحث ومدرب.':'Portfolio of Mohamed Atef — senior software engineer, Android/mobile developer, researcher and instructor.';
 langBtn.textContent=ar?'English':'العربية';localStorage.setItem('portfolioLang',lang);
}
if(langBtn){setLang(localStorage.getItem('portfolioLang')||'en');langBtn.addEventListener('click',()=>setLang(document.documentElement.lang==='ar'?'en':'ar'));}
