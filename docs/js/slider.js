// jQuery(document).ready(function ($) {

//     setInterval(function () {
//         moveRight();
//     }, 3000);
  
// 	var slideCount = $('#slider ul li').length;
// 	var slideWidth = $('#slider ul li').width();
// 	var slideHeight = $('#slider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;
	
	
//     $('#slider ul li:last-child').prependTo('#slider ul');

//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     $('a.control_prev').click(function () {
//         moveLeft();
//     });

//     $('a.control_next').click(function () {
//         moveRight();
//     });

// });    

(function() {
    
    function Slideshow( element ) {
        this.el = document.querySelector( element );
        this.init();
    }
    
    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector( ".slider-wrapper" );
            this.slides = this.el.querySelectorAll( ".slide" );
            this.previous = this.el.querySelector( ".slider-previous" );
            this.next = this.el.querySelector( ".slider-next" );
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;
            
            this.action();
            this.stopStart();   
        },
        _slideTo: function( slide ) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;
            
            for( var i = 0; i < this.slides.length; i++ ) {
                var slide = this.slides[i];
                if( slide !== currentSlide ) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if( self.index == self.slides.length ) {
                    self.index = 0;
                }
                self._slideTo( self.index );
                
            }, 3000);
        },
        stopStart: function() {
            var self = this;
            self.el.addEventListener( "mouseover", function() {
                clearInterval( self.timer );
                self.timer = null;
                
            }, false);
            self.el.addEventListener( "mouseout", function() {
                self.action();
                
            }, false);
        }
        
        
    };
    
    document.addEventListener( "DOMContentLoaded", function() {
        
        var slider = new Slideshow( "#main-slider" );
        
    });
    
    
})();

