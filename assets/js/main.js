// $(function() {

// 	// Cache the Window object
// 	var $window = $(window);

// 	// Parallax Backgrounds
// 	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

// 	$('section[data-type="background"]').each(function(){
// 		var $bgobj = $(this); // assigning the object

// 		$(window).scroll(function() {

// 			// Scroll the background at var speed
// 			// the yPos is a negative value because we're scrolling it UP!
// 			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

// 			// Put together our final background position
// 			var coords = '50% '+ yPos + 'px';

// 			// Move the background
// 			$bgobj.css({ backgroundPosition: coords });

// 		}); // end window scroll
// 	});

// });
// const hamburger=document.querySelector(".hamburger");
// const navlink=document.querySelector(".nav-link-top");
// const links=document.querySelectorAll(".nav-link-top li");
// hamburger.addEventListener("click",()=>
// {
// navlink.classList.toggle("open");
// links.forEach(link => {
// link.classList.toggle("fade");
// });

// });

// var burgerBtn = document.getElementById('burgerBtn');
// var mobile = document.getElementById('mobile');


// burgerBtn.addEventListener('click', function() {
//     mobile.classList.toggle('navigation');
//   }, false);

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
 
    var site_header=document.querySelector(".body");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    site_header.classList.add("fixPosition");
      document.querySelector(".logoImg").src="http://localhost:8888/wp-content/themes/hiencucvang/assets/img/logoscroll.png";
    // document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    
    document.querySelector(".logoImg").src="http://localhost:8888/wp-content/themes/hiencucvang/assets/img/logo@2x.png";
    site_header.classList.remove("fixPosition");
    // document.getElementById("logo").style.fontSize = "35px";
  }
}

var image_search =  document.getElementById("search-icon-open");
var search_icon = document.getElementById('search-icon');
var search_box = document.getElementById('searchBox');
search_icon.addEventListener('click', function() {
 
  search_icon.classList.toggle('open_ico');
  search_box.classList.toggle('openSearch');

  }
 );


 $(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.b-post__hero-wrap').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return  (elementHeight - scrollTop) / elementHeight;
    }
  });
});
// function myFunction() {
//     var elmnt = document.getElementById("hero");
//     var x = elmnt.scrollLeft;
//     var y = elmnt.scrollTop;
//     document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
//   }

// /* // When the user scrolls the page, execute myFunction  */
// window.onscroll(function(){
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   console.lofg(document.getElementById("myBar").style.width = scrolled + "%");
// });


var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



