////////// 8.메뉴 //////////////////////////////

// 이동할 위치 셋팅변수(전역변수)
var pga = {
    "HOME": 0,
    "GRAPE VARIETIES": 0,
    "CONTECT": 0
};


//현재페이지명
var cpage = location.href.split("/");
cpage = cpage[cpage.length - 1].split(".")[0];
console.log("페이지명:" + cpage);



// 공통 이징
var easing = "easeOutQuint";

$(function () { //// jQB ///////////



    //부드러운 스크롤 적용!
    $("#wrap").smoothWheel();


    //// 메뉴선택 클릭시 이동하기 ////
    $("#menu a").click(function (e) {
        e.preventDefault(); //기본이동막기

        // 메뉴 텍스트읽기
        var mtxt = $(this).text();
        //console.log("id:" + mtxt);

        // 메뉴별 분기
        if (mtxt === "WINE") {
            location.href = "winelist.html";
        } //// if문 ////////
        else if (mtxt === "RECIPES") {
            //alert("공사중~");
            location.href = "recipelist.html";
        } /// else if문 ////// 
        else {

            // 현재 페이지가  index일때만 위치이동을 하고
            // 그 밖의 경우엔 index 페이지로 파라미터를 가지고 간다!!!

            if (cpage === "index") {

                // 위치이동하기
                $("#wrap").animate({
                    scrollTop: pga[mtxt] + "px"
                }, 1500, "easeOutQuint");

                // 메뉴 닫기
                $("#cbtn").trigger("click");

                // 부드러운 스크롤 위치값 동기화!!!
                currentY = -pga[mtxt];


            } ////////// if //////////////
            else { // index가 아닐경우
                location.href = "index.html?pos=" + escape(mtxt);
            } //////// else //////////////

        } //////// else문 ////////


    }); ////////// click ///////////////


    // recipeM 클릭시 레시피 리스트로 이동하기 ////
    $(".recipeM").click(function (e) {
        e.preventDefault(); //기본이동막기

        // 메뉴 텍스트읽기
        var mtxt = $(this).text();
        console.log("id:" + mtxt);

        // 메뉴별 분기
        if (mtxt === "viewmore") {
            location.href = "recipelist.html";
        } //// if문 ////////

    }); ///////// click //////////////

    // wineM 클릭시 레시피 리스트로 이동하기 ////
    $(".wineM").click(function (e) {
        e.preventDefault(); //기본이동막기

        // 메뉴 텍스트읽기
        var mtxt = $(this).text();
        console.log("id:" + mtxt);

        // 메뉴별 분기
        if (mtxt === "viewmore") {
            location.href = "winelist.html";
        } //// if문 ////////

    }); ///////// click //////////////


    // ALL 메뉴버튼
    $("#mbtn>a").click(function (e) {
        // 기본이동 막기
        e.preventDefault();

        // 전체커버(오버작동안되게하기)
        $("#tcover").show();
        setTimeout(function () {
            //전체커버지우기    
            $("#tcover").hide();
        }, 200);

        // 메뉴버튼 클릭시 숨기기
        $(this).hide();

        // 메뉴열기
        $("#menu").animate({
            left: "0"
        }, 800, easing);

        // 사이트커버 나타나기
        $("#scover").show();
    }); /// click /////



    ///// #scover 위에서 마우스 움직일때 닫기버튼 따라다니기 ///////
    $("#scover").mousemove(function (e) { // e-이벤트 전달값 
        var posx = e.pageX;
        var posy = e.pageY;
        //console.log("좌표값:"+posx+"/"+posy);
        // 닫기버튼 위치 이동설정
        $("#cbtn").css({
            top: posy + "px",
            left: posx + "px"
        }); //// css /////

    }); ////// mousemove /////////

    ///// #scover영역에 들어오면 #cbtn보이고 나가면 사라짐 ///////
    $("#scover").mouseenter(
        function () { // over 올라왔을때
            // X버튼보이기
            $("#cbtn").show();
            // 커서없애기
            $("body").css({
                cursor: "none"
            }); //// css ////
        }); ////// mouseenter /////

    $("body").mouseleave(function () {
        // X버튼숨기기
        $("#cbtn").hide();
        // 커서보이기
        $("body").css({
            cursor: "default"
        }); //// css ////
    }); //////// mouseleave ///////

    $("#menu").mouseenter(
        function () { // out 나갈때
            // X버튼숨기기
            $("#cbtn").hide();
            // 커서보이기
            $("body").css({
                cursor: "default"
            }); //// css ////
        }); ///// mouseenter /////


    /////// 닫기버튼 클릭시 원상복귀 ////////
    $("#cbtn").click(function () {
        $(this).hide();

        // 커서보이기
        $("body").css({
            cursor: "default"
        }); //// css ////


        // 메뉴닫기
        $("#menu").animate({
            left: "-50%"
        }, 1000, easing);

        // 사이트커버 없애기
        $("#scover").hide();

        // 닫기버튼 클릭시 메뉴버튼 보이기
        $("#mbtn>a").show();
    }); //// click //////



}); //////// jQB ///////////////
////////////////////////////////







///////////// 11.레시피 옆으로 드래그 //////////////////////////


$(document).ready(function (e) {


    // #recipebox가 없는 페이지는 거름! /////////
    if (cpage !== "recipelist" || cpage !== "recipe") {

    // 레시피 스와이프 적용 //
    var swiper5;
    /*////////////////////////////////////////
        함수명:swiperSet
        기능: 스와이퍼 플러그인 셋팅함수
    */ ////////////////////////////////////////
    var swiperSet = function () {
        if ($(window).width() <= 500) { //모바일셋팅
            swiper = new Swiper('.swiper-container5', {
                slidesPerView: 1,
                spaceBetween: 0,
                //loop: true,
            });
        } //// if ///////////////////////
        else { // 일반셋팅
            swiper = new Swiper('.swiper-container5', {
                slidesPerView: 3,
                spaceBetween: 30,
                //loop: true,
            });

        } //// else /////////////////////
    }; ///////////// swiperSet 함수 //////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    /// 스와이퍼 셋팅 호출
    swiperSet();

//        var swiper5 = new Swiper('.swiper-container5', {
//            slidesPerView: 3,
//            spaceBetween: 30,
//        }); ////////// swiper ///////////////
//        
        

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



        //// 레시피 페이지 이동하기 ///////


        // 이미지 클릭시 해당 상세페이지로(레시피)
        $(".rimg").click(function (e) {
            e.preventDefault(); //기본막기
            var idx = $(this).parents("li").index();
            //console.log("순번:" + idx);

            location.href = "recipe.html?wno=" + idx;



        }); ////////// click //////////////
        
    } ///////// if /////////////////////////////
    // #recipebox가 없는 페이지는 거름!////////////
    /////////////////////////////////////////////





}); //jQB//////////////////////////////
///////////////////////////////////////
