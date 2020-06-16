//  $(document).ready(function(){
//     $(".close").click(function(e){
//         e.preventDefault();
//         $(".source-wrapper").removeClass('appear');
//         $(".close").removeClass('appear');
//         $(".source-wrapper").fadeOut("slow");
//     });
// });


// $(document).ready(function(){
//     $(".open").click(function(e){
//         e.preventDefault();
//         $(".source-wrapper").addClass('appear');
//         $(".close").addClass('appear');
         
//     });

// });


// // $(document).ready(function(){ 

// //  $(".open").click(function() { 
// //     $(".source-wrapper").fadeIn("slow");
// // });

// //  $(".close").click(function() { 
// //       $(".source-wrapper").fadeOut("slow"); 
// //     });
// //  });


$(document).ready(function(){ 

 $(".open-source").click(function() { 
    $(".source-wrapper").fadeIn("slow");
    $(".close").addClass('appear');
});

 $(".close").click(function() { 
      $(".source-wrapper").fadeOut("slow");
      $(".close").removeClass('appear');
    });
 });

