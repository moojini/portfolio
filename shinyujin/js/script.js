

    $(function(){
        
        $('.btnevent1').click(function() {
            bl();
            var popBox = '.'+$(this).attr('id')
            var w = $(popBox).width()
            var h = $(window).height()
            var sct = $(window).scrollTop()
            
            console.log(sct);
            $(popBox).show().stop().animate({top:+200+'px'},1000)
        });
        
          var close = function(){
              $('.pop1').stop().animate({top:'-600px'},1000).hide(function(){
                  $(this).css({top:"-50px"})
              });
              $('.bl').fadeOut(function(){
                  $(this).remove()
              });
          }  ;
        
         $('.close1').click(close)
         
        function bl(){
            $('.btnevent1').append("<div class ='bl'></div>")
            // $('.bl').fadeTo(500,0.5)
        }    
 
        
    });
    
    