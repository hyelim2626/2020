// 고봉민김밥 김밥류 - sub3.js

$(function(){
        $("a").click(function(e){
            e.preventDefault();
        });////// click /////////
        
        $(".fbox").click(function(e){
            var idx = $(this).index()+1;
            console.log("나야나!~"+idx);
            //이미지 경로변경
            $(".popup img").attr("src","images/pop"+idx+".jpg").css({width:"100%",height:"100%"});
            /*$(".popup img").attr("src","images/kimbob"+idx+"-1.jpg");*/
            $(".popup").show();
        });///////// click /////////////
        
        $(".cbtn").click(function(){
            $(".popup").hide();
        });/////// click ///////////////
        
    });//// jQB ////////////////////////////////// 