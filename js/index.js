//Toggle menu

(function(){

var x = 0;
$('#menu-icon').click(function(){
    
    if(x === 0){
        $('#menu').animate({
            right:'0px'
        },200);
        //$('#mask').fadeIn(200);
        $('#menu p').fadeIn(600);
        x+=1;
    }
    else{
        $('#menu').animate({
            right:"-300px"
        },200);
        $('#menu p').hide();
      //  $('#mask').css('display','none');
        x-=1;
    }
});

})();


//Image zoom on scroll
$(window).scroll(function(){
    var y = window.scrollY;
    var s = $('.article-image').offset().top;
    if(y > s && y < 600){
        $('.article-image').css('width',860*(1+(y-s)/1200));
        
    }
    if(y < s){
        $('.article-image').css('width',860);
    }
});

//read options Toggle

(function(){

var x = 0;
$('#read-icon').click(function(){
    if(x === 0){
        $('#wrapper').animate({
            top:'85%',
            opacity:'1'
        },300);
        
        x+=1;
    }
    else{
        $('#wrapper').animate({
            top:'70%',
            opacity:'0'
        },300);
        x-=1;
    }
});

})();

//varying font-size

(function(){
    var fontSize = 18;
    $('#fs-minus').click(function(){
        if(fontSize > 16 ){
            fontSize -= 1;
            $('p.article-description').css('fontSize',fontSize);
            $('#fs-value p').html(fontSize);
        }
    });
    $('#fs-plus').click(function(){
        if(fontSize < 20 ){
            fontSize +=1;
            $('p.article-description').css('fontSize',fontSize);
            $('#fs-value p').html(fontSize);
        }
    });


})();

//varying font-family
$('#sans').click(function(){
    $(this).addClass("active-font");
    $(this).removeClass("inactive-font");
    $('#varela').removeClass("active-font");
    $('#varela').addClass("inactive-font");
    $('p.article-description').css('fontFamily','PT Sans Caption');
});
$('#varela').click(function(){
    $(this).addClass("active-font");
    $(this).removeClass("inactive-font");
    $('#sans').removeClass("active-font");
    $('#sans').addClass("inactive-font");
    $('p.article-description').css('fontFamily','Varela Round');

    
});

//varying bg-color
$('#bgc-black').click(function(){
    $("#article,body").css({
        "color":"white",
        "backgroundColor":"#252626",
        
    });
    $("#bgc-black").css("boxShadow","inset 0px 0px 0px 3px #0853cc");
    $("#bgc-white").css("boxShadow","none");

});
$('#bgc-white').click(function(){
   $("#article,body").css({
        "color":"black",
        "backgroundColor":"white"
    });
    $("#bgc-white").css("boxShadow","inset 0px 0px 0px 3px #0853cc");
    $("#bgc-black").css("boxShadow","none");

});