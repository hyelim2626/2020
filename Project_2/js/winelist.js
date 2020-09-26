// 와인 리스트 js - winelist.js 

$(function () { // jQB /////////////////
    // 1. 이미지 클릭시 해당 상세페이지 나옴
    $(".outb a").click(function (e) {
        e.preventDefault(); //기본막기
        var idx = $(this).parents(".outb").index(".outb");
        //console.log("순번:" + idx);

        location.href = "sub1.html?wno=" + idx;



    }); ////////// click //////////////
    
    
}); ///////// jQB /////////////////////
/////////////////////////////////////
