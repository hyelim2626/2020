// 고봉민김밥 메인 페이지 PJ - main.js

// 전역변수구역 ////
var pos1, pos2, pos3;
var sts1 = 0,
    sts2 = 0,
    sts3 = 0;
// 0은 실행전, 1은 실행후


/// 스크롤 등장액션 //////
$(window).scroll(function (e) {
    var scTop = $(this).scrollTop();
    //console.log("스크롤위치:" + scTop);
    if (scTop > pos1 - 300 && scTop < pos1 && sts1 === 0) {
        sts1 = 1; //한번만실행(상태변경!)
        $(".tbox").css({
            transform: "translateY(0px)",
            opacity: 1
        }); ///// css ///////////
    } //// if ///////////////////
}); /////// scroll ///////////




$(function () { // jQB //////////////////////////

    /// 타겟 박스 위치구하기 ////
    pos1 = $(".tbox").offset().top; /*페이지에서 요소의 위치값(top값)*/
    //console.log(".tbox위치:" + pos1);


    /// 타겟 초기 셋팅하기 ///
    $(".tbox").css({
        transform: "translateY(30px)",
        opacity: 0,
        transition: "all .8s ease-out"
    }); ///// css ///////////


    // 재생/멈춤버튼 클릭시
    var psts = 0; //상태값(0-재생상태,1-멈춤상태)
    $(".btn").click(function () {
        //console.log("버튼클릭");
        if (psts === 0) {
            $("li", this).eq(1).addClass("on");
            $("li", this).eq(0).removeClass("on");
            //자동넘김 멈춤
            clearInterval(autoI);
            psts = 1; // 상태값변경
        } //// if문 //////
        else if (psts === 1) {
            $("li", this).eq(0).addClass("on");
            $("li", this).eq(1).removeClass("on");
            //자동넘김 시작
            autoSlide();
            psts = 0; // 상태값변경
        } //// else if문 ///////

        return false;
        //위로 튀지않게처리

    }); /////// click ///////////



    /*////////////////////////////////////////
        함수명: goSlide
        기능: 슬라이드 넘기기함수
    */ ////////////////////////////////////////
    var goSlide = function (seq) {
        //console.log("순번:" + seq);
        // 슬라이드 이동하기
        slider.style.left = (-100 * seq) + "%";
        slider.style.transition = "left .8s ease-in-out";

        //블릿변경하기
        // 초기화
        for (var i = 0; i < indic.length; i++) {
            indic[i].setAttribute("class", "");
        }
        //해당순번 블릿on넣기
        indic[seq].setAttribute("class", "on");

        snum = seq; //전역순번에 반영하기!

    } ///////////// goSlide 함수 //////////////
    //////////////////////////////////////////
    //////////////////////////////////////////



    /*////////////////////////////////////////
        함수명: setLink
        기능: 링크셋팅함수
    */ ////////////////////////////////////////
    var snum = 0; //슬라이드순번
    var setLink = function (seq) {
        /// 익명함수를 리턴한다!
        return function () {
            // 슬라이드 넘기기함수호출
            goSlide(seq);

        }; ///// return ////////
    } ///////////// setLink 함수 //////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    /*//////////////////////////////////////
        함수명: autoSlide
        기능: 인터발넘기기
    */ ///////////////////////////////////////
    var autoI; //인터발용변수
    var autoSlide = function () {
        autoI = setInterval(function () {
            snum++;
            if (snum > indic.length - 1) snum = 0;
            goSlide(snum);

        }, 3000); //// 인터발함수 ////////

    }; /////////////// autoSlide함수 ///////////////
    //////////////////////////////////////////////////

    /// 자동넘김 최초호출
    autoSlide();




    // 배너블릿버튼 클릭시 배너이동
    // 이벤트: click
    // 이벤트 대상: .indic li
    // 변경대상: .slider
    var indic = document.querySelectorAll(".indic li");
    var slider = document.querySelector(".slider");
    for (var i = 0; i < indic.length; i++) {
        //console.log("블릿!");
        indic[i].onclick = setLink(i);
    } //////// for문 //////////////////////////////


    ////// 프렌차이즈 아이콘 기본이동방지
    $(".icon a").click(function (e) {
        e.preventDefault();
    }); ///// click ////////////





    /// 창업절차 클릭시 페이지 넘기기

    //현재페이지명
    var cpage = location.href.split("/");
    cpage = cpage[cpage.length - 1].split(".")[0];
    //console.log("페이지명:" + cpage);


     //// 메뉴선택 클릭시 이동하기 ////
    $(".icon1 a").click(function () {

        // 메뉴 텍스트읽기
        var mtxt = $(".icon1 a h4").text();
        console.log("id:"+mtxt);

        // 메뉴별 분기
        if (mtxt === "창업절차") {
            location.href = "sub5.html";
        } //// if문 ////////
        
    }); //// click //////////




}); //////// jQB //////////////////////////////
//////////////////////////////////////////////
