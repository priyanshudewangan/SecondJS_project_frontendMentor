// Select all ellipsis icons
const ellipsisIcons = document.querySelectorAll('.ellipseIcon');

ellipsisIcons.forEach(icon => {
  const floatingCard = icon.closest('.floatingCard');

  icon.addEventListener('mouseenter',()=>{
    floatingCard.style.backgroundColor = 'hsl(235, 46%, 20%)';
  })

  icon.addEventListener('mouseleave',() => {
    floatingCard.style.backgroundColor = '';
  })

});

// In this we are not using queryselector because it chooses the first DOM element and returns it

// where as icon.closest choose all the elements that you want.