// 레시피리스트 js - recipe.js 


/// 코드별 전역변수 셋팅 ///
// 1. 레시피 이미지명
var rimg = [
    "white-sangria_thumb-detail",
    "cucumber_thumb-detail",
    "rose-and-berries_thumb-detail",
    "aperol_thumb-detail",
    "watermelon_thumb-detail",
    "sangria_thumb-detail",
    "cooler_thumb-detail",
    "rose-margarita_thumb-detail"
];

// 2. 레시피 정보
var rtxt = [
    {
        "cat": "White Sangria",
        "Ingredients": "MAKES 8 COCKTAILS:",
        "ord1": "1 BOTTLE OF DRY WHITE WINE",
        "ord2": "3 SHOTS OF APPLE LIQUEUR",
        "ord3": "2 LEMONS CUT INTO SLICES",
        "ord4": "2 RIPE PEACHES CUT INTO PIECES",
        "ord5": "3 RIPE GREEN APPLES CUT INTO PIECES",
        "ord6": "0.5 CUP OF RASPBERRIES",
        "Recipe": "Mix all ingredients and allow to chill in the fridge for 2 hours. Add ice cubes and serve with slices of lemon."
    },
    {
        "cat": "Cucumber Cocktail",
        "Ingredients": "MAKES 18 COCKTAILS:",
        "ord1": "1 BOTTLE OF WHITE WINE",
        "ord2": "2 CUPS OF ELDERBERRY SYRUP",
        "ord3": "1 BOTTLE OF CARBONATED WATER (SODA)",
        "ord4": "2 CUCUMBERS",
        "ord5": "3 RIPE GREEN APPLES CUT INTO PIECES",
        "ord6": "MINT LEAVES",
        "Recipe": "Cut 2 long strips of cucumber Cut the rest of the cucumber into pieces and blend together with elderberry syrup in blender. Add the chilled wine, carbonated water. Serve over ice, with cucumber strips, mint leaf garnish."
    },
    {
        "cat": "Rosé with Strawberries",
        "Ingredients": "MAKES 8 COCKTAILS:",
        "ord1": "1 BOTTLE OF ROSÉ",
        "ord2": "1/4 CUP SUGAR SYRUP",
        "ord3": "1/2 CUP OF LEMON JUICE",
        "ord4": "15-20 STRAWBERRIES",
        "ord5": "MINT LEAVES",
        "ord6": "",
        "Recipe": "Gently mash the strawberries and add the lemon juice. Add the other ingredients. Serve over ice with mint leaf garnish."
    },

    {
        "cat": "Spritz",
        "Ingredients": "MAKES 10 COCKTAILS:",
        "ord1": "1 BOTTLE OF CHILLED WHITE WINE",
        "ord2": "0.5 L OF CHILLED CARBONATED WATER (SODA)",
        "ord3": "10 SLICES OF LIME",
        "ord4": "",
        "ord5": "",
        "ord6": "",
        "Recipe": "Mix all ingredients, add slices of lime and serve. The wine and soda must be well chilled in advance."
    },
    {
        "cat": "Sangria with Watermelon and Raspberry",
        "Ingredients": "MAKES 8 COCKTAILS:",
        "ord1": "1 BOTTLE OF ROSÉ",
        "ord2": "3-4 WATERMELON PIECES",
        "ord3": "8-10 RASPBERRIES",
        "ord4": "MINT LEAVES",
        "ord5": "",
        "ord6": "",
        "Recipe": "Clean the watermelon from any seeds. Mash the fruits and add the chilled wine. Serve over ice with mint leaf garnish."
    },

    {
        "cat": "Red Sangria",
        "Ingredients": "MAKES 20 COCKTAILS:",
        "ord1": "2 BOTTLES OF RED WINE",
        "ord2": "1 ORANGE",
        "ord3": "1 CUP OF ORANGE JUICE",
        "ord4": "1 CUP OF POMEGRANATE JUICE",
        "ord5": "1/2 CUP POMEGRANATE SEEDS",
        "ord6": "ORANGE SLICES",
        "Recipe": "Mix all ingredients and allow to chill in the refrigerator for 2 hours. Add ice and serve with slices of orange."
    },
    {
        "cat": "Wine Coolness",
        "Ingredients": "MAKES 20 COCKTAILS:",
        "ord1": "1 BOTTLE OF MERLOT",
        "ord2": "1 CRANBERRY JUICE",
        "ord3": "1 ORANGE JUICE",
        "ord4": "1.5 L OF WATER OR SODA",
        "ord5": "20 SLICES OF ORANGE",
        "ord6": "",
        "Recipe": "Mix all ingredients and allow to chill in the refrigerator for 2 hours. Add ice cubes and serve with slices of orange."
    },
    {
        "cat": "Rosé Margarita",
        "Ingredients": "MAKES 8 COCKTAILS:",
        "ord1": "1 BOTTLE OF ROSÉ",
        "ord2": "1 CUP OF LEMON JUICE",
        "ord3": "1 CUP OF TEQUILA",
        "ord4": "AGAVE JUICE TO TASTE",
        "ord5": "",
        "ord6": "",
        "Recipe": "Mix all ingredients add a lemon slice and serve."
    },

];


// 이름순서 배열
var cnm = ["cat", "Ingredients", "ord1", "ord2", "ord3", "ord4", "ord5", "ord6", "Recipe"];

// 레시피 이미지에 뜨는 이름 배열..?
var imgname = [
    "White Sangria",
    "Cucumber Cocktail",
    "Rosé with Strawberries",
    "Spritz",
    "Sangria with Watermelon and Raspberry",
    "Red Sangria",
    "Wine Coolness",
    "Rosé Margarita"
];

//Get방식으로 넘어온 파라미터 처리하기!!!
var pm = location.href;
// location.href의 두얼굴~~~

if (pm.indexOf("?") === -1) { //물음표가 없으면
    alert("레시피 리스트 페이지로 이동합니다!");
    location.href = "recipelist.html";
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
   /* $(window).resize(function () {
        location.reload();
    }); ///////// resize /////////////*/


    // 이미지 클릭시 해당 상세페이지로(와인)
    $("#pdbox>li").click(function () {
        var idx = $(this).index();
        //console.log("순번:"+idx);
        // 페이지 호출하기 
        location.href = "sub1.html?wno=" + idx;
    }); ///////// click /////////////////



    //// 페이지 셋업!!! //////////////
    // 1. 레시피 이미지 변경하기 
    $(".rec").attr("src", "images/" + rimg[pm] + ".jpg");

    //console.log($(".txt").length);

    // 2. 텍스트 내용 변경하기
    for (var i = 0; i < $(".txt").length; i++) {
        //console.log("ㅎㅎ");
        $(".txt").eq(i).text(rtxt[pm][cnm[i]]);
    } ///// for문 /////////////////////////



    //    // 3. 레시피 이미지에 뜨는 이름 변경하기
    //    for (var i = 0; i < $(".rec").length; i++) {
    //        //console.log("ㅎㅎ");
    //        $(".rec").eq(i).text(imgname[pm[i]]);
    //    } ///// for문 /////////////////////////
    //
    //
    //
    //    // 1.이미지 위에 글씨나오게
    //    $(".rec").hover(
    //        function () { // over
    //            $(".lbox .AF").stop().fadeIn(200);
    //        },
    //        function () { // out
    //            $(".lbox .AF").stop().fadeOut(500);
    //        });
    //
    //
    //    // 4.마지막 레시피내용 오른쪽으로 땡기기
    //    if (pm === 7) {
    //        $(".txtright").css({
    //            position: "relative",
    //            left: "-50px"
    //        }); /////css//////
    //    } ////////////if///////////



}); //////// jQB ///////////////
////////////////////////////////
