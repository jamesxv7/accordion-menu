/* 

Reviewed on http://codereview.stackexchange.com/questions/83940/minimalist-accordion-implementation-using-vanilla-javascript 

http://sonnyt.com/javascript-check-if-element-has-class/

*/

var el = document.getElementById("archives");
var hook = el.getElementsByClassName("fa");

for (var i = 0; i < hook.length; i++) {
	hook[i].addEventListener("click", toogle);
}
    
function toogle() {  
  if (this.nextElementSibling.nodeType === 1   
    && nextElementSibling(this).hasClass('hide')) { 
    if (nextElementSibling(this).classList) {
      nextElementSibling(this).classList.remove('hide');
    } else {
      nextElementSibling(this).className = nextElementSibling(this).className.replace(new RegExp('(^|\\b)' + "hide" + '(\\b|$)', 'gi'), ' ');
    }
    rotated = false;
  }
  else {    
    nextElementSibling(this).className += " " + "hide";
    rotated = true;
  }
  
  deg = rotated ? 0 : 180;
    
  this.style.webkitTransform = 'rotate('+deg+'deg)'; 
  this.style.mozTransform = 'rotate('+deg+'deg)'; 
  this.style.msTransform = 'rotate('+deg+'deg)'; 
  this.style.oTransform = 'rotate('+deg+'deg)'; 
  this.style.transform = 'rotate('+deg+'deg)'; 
}

function nextElementSibling(el) {
    if (el.nextElementSibling) {
      return el.nextElementSibling;
    }
    do { el = el.nextSibling } while (el && el.nodeType !== 1);
    return el;
}

Element.prototype.hasClass = function (className){
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
}