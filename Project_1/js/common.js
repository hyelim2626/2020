// 고봉민김밥 PJ - common.js

///// 로드구역 ///////////////////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!");
        // 전체메뉴에 마우스 오버/아웃시
        // 이벤트대상: .gnb
        // 변경대상: #top            
        // 방법: 이미셋팅된 css가 적용되도록 class="on" 넣기
        var gnb = document.querySelector(".gnb");
        var top = document.querySelector("#top");
        gnb.onmouseover = function () {
            top.setAttribute("class", "inbox clb on");
        }; /////// mouseon 함수 ////////
        gnb.onmouseout = function () {
            top.setAttribute("class", "inbox clb");
        }; /////// mouseover 함수 ////////

    }); //////////// 로드구역 //////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


////// 햄버거버튼 모바일에서 등장 ////////////////
$(function () { //// jQB ///////////

    $(".ham").click(function () {
        if ($(".ham").text() === "≡") {
            $(".gbox").show(200);
            $(".ham").css({
                position: "fixed"
            }).text("×");
        } /// if ////////////////////
        else {
            $(".gbox").hide(200);
            $(".ham").css({
                position: "absolute"
            }).text("≡");
        } //// else /////////////////
    });
}); //////// jQB ///////////////
////////////////////////////////

///// 모바일일때 inbox clb on 제거하기 ////////
$(function(){ // jqb
   if ($(window).width() <= 500) { //모바일셋팅
       $(".ham").click(function(){
           $("#top").removeClass("on");
       });
       /* if (top[pm]["gnb"] === "") {
            $(".inbox > .clb").removeClass("on");
        }*/ //// if ////////////////////
    } //// if ///////////////////////
    
}); ////////jqb////////////

//////// 메뉴 클릭 ////////////////////
//현재페이지명
var cpage = location.href.split("/");
cpage = cpage[cpage.length - 1].split(".")[0];
console.log("페이지명:" + cpage);


$(function () { //// jQB ///////////


    //// 메뉴선택 클릭시 이동하기 ////
    $(".gnb a").click(function (e) {
        e.preventDefault(); //기본이동막기

        // 메뉴 텍스트읽기
        var mtxt = $(this).text();
        console.log("id:" + mtxt);

        // 메뉴별 분기
        if (mtxt === "고봉민김밥") {
            location.href = "sub1.html";
        } //// if문 ////////
        else if (mtxt === "재료이야기") {
            //alert("공사중~");
            location.href = "sub2.html";
        } /// else if문 ////// 
        else if (mtxt === "김밥류") {
            //alert("공사중~");
            location.href = "sub3.html";
        } /// else if문 ////// 
        else if (mtxt === "가맹점찾기") {
            //alert("공사중~");
            location.href = "sub4.html";
        } /// else if문 ////// 
        else if (mtxt === "창업절차") {
            //alert("공사중~");
            location.href = "sub5.html";
        } /// else if문 ////// 


    }); ////////// click ///////////////

    
    $(".logoC").click(function(){
        location.href(index.html);
    }); //// click //////////
    
    
    
    /// 하위메뉴 고를때도 상위메뉴에 hover 색상 나오게하기
    


}); ////////jqb////////////
