// 레시피 리스트 js - recipelist.js 

$(function () { // jQB /////////////////


    //부드러운 스크롤 적용!
    $("#wrap").smoothWheel();

    // 부드러운 스크롤 위치값 동기화!!!
    currentY = 0;

    setTimeout(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 400);
    }, 500);

    ///////// 레시피 이미지 ////////////////////
    // 이미지 클릭시 해당 상세페이지로(레시피)
    $(".outb a").click(function (e) {
        e.preventDefault(); //기본막기
        var idx = $(this).parents(".outb").index(".outb");
        console.log("순번:" + idx);

        location.href = "recipe.html?wno=" + idx;

    }); ////////// click //////////////



    /// 초기액션 설정 ///
    $(".outb").addClass("on");

    setTimeout(function () {
        $(".outb").each(function (idx, ele) {
            setTimeout(function () {
                $(ele).removeClass("on");
            }, (idx * 200));

            setTimeout(function () {
                $("#wrap").animate({
                    scrollTop: "300px"
                }, 300);
            }, 600);
        }); ////// each ///////////

        // 부드러운 스크롤 위치값 동기화!!!
        currentY = -300;

    }, 1000); ///1초후 timeout ///
    
    

   


}); ///////// jQB /////////////////////
/////////////////////////////////////
