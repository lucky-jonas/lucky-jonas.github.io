(function() {
  "use strict";

  var bigImages = {
        myImg01: 'http://vgy.me/S49x4E.jpg',
        myImg02: 'images/full/2L.jpg',
        myImg03: 'images/full/3L.jpg',
        myImg04: 'images/full/4L.jpg',
        myImg05: 'images/full/5L.jpg',
        myImg06: 'images/full/6L.jpg',
        myImg07: 'images/full/7L.jpg',
        myImg08: 'images/full/8L.jpg',
        myImg09: 'images/full/9L.jpg',
        myImg010: 'images/full/10L.jpg',
        myImg011: 'images/full/11L.jpg',
        myImg012: 'images/full/12L.jpg',
        myImg013: 'images/full/13L.jpg',
        myImg014: 'images/full/14L.jpg',
        myImg015: 'images/full/15L.jpg',
        myImg016: 'images/full/16L.jpg',
        myImg017: 'images/full/17L.jpg',
        myImg018: 'images/full/18L.jpg',
        myImg019: 'http://vgy.me/S49x4E.jpg'

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
