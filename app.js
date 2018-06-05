// button 1
var button1 = document.querySelector('#button1');
var hamburger1 = document.querySelector('#button1 .bar');

button1.addEventListener('click', function() {
      hamburger1.classList.toggle('animate')
});

// button2
var button2 = document.querySelector('#button2');
var hamburger2 = document.querySelector('#button2 .bar');

button2.addEventListener('click', function() {
      hamburger2.classList.toggle('animate')
});

// button3
var button3 = document.querySelector('#button3');
var hamburger3 = Array.from(document.querySelectorAll('#button3 .bar'));

button3.addEventListener('click', function() {
  hamburger3.forEach(bar => bar.classList.toggle('animate'));
});

// button 4
var button4 = document.querySelector('#button4');
var hamburger4 = Array.from(document.querySelectorAll('#button4 .bar'));

button4.addEventListener('click', function() {
  hamburger4.forEach(bar => bar.classList.toggle('animate'));
});
