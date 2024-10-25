// Change color of the main title on hover
const mainTitle = document.getElementById('main-title');

mainTitle.addEventListener('mouseover', function() {
    mainTitle.style.color = '#FF6347';  // Change to a different color on hover (Tomato color)
});

mainTitle.addEventListener('mouseout', function() {
    mainTitle.style.color = '';  // Revert to original color when hover ends
});

// Change color of navigation links on hover
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#FF6347';  // Change to a different color (Tomato) when hovering
    });
    
    link.addEventListener('mouseout', function() {
        link.style.color = '';  // Revert to original color when hover ends
    });
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
