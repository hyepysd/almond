$(function(){
    //리플레시 될 때 맨 위로 가셈
    $('html,body').stop().animate({'scrollTop': 0 },200);
    
    //1번 메뉴는 무조건 선택되게
    $('header li').eq(0).find('a').addClass('on');
    
    
    $(window).scroll(function(){
        
        $('section').mousewheel(function(event,delta){
        //event.deltaY : 마우스를 아래로 내리면 -1, 마우스 휠을 위로 올리면 +1
            
        var divNum = $(this).index();// 현재 사용하는 메뉴
            
         
            
        if(delta<0){
            if(divNum>=6) return false;
            //section은 5개 index는 4까지 나오고 4이상의 section은 없으므로 다음으로 가지말고 멈추라는 뜻
            
            $('header a').removeClass('on')
         $('header li').eq(divNum+1).find('a').addClass('on');//  현재 사용하고 있는 섹션에 해당하는 메뉴를 색칠
            var w = new WOW().init();
            //51번째 라인에서 생성되서 괄호가 닫힐 때 사라지고 
            //다시 생성되는 과정으로 매번 애니메이션이 실행됨
            var n = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop': n },1000);
            
        }else if(delta>0){
            if(divNum<=0) return false;
            // section이 0번보다 작으면 더이상 움직이지 마세요
            
            $('header a').removeClass('on')
         $('header li').eq(divNum-1).find('a').addClass('on');//  현재 사용하고 있는 섹션에 해당하는 메뉴를 색칠
            var w = new WOW().init();
            var n = $(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop': n },1000);
        }
        
    })
    })
    
    $('header a').click(function(){
        var w = new WOW().init();
        var n = $(this).parent().index();
        var sectionTop = $('section').eq(n).offset().top;
         /*$('html,body').stop().animate({'scrollTop': sectionTop },1000);*/
        
         $('header a').removeClass('on')
         $('header li').eq(n).find('a').addClass('on');// 현재 사용하고 있는 섹션에 해당하는 메뉴를 색칠
    })
    
    
})
$(function(){
    var num = $(this).index()
    $('#box2').on('mousemove', function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    // 나누는 값에서 몫이 커질수록 마우스에서 거리가 멀어진다
    console.log(event.pageY);
    $('.bg01').css({
        'left': 180 + (posX / 100),
        'top': 140 + (posY / 100)
    });
    $('.bg02').css({
        'left': 370 +(posX / -70),
        'top': 350 + (posY / 150)
    });
    $('.bg03').css({
        'left': 360 + (posX / 60),
        'top': 800 + (posY / 100)
    });
    $('.bg04').css({
        'left': 350 - (posX / 35),
        'top': 100 + (posY / -50)
    });
    $('.bg05').css({
        'left': 140 - (posX / -14),
        'top': 500 + (posY / 50)
    });
    $('.bg06').css({
        'left': 140 - (posX / 60),
        'top': 780 + (posY / -100)
    });
    $('.bg07').css({
        'left': 900 - (posX / 800),
        'top': 70 + (posY / 30)
    });
    $('.bg08').css({
        'left': 920 - (posX / 300),
        'top': 400 + (posY / 40)
    });
    $('.bg09').css({
        'left': 900 - (posX / 300 ),
        'top': 850 + (posY / -85)
    });

})

}) /*box2 마우스 인식*/
$(function(){
    var num = $(this).index()
    $('#box3').on('mousemove', function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    // 나누는 값에서 몫이 커질수록 마우스에서 거리가 멀어진다
    console.log(event.pageY);
    $('.bg01').css({
        'left': 180 + (posX / 100),
        'top': 140 + (posY / 100)
    });
    $('.bg02').css({
        'left': 370 +(posX / -70),
        'top': 350 + (posY / 150)
    });
    $('.bg03').css({
        'left': 360 + (posX / 60),
        'top': 800 + (posY / 100)
    });
    $('.bg04').css({
        'left': 350 - (posX / 35),
        'top': 100 + (posY / -50)
    });
    $('.bg05').css({
        'left': 140 - (posX / -14),
        'top': 500 + (posY / 50)
    });
    $('.bg06').css({
        'left': 140 - (posX / 60),
        'top': 780 + (posY / -100)
    });
    $('.bg07').css({
        'left': 900 - (posX / 800),
        'top': 70 + (posY / 30)
    });
    $('.bg08').css({
        'left': 920 - (posX / 300),
        'top': 400 + (posY / 40)
    });
    $('.bg09').css({
        'left': 900 - (posX / 300 ),
        'top': 850 + (posY / -85)
    });

})

}) /*box3 마우스 인식*/
$(function(){
    var num = $(this).index()
    $('#box4').on('mousemove', function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    // 나누는 값에서 몫이 커질수록 마우스에서 거리가 멀어진다
    console.log(event.pageY);
    $('.bg01').css({
        'left': 180 + (posX / 100),
        'top': 140 + (posY / 100)
    });
    $('.bg02').css({
        'left': 370 +(posX / -70),
        'top': 350 + (posY / 150)
    });
    $('.bg03').css({
        'left': 360 + (posX / 60),
        'top': 800 + (posY / 100)
    });
    $('.bg04').css({
        'left': 350 - (posX / 35),
        'top': 100 + (posY / -50)
    });
    $('.bg05').css({
        'left': 140 - (posX / -14),
        'top': 500 + (posY / 50)
    });
    $('.bg06').css({
        'left': 140 - (posX / 60),
        'top': 780 + (posY / -100)
    });
    $('.bg07').css({
        'left': 900 - (posX / 800),
        'top': 70 + (posY / 30)
    });
    $('.bg08').css({
        'left': 920 - (posX / 300),
        'top': 400 + (posY / 40)
    });
    $('.bg09').css({
        'left': 900 - (posX / 300 ),
        'top': 850 + (posY / -85)
    });

})

}) /*box4 마우스 인식*/
$(function(){
    var num = $(this).index()
    $('#box5').on('mousemove', function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    // 나누는 값에서 몫이 커질수록 마우스에서 거리가 멀어진다
    console.log(event.pageY);
    $('.bg01').css({
        'left': 180 + (posX / 100),
        'top': 140 + (posY / 100)
    });
    $('.bg02').css({
        'left': 370 +(posX / -70),
        'top': 350 + (posY / 150)
    });
    $('.bg03').css({
        'left': 360 + (posX / 60),
        'top': 800 + (posY / 100)
    });
    $('.bg04').css({
        'left': 350 - (posX / 35),
        'top': 100 + (posY / -50)
    });
    $('.bg05').css({
        'left': 140 - (posX / -14),
        'top': 500 + (posY / 50)
    });
    $('.bg06').css({
        'left': 140 - (posX / 60),
        'top': 780 + (posY / -100)
    });
    $('.bg07').css({
        'left': 900 - (posX / 800),
        'top': 70 + (posY / 30)
    });
    $('.bg08').css({
        'left': 920 - (posX / 300),
        'top': 400 + (posY / 40)
    });
    $('.bg09').css({
        'left': 900 - (posX / 300 ),
        'top': 850 + (posY / -85)
    });

})

}) /*box5 마우스 인식*/
$(function(){
    var num = $(this).index()
    $('#box6').on('mousemove', function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    // 나누는 값에서 몫이 커질수록 마우스에서 거리가 멀어진다
    console.log(event.pageY);
    $('.bg01').css({
        'left': 180 + (posX / 100),
        'top': 140 + (posY / 100)
    });
    $('.bg02').css({
        'left': 370 +(posX / -70),
        'top': 350 + (posY / 150)
    });
    $('.bg03').css({
        'left': 360 + (posX / 60),
        'top': 800 + (posY / 100)
    });
    $('.bg04').css({
        'left': 350 - (posX / 35),
        'top': 100 + (posY / -100)
    });
    $('.bg05').css({
        'left': 140 - (posX / -54),
        'top': 500 + (posY / 300)
    });
    $('.bg06').css({
        'left': 140 - (posX / 60),
        'top': 780 + (posY / -700)
    });
    $('.bg07').css({
        'left': 900 - (posX / 800),
        'top': 70 + (posY / 30)
    });
    $('.bg08').css({
        'left': 920 - (posX / 300),
        'top': 400 + (posY / 40)
    });
    $('.bg09').css({
        'left': 900 - (posX / 300 ),
        'top': 850 + (posY / -85)
    });

})

}) /*box6 마우스 인식*/
$(function(){
    var num = $(this).index()
    $('#box7').on('mousemove', function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    // 나누는 값에서 몫이 커질수록 마우스에서 거리가 멀어진다
    console.log(event.pageY);
    $('.bg01').css({
        'left': 180 + (posX / 100),
        'top': 140 + (posY / 100)
    });
    $('.bg02').css({
        'left': 370 +(posX / -70),
        'top': 350 + (posY / 150)
    });
    $('.bg03').css({
        'left': 360 + (posX / 60),
        'top': 800 + (posY / 100)
    });
    $('.bg04').css({
        'left': 350 - (posX / 35),
        'top': 100 + (posY / -100)
    });
    $('.bg05').css({
        'left': 140 - (posX / -54),
        'top': 500 + (posY / 80)
    });
    $('.bg06').css({
        'left': 140 - (posX / 60),
        'top': 780 + (posY / -100)
    });
    $('.bg07').css({
        'left': 900 - (posX / 800),
        'top': 70 + (posY / 30)
    });
    $('.bg08').css({
        'left': 920 - (posX / 300),
        'top': 400 + (posY / 40)
    });
    $('.bg09').css({
        'left': 900 - (posX / 300 ),
        'top': 850 + (posY / -85)
    });

})

}) /*box7 마우스 인식*/