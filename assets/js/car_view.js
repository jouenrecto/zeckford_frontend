var favorites = false;
var viewed = false;
var viewedObj = false;
var swiper = {};
var frontSwiper = {};
var isFullScreen = false;

fullScreenSwiper = function(index) {
$('.swiper-container').toggleClass('fullscreen');
  galleryTop.update();
  if(index) {      
    galleryTop.update();
    galleryTop.slideTo(index, 0);
  }
}
