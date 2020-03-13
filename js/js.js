
        $(function(){
  
          $('.signUpLink').on("click",function()
          {
              $('.signUp').slideDown(500);
              $('body').css('background','rgb(157, 0, 248)');

          });
          $('.signUp .closeS').on("click",function()
          {
              $('.signUp').slideUp();
              $('body').css('background','white');

          });


          $('.loginLink').on("click",function()
          {
              $('.login').slideDown(500);
              $('body').css('background','rgb(0, 0, 0)');

          });
          $('.closeS').on("click",function()
          {
              $('.login').slideUp();
              $('body').css('background','white');

          });
          var audio = new Audio( "../sound/1.mp3");

          $('.home .btn').on("click" , function(){
            
            audio.play();
            $(this).hide();
            $('.home .btnClos').show();
            
          });
          $('.home .btnClos').on("click",function(){
            
            if(audio.currentTime!==0)
            {audio.pause();
                $(this).hide();
                $('.home .btn').show();
                
            }
            else
            {
                console.log("off");
                $(this).hide();
                $('.home .btn').show();
            }
        });
         
         
       
          });

