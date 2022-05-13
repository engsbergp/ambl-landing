let lines = document.getElementById("lines")

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  lines.style.top = value * 1.15 + 'px';
})