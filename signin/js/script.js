
    $(function(){
        
        $('.global_gnb_top a').mouseenter(function(){
            $(this).css({
                color:'#000'
            }).mouseleave(function(){
                $(this).css({
                    color:'#8D8D8D'
                });
            });
        });
        
        
        // $('.global_gnb_menu .men1').mouseenter(function(){
            
        //     $('.global_gnb_menu .men2').stop().animate().css({display:'block'})
        //     .prev().children().find('a').mouseleave(function(){
        //         $(this).stop().animate().css({display:'none'})
        //     })
        // })
        
        $('.menu_list .menu_ikon a.menu_ikon_open').click(function(){
            
            $('.menu_list ul').css({display:'block'});
            $(this).hide().parent().next().children('a').css({display:'block'});
            
            $('.menu_list .menu_ikon a.menu_ikon_close').click(function(){
                $('.menu_list ul').css({display:'none'});
                $(this).hide().parent().prev().children('a').css({display:'block'});
            });
        });
        
        $('.menu_list ul li ').mouseenter(function(){
            $(this).css({
                background:'#333'
            }).children('a').css({
                color:'#fff'
            }).mouseleave(function(){
                $('.menu_list ul li ').css({
                background:'#fff'
                }).children('a').css({
                color:'#000'
                })
            })
            
        });
        
        
        
        
        
    });
    
    