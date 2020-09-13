$(function() {


    $('.Q').on('click', function (){
        var $answer = $(this).siblings('.A');
        if($answer.hasClass('open')) {
          $answer.removeClass('open');
         
          $answer.slideUp(200);
          
         
            $(this).find('i').addClass('.fa fa-chevron-down').removeClass('.fa fa-chevron-up');
          
        } else {
          $answer.addClass('open'); 
          
          $answer.slideDown(200);
          
          
          $(this).find('i').addClass('.fa fa-chevron-up');
        }
      });



    var topBtn = $('#pageTop');
    topBtn.hide();
    
    


    //◇ボタンの表示設定
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {

            //---- 画面を80pxスクロールしたら、ボタンを表示する
            topBtn.fadeIn();

        } else {

            //---- 画面が80pxより上なら、ボタンを表示しない
            topBtn.fadeOut();

        }


    });



    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;

    });

    $('.faitems').on('click', function () {
        var $answer = $(this).siblings('.primary-item2');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');

            $answer.slideUp(300);


            $(this).find('i').addClass('.fa fa-chevron-down').removeClass('.fa fa-chevron-up');

        } else {
            $answer.addClass('open');

            $answer.slideDown(300);


            $(this).find('i').addClass('.fa fa-chevron-up');
        }
    });

    // スクロール
    $('.header-contents2,.btnsev').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $('#name');
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
    

});
