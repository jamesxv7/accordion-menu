
/* 

Reviewed on http://codereview.stackexchange.com/questions/83940/minimalist-accordion-implementation-using-vanilla-javascript 

http://sonnyt.com/javascript-check-if-element-has-class/

*/

var el = document.getElementById("archives");
var hook = el.getElementsByClassName("fa");
var rotated;

for (var i = 0; i < hook.length; i++) {
	hook[i].addEventListener("click", Toogle);
}
    
function Toogle() {
    'use strict';
  if (this.nextElementSibling.nodeType === 1 && hasClass(this.nextElementSibling,"hide")) { 
    if (this.nextElementSibling.classList) {
      this.nextElementSibling.classList.remove('hide');
    } else {
      this.nextElementSibling.className = this.nextElementSibling.className.replace(new RegExp('(^|\\b)' + "hide" + '(\\b|$)', 'gi'), ' ');
    }
    rotated = false;
  }
  else {    
    this.nextElementSibling.className += " " + "hide";
    rotated = true;
  }
  
  var deg = rotated ? 0 : 180;
    
  this.style.transform = 'rotate('+deg+'deg)';     
}

function hasClass (el, className){
  return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
}