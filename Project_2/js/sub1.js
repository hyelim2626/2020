// 서브페이지1 JS - sub1.js //

/// 코드별 전역변수 셋팅 ///
// 1. 와인 이미지명
var wimg = [
    "menada-sauvignion-blanc_thumb-detail",
    "menada-traminer_thumb-detail",
    "menada-muscat_thumb-detail",
    "menada-chardonay_thumb-detail",
    "menada-merlot_thumb-detail",
    "menada-cabernet-sauvignon_thumb-detail",
    "menada-mavrud_thumb-detail",
    "menada-rose_thumb-detail"
];
// 2. 와인 배경색
var wbgc = [
    "#f7ce58",
    "#b2c800",
    "#f55805",
    "#0075a3",
    "#ba052a",
    "#a10056",
    "#723da0",
    "#ffb7ad"
];

// 3. 와인 정보
var wtxt = [
    {
        "cat1": "White wine",
        "cat2": "Sauvignon Blanc",
        "tit1": "Sauvignon",
        "tit2": "Blanc",
        "alc": "12,0%",
        "Vintage": "2015",
        "Blend": "Sauvignon Blanc",
        "Aging in oak": "NO",
        "Color": "Nice light yellow color",
        "Nose1": "The nose is pleasant",
        "Nose2": "and balanced",
        "Taste1": "Fruity taste and",
        "Taste2": "long and tender aftertaste",
        "Temperature": "10°–12℃",
        "Consume with1": "Salad",
        "Consume with2": "Mushrooms＆Vegetables",
        "Consume with3": "Bread",
        "Consume with4": "Fish"
    },
    {
        "cat1": "White wine",
        "cat2": "Traminer",
        "tit1": "",
        "tit2": "Traminer",
        "alc": "12,0%",
        "Vintage": "2016",
        "Blend": "Traminer",
        "Aging in oak": "NO",
        "Color": "Bright light straw color",
        "Nose1": "Charming aroma of roses",
        "Nose2": "and ripe fruits",
        "Taste1": "harmonious with pronounced",
        "Taste2": "softness and freshness",
        "Temperature": "10°–12℃",
        "Consume with1": "Salad",
        "Consume with2": "Mushrooms＆Vegetables",
        "Consume with3": "Bread",
        "Consume with4": "Fish"
    },
    {
        "cat1": "White wine",
        "cat2": "Muscat",
        "tit1": "",
        "tit2": "Muscat",
        "alc": "12,0%",
        "Vintage": "2016",
        "Blend": "Muscat",
        "Aging in oak": "NO",
        "Color": "light yellow-green color",
        "Nose1": "intriguing accents of raw almonds,",
        "Nose2": "geranium and pelargonium",
        "Taste1": "Light taste with freshness and balance,",
        "Taste2": "long soft muscat aroma at the final",
        "Temperature": "10°–12℃",
        "Consume with1": "Salad",
        "Consume with2": "Mushrooms＆Vegetables",
        "Consume with3": "Bread",
        "Consume with4": "Fish"
    },
    {
        "cat1": "White wine",
        "cat2": "Chardonnay",
        "tit1": "",
        "tit2": "Chardonnay",
        "alc": "12,0%",
        "Vintage": "2015",
        "Blend": "Sauvignon Blanc",
        "Aging in oak": "NO",
        "Color": "Straw-yellow color with greenish tones",
        "Nose1": "Delicate and fresh nose",
        "Nose2": "with light and pleasant shades",
        "Taste1": "elegant freshness and",
        "Taste2": "finesse in the taste",
        "Temperature": "10°–12℃",
        "Consume with1": "Salad",
        "Consume with2": "Mushrooms＆Vegetables",
        "Consume with3": "Bread",
        "Consume with4": "Fish"
    },
    {
        "cat1": "Red wine",
        "cat2": "Merlot",
        "tit1": "",
        "tit2": "Merlot",
        "alc": "12,0%",
        "Vintage": "2016",
        "Blend": "Merlot",
        "Aging in oak": "NO",
        "Color": "Dense ruby color",
        "Nose1": "Rich complex color,",
        "Nose2": "dominated by ripe red fruit",
        "Taste1": "dense and manifold of raspberries,",
        "Taste2": "cherries, plums and chocolate",
        "Temperature": "18°–20℃",
        "Consume with1": "Hard cheese",
        "Consume with2": "Eggs and chicken",
        "Consume with3": "Meat",
        "Consume with4": "Sausages"
    },
    {
        "cat1": "Red wine",
        "cat2": "Cabernet Sauvignon",
        "tit1": "Cabernet",
        "tit2": "Sauvignon",
        "alc": "12,0%",
        "Vintage": "2015",
        "Blend": "Cabernet Sauvignon",
        "Aging in oak": "NO",
        "Color": "Dark ruby red color",
        "Nose1": "Fruit nose with sweet accents of violets",
        "Nose2": "and raspberry jam, vanilla and spices",
        "Taste1": "Fresh taste, good body",
        "Taste2": "with long aftertaste",
        "Temperature": "18°–20℃",
        "Consume with1": "Hard cheese",
        "Consume with2": "Eggs and chicken",
        "Consume with3": "Meat",
        "Consume with4": "Sausages"
    },
    {
        "cat1": "Red wine",
        "cat2": "Mavrud",
        "tit1": "",
        "tit2": "Mavrud",
        "alc": "12,0%",
        "Vintage": "2016",
        "Blend": "Menada Mavrud",
        "Aging in oak": "NO",
        "Color": "Dense and intense violet-red color",
        "Nose1": "specific and pleasant of blackberries,",
        "Nose2": "ripe mulberries, plums and chocolate",
        "Taste1": "Dense and rich harmonious taste,",
        "Taste2": "with balanced velvety tannins",
        "Temperature": "18°–20℃",
        "Consume with1": "Hard cheese",
        "Consume with2": "Eggs and chicken",
        "Consume with3": "Meat",
        "Consume with4": "Sausages"
    },
    {
        "cat1": "Rosé wine",
        "cat2": "Cabernet Sauvignon",
        "tit1": "Cabernet",
        "tit2": "Sauvignon",
        "alc": "13,0%",
        "Vintage": "2016",
        "Blend": "Cabernet Sauvignon",
        "Aging in oak": "NO",
        "Color": "Charming pink color",
        "Nose1": "Rich and fruity aroma, accents of ripe",
        "Nose2": "forest berries, cherry and spicy herbs",
        "Taste1": "Interesting taste with",
        "Taste2": "spicy accents",
        "Temperature": "8°–12℃",
        "Consume with1": "Mushrooms＆Vegetables",
        "Consume with2": "Sea food",
        "Consume with3": "Eggs and chicken",
        "Consume with4": "Sausages"
    }
];


// 이름순서 배열
var cnm = ["cat1", "cat2", "tit1", "tit2", "alc", "Vintage", "Blend", "Aging in oak", "Color", "Nose1", "Nose2", "Taste1", "Taste2", "Temperature", "Consume with1", "Consume with2", "Consume with3", "Consume with4"];

//Get방식으로 넘어온 파라미터 처리하기!!!
var pm = location.href;
// location.href의 두얼굴~~~

if (pm.indexOf("?") === -1) { //물음표가 없으면
    alert("와인리스트페이지로 이동합니다!");
    location.href = "winelist.html";
} ///////// if문 //////////////////////

//// url 문자값 가공처리하기 ///////
pm = pm.split("?")[1]; //물음표로 자름!(배열번호 0,1 중 1번)
pm = pm.split("=")[1]; //이퀄로 자름!(배열번호 1번이 값이다!)
pm = Number(pm); //숫자형변환!
console.log("3차가공:" + pm);


$(function () { //// jQB ///////////

    // 와인소개 스와이프 적용 //
    var swiper;
    /*////////////////////////////////////////
        함수명:swiperSet
        기능: 스와이퍼 플러그인 셋팅함수
    */ ////////////////////////////////////////
    var swiperSet = function () {
        if ($(window).width() <= 500) { //모바일셋팅
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 2,
                //loop: true,
            });
        } //// if ///////////////////////
        else { // 일반셋팅
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 4,
                //loop: true,
            });

        } //// else /////////////////////
    }; ///////////// swiperSet 함수 //////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    
     /// 스와이퍼 셋팅 호출
    swiperSet();
    
    
    // 화면 사이즈 변경시에 실행!    
  /*  $(window).resize(function(){
        location.reload();
    });///////// resize /////////////*/
    
    

    //// 페이지 셋업!!! //////////////
    // 1. 와인 이미지 변경하기 
    $(".wine").attr("src", "images/" + wimg[pm] + ".png");

    // 2. 와인 배경색 변경하기
    $(".lbox").css({
        backgroundColor: wbgc[pm]
    });


    //console.log($(".txt").length);
    // 3. 와인 정보를 각 class개수 만큼 순서대로 셋팅된 값을 넣는다!

    //console.log(wtxt[pm]["Temperature"]);

    for (var i = 0; i < $(".txt").length; i++) {
        $(".txt").eq(i).text(wtxt[pm][cnm[i]]);
    } ///// for문 /////////////////////////


    // 4. 와인 타이틀 변경하기
    $(".wineinfo .AF").css({
        color: wbgc[pm]
    });
    // 5. 와인 내용 변경하기
    $(".detail ol , .detail ul").css({
        color: wbgc[pm]
    });

    // 6. 와인정보표 라인색 변경위한 class넣기
    $(".detail > ol,.wineinfo").addClass("wc" + pm);

    // 7. 와인 큰글자가 하나일때 class넣기
    if (wtxt[pm]["tit1"] === "") {
        $(".label > h3").addClass("one");
    } //// if ////////////////////

    // 8. 모바일일때 class 안들어가게...
    if ($(window).width() <= 500) { //모바일셋팅
        if (wtxt[pm]["tit1"] === "") {
            $(".label > h3").removeClass("one");
        } //// if ////////////////////
    } //// if ///////////////////////
    
    
    // 이미지 클릭시 해당 상세페이지로(와인)
    $("#pdbox>li").click(function(){
        var idx = $(this).index();
        //console.log("순번:"+idx);
        // 페이지 호출하기 
        location.href = "sub1.html?wno="+idx;
    }); ///////// click /////////////////
    
    



    // 8.카테고리에서 화이트/레드/로제와인 텝으로 돌아가는 버튼 클릭시 위치맞추기
    // ccom 클릭시 레시피 리스트로 이동하기 ////
    /*$(".gored").click(function (e) {
        e.preventDefault(); //기본이동막기

        // 메뉴 텍스트읽기
        var mtxt = $(this).text();
        //console.log("id:" + mtxt);

        // 메뉴별 분기
        if (mtxt === "Red wine") {
            /// 이동페이지 위치 셋팅(약간의 로딩시간 계산)
            setTimeout(function () {

                pga["Red wine"] = $(".line2").offset().top;
                //console.log("grapebg:" + pos_grapebg);

            }, 500);
            
            location.href = "winelist.html";
        } //// if문 ////////

    }); ///////// click //////////////*/
    
    // 해당와인 리스트에서 제거하기 //
    // 넘어온 파라미터 번호(순번) 제거함!
    $("#pdbox>li").eq(pm).hide();





}); //////// jQB ///////////////
////////////////////////////////
