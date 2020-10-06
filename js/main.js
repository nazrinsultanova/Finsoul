$(document).ready(function(){

function scrolling(){ 
    if ($(window).scrollTop()>30){

    $("#nav-menu").addClass("fixednav");
    $(".logo").attr('src', '../Finsoul/img/logo-blue.png');
}

    if ($(window).scrollTop()<30){
        $("#nav-menu").removeClass("fixednav" );         
        $(".logo").attr('src', '../Finsoul/img/logo-white.png');
    }

}
$(window).scroll(function(){
    scrolling();
});

    scrolling();


   /*-----------Animate when scrolling-----------*/

//    $(window).scroll(function() {
//     if($(window).scrollTop() > ($('#services').offset().top - $('.fixednav').height()*4)){
//         $('#services .row .item').removeClass('visiblenone');
//         $('#services .row .item').addClass('zoomIn');
//     }

//     if($(window).scrollTop() > ($('#innovations').offset().top - $('.fixednav').height()*6)){
//       $('#innovations .flexbox h2').removeClass('visiblenone');
//       $('#innovations .flexbox h2').addClass('zoomIn');
//       $('#innovations .flexbox .view-all').removeClass('visiblenone');
//       $('#innovations .flexbox .view-all').addClass('zoomIn');
//       $('#innovations .row .innovations-box').removeClass('visiblenone');
//       $('#innovations .row .innovations-box').addClass('zoomIn');
//   }
//   });


  /*---------------Right menu-----------*/

  $(".navbar-toggler").click(function(){
    $(".right-menu").css({right:"0"})
      $(".popup-layer").css({display:"block"})
      $("body").css({overflow:"hidden"})
  });

  $(".right-menu .close-icon i").click(function(){
    $(".right-menu").css({right:"-100%"})
    $(".popup-layer").css({display:"none"})
    $("body").css("overflowY","scroll")
})

$(".popup-layer").click(function(){
    $(".order-block").css("display","none")
    $(".popup-layer").css("display","none")
    $("body").css("overflowY","scroll")
    $(".right-menu").css({right:"-100%"})
});


$('.start btn').click(function() {
   $('.modal').addClass(show);
});


/*-------------Input that allows only numeric value and '+' sign------------*/

// (function($) {
//     $.fn.inputFilter = function(inputFilter) {
//       return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
//         if (inputFilter(this.value)) {
//           this.oldValue = this.value;
//           this.oldSelectionStart = this.selectionStart;
//           this.oldSelectionEnd = this.selectionEnd;
//         } else if (this.hasOwnProperty("oldValue")) {
//           this.value = this.oldValue;
//           this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
//         } else {
//           this.value = "";
//         }
//       });
//     };
//   }(jQuery));

//   $("#phone-num").inputFilter(function(value) {
//     return /^\d*$/.test(value);    // Allow digits only, using a RegExp
//   });

});




 
 
 