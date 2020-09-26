/// 메인 페이지 JS - main.js ///

/// 전역변수구역 ////////

// 0.스크롤 위치값
var scTop = 0;

// 1. 액션기준위치 변수
var actpos1, actpos2, actpos3, actpos4, actpos5;
var wbgpos;//배경박스위치

// 2. 액션실행여부
var actsts1 = 0,
    actsts2 = 0,
    actsts3 = 0,
    actsts4 = 0,
    actsts5 = 0;

// 3. 범위갭//////////////////////
// 1)첫번째
var gap1 = $(window).height() / 2;
// 2)두번쨰
var gap2 = $(window).height() / 1.5;
// 3)세번째
var gap3 = $(window).height() / 5;
// 4)네번째
var gap4 = $(window).height() / 2.5;
// 5)다섯번째
var gap5 = $(window).height();

//console.log("갭:"+gap);




// Get방식으로 넘어온 파라미터 처리하기!!!
var pm = location.href;
// location.href의 두얼굴~~~

// 위치이동 상태값
var gopsts = 0; //0-이동안함,1-이동함

if (pm.indexOf("?") !== -1) { //물음표가 있으면 위치이동

    gopsts = 1; //이동함 상태변경

    //// url 문자값 가공처리하기 ///////
    pm = pm.split("?")[1]; //물음표로 자름!(배열번호 0,1 중 1번)
    pm = pm.split("=")[1]; //이퀄로 자름!(배열번호 1번이 값이다!)
    //console.log("3차가공:" + pm);

} ///////// if문 //////////////////////









$(function () { // jQB /////////////////

    /// 이동페이지 위치 셋팅(약간의 로딩시간 계산)
    setTimeout(function () {

        pga["GRAPE VARIETIES"] = $("#grapebg").offset().top;
        pga["CONTECT"] = $("#footlogo").offset().top;
        //console.log("grapebg:" + pos_grapebg);

    }, 500);


    /// 스크롤 액션 기준위치값 셋팅
    actpos1 = $("#txtbg").offset().top;
    actpos2 = $("#txt p:nth-of-type(2)").offset().top;
    actpos3 = $("#txt p:nth-of-type(3)").offset().top;
    actpos4 = $("#wine>ul").eq(0).offset().top;
    actpos5 = $("#wine>ul").eq(1).offset().top;
    actpos6 = $("#wine>ul").eq(2).offset().top;
    wbgpos = $("#winefram").offset().top;

    console.log("wbgpos:"+wbgpos);





    var scNum = 0;
    var scPos = 0;
    //////////////// 4.스크롤 액션! ///////////////////////
    // window가 아니고 #wrap요소이므로 제이쿼리블록안으로!!!!
    $("#wrap").scroll(function () {
        scTop = $(this).scrollTop();
        //console.log("스크롤:" + scTop);
        
        
        
        
        
        //////////////// 직접만든 패럴렉스 /////////////////////
        if(scTop > wbgpos-gap2 && scTop < wbgpos + gap2){
            
            console.log("방향:"+(scPos-scTop));
            var diff = scPos-scTop;
            if(diff<0){//내려감
                scNum++;
            } /// if ///////////
            else{ // 올라감
                scNum--;
            } /// else if ///////
            
            // 한계값 셋팅
            if(scNum<0) scNum = 0;//위치고정!
        
            $("#winebg img").css({
                top:-scNum+"px"
            });
            
            
            // 스크롤 차이수 계산
            scPos = scTop;
            
        } ////////// if문 (직접만든 패럴렉스!!!) /////////////

        ///////////////////////////////////////////////////////////////////////
        // 1. 첫번째 컨텐츠 글자 등장
        if (scTop > actpos1 - gap1 && scTop < actpos1 && actsts1 === 0) {
            actsts1 = 1; //잠금!
            $("#txtbg .AF").addClass("on");
        } //// if문 ////////////

        // 2. 두번째 컨텐츠 문단 등장
        else if (scTop > actpos2 - gap2 && scTop < actpos2 && actsts2 === 0) {
            actsts2 = 1; //잠금!
            $("#txt p:nth-of-type(2)").addClass("on");
        } //// else if문 ////////////

        // 3. 세번째 컨텐츠 글자 등장
        else if (scTop > actpos3 - gap1 && scTop < actpos3 && actsts3 === 0) {
            actsts3 = 1; //잠금!
            $("#txt p:last-child").addClass("on");
        } //// else if문 ////////////
        ////////////////////////////////////////////////////////////////////////


        ///////////////////// 5. 와인돌리기 ///////////////////
        // 1.화이트와인
        if (scTop > actpos4 - gap4 && scTop < actpos4 - gap3) {
            // 1.와인
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(0deg)"
            });

            // 2.원
            $("#wine>ul").eq(0).find(".cir").css({
                transform: "translateY(-50%) scale(1)"
            });

        } /// if문 /////
        else if (scTop > actpos4 - gap4 && scTop < actpos4) {
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(10deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos4 && scTop < actpos4 + gap1) {
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(20deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos4 + gap1 && scTop < actpos4 + gap5) {
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(30deg)"
            });
        } /// else if문 /////

        /*// 1.화이트와인 - 선생님이 잡아주신거
        if (scTop > actpos3 - gap5 && scTop < actpos3 - gap1) {
            // 1.와인
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(0deg)"
            });
            
            // 2.원
            $("#wine>ul").eq(0).find(".cir").css({
                transform: "translateY(-50%) scale(1)"
            });
            
        } /// if문 /////
        else if (scTop > actpos3 - gap1 && scTop < actpos3) {
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(4deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos3 && scTop < actpos3 + gap1) {
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(12deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos3 + gap1 && scTop < actpos3 + gap5) {
            $("#wine>ul").eq(0).find(".wpic").css({
                transform: "rotate(20deg)"
            });
        } /// else if문 /////*/


        // 2.레드와인
        if (scTop > actpos5 - gap4 && scTop < actpos5 - gap3) {
            // 1.와인
            $("#wine>ul").eq(1).find(".wpic").css({
                transform: "rotate(0deg)"
            });

            // 2.원
            $("#wine>ul").eq(1).find(".cir").css({
                transform: "translateY(-50%) scale(1)"
            });

        } /// if문 /////
        else if (scTop > actpos5 - gap4 && scTop < actpos5) {
            $("#wine>ul").eq(1).find(".wpic").css({
                transform: "rotate(-10deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos5 && scTop < actpos5 + gap1) {
            $("#wine>ul").eq(1).find(".wpic").css({
                transform: "rotate(-20deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos5 + gap1 && scTop < actpos5 + gap5) {
            $("#wine>ul").eq(1).find(".wpic").css({
                transform: "rotate(-30deg)"
            });
        } /// else if문 /////


        // 3.로제와인
        if (scTop > actpos6 - gap4 && scTop < actpos6 - gap3) {
            // 1.와인
            $("#wine>ul").eq(2).find(".wpic").css({
                transform: "rotate(0deg)"
            });

            // 2.원
            $("#wine>ul").eq(2).find(".cir").css({
                transform: "translateY(-50%) scale(1)"
            });

        } /// if문 /////
        else if (scTop > actpos6 - gap4 && scTop < actpos6) {
            $("#wine>ul").eq(2).find(".wpic").css({
                transform: "rotate(10deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos6 && scTop < actpos6 + gap1) {
            $("#wine>ul").eq(2).find(".wpic").css({
                transform: "rotate(20deg)"
            });
        } /// else if문 /////
        else if (scTop > actpos6 + gap1 && scTop < actpos6 + gap5) {
            $("#wine>ul").eq(2).find(".wpic").css({
                transform: "rotate(30deg)"
            });
        } /// else if문 /////

    }); //////// scroll ////////////////
    ///////////////////////////////////



    ////////////// 6. cir:hover scale ////////////////////////////
    $(".big").hover(
        function () {
            $(".cir", this).css({
                transform: "translateY(-50%) scale(1.2)"
            });
        },
        function () {
            $(".cir", this).css({
                transform: "translateY(-50%) scale(1)"
            });
        });


    /////////////// 7. more:hover scale ////////////////////
    $(".wt>.more").hover(
        function () { // over
            $(this).css({
                transform: "scale(1.07)"
            })
        },
        function () { // out
            $(this).css({
                transform: "scale(1)",
            })
        });


    /// 와인배경 패럴렉스 적용하기 ///
    //$("#wrap").enllax();



    // 와인포도소개 스와이프 적용 //
    var swiper;
    /*////////////////////////////////////////
        함수명:swiperSet
        기능: 스와이퍼 플러그인 셋팅함수
    */ ////////////////////////////////////////
    var swiperSet = function () {
        if ($(window).width() <= 500) { //모바일셋팅
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                loop: true,
            });
        } //// if ///////////////////////
        else { // 일반셋팅
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                loop: true,
            });

        } //// else /////////////////////
    }; ///////////// swiperSet 함수 //////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    
    /// 스와이퍼 셋팅 호출
    swiperSet();
    
    
    // 화면 사이즈 변경시에 실행!    
//    $(window).resize(function(){
//        location.reload();
//    });///////// resize /////////////
    
    


    ////////// more:hover시 .morebox 등장 ////////////////
    $(".more").hover(
        function () {
            $(".morebox", this).fadeIn(200);
        },
        function () {
            $(".morebox", this).stop().fadeOut(200);
        }); /// hover /////




    // 만약 다른데서 호출함으로 위치이동시
    if (gopsts === 1) {
        /// 이동페이지 위치 셋팅(약간의 로딩시간 계산)
        setTimeout(function () {


            console.log(unescape(pm));
            // 전달값 복원 - unescape
            pm = unescape(pm);

            console.log(pga[pm]);

            // 위치이동하기
            $("#wrap").animate({
                scrollTop: pga[pm] + "px"
            }, 1500, "easeOutQuint");

            // 메뉴 닫기
            $("#cbtn").trigger("click");

            // 부드러운 스크롤 위치값 동기화!!!
            currentY = -pga[pm];


        }, 600);

    } ////////// if문 /////////




}); ///////// jQB /////////////////////
/////////////////////////////////////









/////////// 11.돌아가는 포도 커서따라가기 ///////////
$(function () { //// jQB ///////////
    // 포인터가 움직일 영역: window
    $("#grapebg").mousemove(function (e) { //e는 이벤트 전달변수
        var posx = e.pageX + 5;
        var posy = e.pageY + 5;
        //console.log("x:y=" + posx + ":" + posy);

        // 마우스 포인터 위치에따라 이미지를 이동하여 따라다님
        $("#podo").css({
            top: posy + "px",
            left: posx + "px"
        }); //// css ///////

        //        $("body").css({
        //            cursor: "none"
        //        });

    }); ///////// mousemove ////////////

    //    $("#grapebg").mouseleave(function () {
    //        // 커서이미지 숨기기
    //        
    //        $("body").css({
    //            cursor: "defalt"
    //        });
    //    }); ////////// mouseleave //////////

    // window에 마우스가 들어오면 커서보이고
    // 나가면 숨기기
    var podosts = 0; //포도상태값(0-아님,1-위임)
    $("#grapebg").hover(
        function () { // hover
            $("#podo").show();
            $(this).css({
                cursor: "none"
            });
            podosts = 1;
            console.log("포도:" + podosts);
        },
        function () { // out
            $("#podo").hide();
            $(this).css({
                cursor: "defalt"
            });
            podosts = 0;
            console.log("포도:" + podosts);
        }); ////////// hover ////////////

    $(".btnbox").hover(
        function () { // hover
            if (podosts === 1) {
                $("#podo").hide();
                $(this).css({
                    cursor: "defalt"
                });
            } //// if 문 /////
        },
        function () { // out
            if (podosts === 1) {
                $("#podo").show();
                $(this).css({
                    cursor: "none"
                });
            } //// if 문 /////
        }); ////////// hover ////////////

    ////////////// 12. 레시피 호버시 스케일 ////////////////////////////
    $("#rbig").hover(
        function () {
            $(".rimg", this).css({
                transform: "scale(2)"
            });
        },
        function () {
            $(".rimg", this).css({
                transform: "scale(1)"
            });
        });

    ////////////// 13. 포도 호버시 테두리색 변화 ////////////////
    $(".swiper-slide").hover(
        function () {
            $(".inb", this).css({
                border: "2px solid #fff"
            }, 500);
        },
        function () {
            $(".inb", this).css({
                border: "2px solid #1e1c16"
            }, 500);
        });
    
    ///////////////// 14.이미지 클릭시 해당 상세페이지로 //////////////
    $(".rimg").click(function (e) {
        e.preventDefault(); //기본막기
        var idx = $(this).parents(".rimg").index(".rimg");
        //
        //console.log("순번:" + idx);

        location.href = "recipe.html?wno=" + idx;



    }); ////////// click //////////////

}); //////// jQB ///////////////
////////////////////////////////
