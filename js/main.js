(function() {
  "use strict";
  
  var bigImages = {
        myImg01: 'http://vgy.me/wFYm4u.jpg',
        myImg02: 'http://vgy.me/fW93H7.jpg',
        myImg03: 'http://vgy.me/xCM0mC.jpg',
        myImg04: 'http://vgy.me/gIeA1q.jpg',
        myImg05: 'http://vgy.me/Nbnre6.jpg',
        myImg06: 'http://vgy.me/Dh95yS.jpg',
        myImg07: 'http://vgy.me/ER6Brz.jpg'
  };

  window.addEventListener('click', function(event) {

    if (event.target.matches('.expandable-image')) {
      displayImageModal(event.target.id);
    }
  });

  var displayImageModal = function(image) {
    var modal = document.getElementById('myModal');
    var modal1 = document.getElementById('closeDiv');
    var modalImg = document.getElementById("img00");
    var navbar = document.querySelector('nav');

    modal.style.display = "block";
    modal1.style.display = "block";
    modalImg.src = bigImages[image];
    navbar.style.display = 'none';

    var span = document.getElementsByClassName("close")[0];
    span.style.display = "inline";

    span.onclick = function() { 
      modal.style.display = "none";
      modal1.style.display = "none";
      navbar.style.display = "block";
    };

  }
}(window, document));
