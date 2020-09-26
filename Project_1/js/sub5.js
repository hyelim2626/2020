// 고봉민김밥 창업절차 - sub5.js


$(function () {
    //처음에 숨기기
    $(".item").hide();

    //하나씩 등장!
    $(".item").each(function (idx, ele) {
        //console.log(idx);
        $(this).delay(350 * idx).fadeIn(1000);
    });

}); //// jQB ///////////

$(function () { /// jQB ////////////////////////////
    $(".item").hover(function () { //over
        // 변경애니메이션
        $(".fnum",this).stop().animate({
            backgroundColor: "#eea91e"
        }, 300);

    }, function () { //out
        $(".fnum",this).stop().animate({
            backgroundColor: "#abc236"
        }, 300);

    }); ///// hover //////////






}); ////// jQB ////////////////////////////////////
