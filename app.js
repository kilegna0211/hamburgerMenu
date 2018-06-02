var button1 = document.querySelector('#button1');
var hamburger = document.querySelector('.bar');
console.log(hamburger)
button1.addEventListener('click', function() {
      hamburger.classList.toggle('animate')
});
