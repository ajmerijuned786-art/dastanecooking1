(function(){
const TIMEOUT = 4000;
document.querySelectorAll('iframe[data-youtube-id]').forEach(iframe => {
const id = iframe.getAttribute('data-youtube-id');
const wrap = iframe.closest('.iframe-wrap');
const fallback = wrap.querySelector(`.iframe-fallback[data-for="${id}"]`);
let loaded = false;


iframe.addEventListener('load', () => {
loaded = true;
fallback.style.display = 'none';
});


setTimeout(() => {
if (!loaded) fallback.style.display = 'flex';
}, TIMEOUT);
});
})();