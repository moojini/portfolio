    
    $(function(){
        
        // $(".depth1 li").mouseenter(function(){
            
            // $(this).css("background","#003768").children().show()
        // });
        
        
        var move=$('.inner').width();
        
        var width =$('.intro').width();
        
        var idx=0;
        
        $("#top_cotent .left_slide .intro").click(function(){
            
            $(".intro ul li").eq(idx).find("div").animate({
                left:-width
            });
        });
        
        
        $(".middle_content .product_wrap_left .bntproductRight").click(function(){
            
            $(".inner ul li").eq(idx).find('div').animate({
                left:-move
            },1000).parent().next().find('div').css({
                'display':'block',
                left:move
            }).stop().animate({
                'left':'50px'
            },1000);
            
            idx ++;
            
            if(idx == $(".inner ul li").length){
                
                idx=0;
                
                $(".inner ul li").eq(idx).find('div').css({
                    display:"block",
                    left:move
                }).stop().animate({
                    left:'50px'
                },1000);
            }
        });
        
        $(".middle_content .product_wrap_left .bntproductLeft").click(function(){
            
            $(".inner ul li").eq(idx).find('div').animate({
                left:move
            },1000).parent().prev().find('div').css({
                'display':'block',
                left:-move
            }).stop().animate({
                'left':'50px'
            },1000);
            
            idx --;
            
            if(idx < 0){
                
                idx = $(".inner ul li").length-1
                
                $(".inner ul li").eq(idx).find('div').css({
                    display:"block",
                    left:-move
                }).stop().animate({
                    left:'50px'
                },1000);
            }
        })
        
        
    })