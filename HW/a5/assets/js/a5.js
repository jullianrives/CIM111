console.log("test");
 $(document).ready(function() {
//do not do anything till page is loaded
  $(".s1").hide();
  $(".s2").hide();
  $(".s3").hide();
  $(".s4").hide();
  $(".s5").hide();
  $(".s6").hide();
  $(".s6").hide();
  $(".s7").hide();



$(".btn1").on("click", function() {
  for(var i=1; i<8; i++){
    $('.s'+i).hide();
    //when button is clicked, hide all instructions
    console.log("on number: " + i);
  }
  //closes for loop
  $(".s1").show();
    });
    //.one event listener



    $(".btn2").on("click", function() {
      for(var i=1; i<8; i++){
        $('.s' + i).hide();
        console.log("on number: " + i);
      }
      $(".s2").show();
        });




$(".btn3").on("click", function() {
  for(var i=1; i<8; i++){
    $('.s' + i).hide();
    console.log("on number: " + i);
  }
  $(".s3").show();
    });



    $(".btn4").on("click", function() {
      for(var i=1; i<8; i++){
        $('.s' + i).hide();
        console.log("on number: " + i);
      }
      $(".s4").show();
        });



        $(".btn5").on("click", function() {
          for(var i=1; i<8; i++){
            $('.s' + i).hide();
            console.log("on number: " + i);
          }
          $(".s5").show();
            });



            $(".btn6").on("click", function() {
              for(var i=1; i<8; i++){
                $('.s' + i).hide();
                console.log("on number: " + i);
              }
              $(".s6").show();
                });




                $(".btn7").on("click", function() {
                  for(var i=1; i<8; i++){
                    $('.s' + i).hide();
                    console.log("on number: " + i);
                  }
                  $(".s7").show();
                    });


});
//closes entire function
