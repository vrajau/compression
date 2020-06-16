//  $(document).ready(function(){
//     $(".close").click(function(e){
//         e.preventDefault();
//         $(".source-wrapper").removeClass('appear');
//         $(".close").removeClass('appear');
//     });
// });


// $(document).ready(function(){
//     $(".open-source").click(function(e){
//         e.preventDefault();
//         $(".source-wrapper").addClass('appear');
         
//     });

// });


$(document).ready(function(){ 
    $(".open-source").click(function(){
        $('.source-wrapper').css("opacity", "1");
        $('.close').css("opacity", "1");
        $('.source-wrapper').css("z-index", "4");
        // $(".button2").addClass('IMIN');
        // $(".button2").removeClass('IMOUT');
    });
});




$(document).ready(function(){ 
    $(".close").click(function(){
    	// $('.source-wrapper').css("z-index", "0");
        $('.button2').css("opacity", "0");
        $('.close').css("opacity", "0");
        $('.source-wrapper').css("z-index", "0");
        $('.source-wrapper').css("opacity", "0");
     // $(".button2").removeClass('IMIN');

    });
});










// // $(document).ready(function(){ 

// //  $(".open").click(function() { 
// //     $(".source-wrapper").fadeIn("slow");
// // });

// //  $(".close").click(function() { 
// //       $(".source-wrapper").fadeOut("slow"); 
// //     });
// //  });


// $(document).ready(function(){ 
//  $(".open-source").click(function() { 
//     // $(".source-wrapper").fadeIn("slow");
//     $(".close").addClass('appear');
//     $(".source-wrapper").addClass('appear')
// });

//  $(".close").click(function() { 
//       $(".source-wrapper").fadeOut("slow");
//       $(".close").removeClass('appear');
//       $(".source-wrapper").removeClass('appear');
//     });
//  });



// $(document).ready(function(){ 
// $(function() {
//     $(".open-source").click(function(){
//     	e.preventDefault();
//         $('.source-wrapper').css("opacity", "0.2");
//     });
// });
// });
