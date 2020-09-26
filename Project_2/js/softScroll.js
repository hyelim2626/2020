
var scmov = 0; //스크롤움직는 거리


$(function () { // jQB /////////////////
    
    const totnum = $(document).height(); // 전체 페이지길이
    console.log(totnum);

    $(document).on("mousewheel DOMMouseScroll", function (e) {

        e = window.event || e;
        var delta = e.detail ? e.detail : e.wheelDelta;
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -delta;
        } ///////// 파폭용 방향뒤집기 /////////////


        // 3. 마우스 휠 방향에 따라 페이지번호 증감!
        if (delta < 0) { // 페이지번호 증가
            scmov += 80;
            if (scmov === totnum) scmov = totnum;
        } //// if //////////////////
        else { // 페이지번호 감소
            scmov -= 80;
            if (scmov < 0) scmov = 0;
        } //// else ///////////////


        // 5. 실제이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollTop: scmov + "px"
        }, 800, "easeOutCubic"); /// animate //////

    }); ////// mousewheel 이벤트함수 //////////////
    ////////////////////////////////////////////


}); ///////// jQB /////////////////////
/////////////////////////////////////
