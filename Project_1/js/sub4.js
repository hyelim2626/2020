// 고봉민김밥 점포찾기 - sub4.js

    /*///////////////////////////////////////////
            함수명: myMap
            기능: 구글맵 위치셋팅
        */ ////////////////////////////////////////////
        function myMap(v1, v2) {
            // 지도를 넣을 대상
            var mapCanvas = document.querySelector("#gmap");
            // 지도 위도,경도값 셋팅
            var myCenter = new google.maps.LatLng(v1, v2);
            // 지도 확대,축소옵션
            var mapOptions = {
                center: myCenter,
                zoom: 16 // 클수록 확대
            };
            // 위의 변수값으로 구글맵 호출생성!
            var map = new google.maps.Map(mapCanvas, mapOptions);
            // 지도의 위치표시자 셋팅
            var marker = new google.maps.Marker({
                position: myCenter,
                // 서버에 있는 이미지를 불러올 수 있다!
                icon: "images/iconM.png",
                // 지도표시자를 위아래로 애니메이션 하는 옵션
                // BOUNCE 는 위아래움직임, DROP 은 한번에 내려옴
                animation: google.maps.Animation.BOUNCE,
                // title은 마우스 오버시 툴
                title: "고봉민김밥!"
            });
            marker.setMap(map);
        } ////// myMap함수 ////////////////////////////////////


        var vals = [
            ["종로구", "마포구", "동대문구"],
            ["고양시", "의정부시", "양주시"]
        ];


        $(function() {
            // 최초맵 호출
            myMap(37.584718,127.001668);

            // 선택박스 데이터 바인딩 : 첫번째 선택박스
            $(".sel1").change(function() {
                var val = $(this).val();
                console.log("선택값:" + val);

                $(".sel2").html('<option value="">구/군 선택</option>');


                if (val === "001") {
                    for (var i = 0; i < 3; i++) {
                        $(".sel2").append('<option value="00' + (i + 1) + '">' + vals[0][i] + '</option>');
                    }
                    $(".cn1").show();
                    $(".cn2").hide();
                } else if (val === "002") {
                    for (var i = 0; i < 3; i++) {
                        $(".sel2").append('<option value="00' + (i + 4) + '">' + vals[1][i] + '</option>');
                    }
                    $(".cn2").show();
                    $(".cn1").hide();
                }
            }); /////// change /////////////
            
            // 두번째 선택박스 변경 : 지도바꾸기!!!
            $(".sel2").change(function() {
                var val = $(this).val();
                console.log("선택값:" + val);

                if (val === "001") {
                    myMap(37.584718,127.001668);
                } else if (val === "002") {
                    myMap(37.541815,126.946919);
                } else if (val === "003") {
                    myMap(37.572080, 127.024053);
                } else if (val === "004") {
                    myMap(37.638259, 126.832974);
                } else if (val === "005") {
                    myMap(37.743619, 127.047676);
                } else if (val === "006") {
                    myMap(37.797734, 127.078507);
                }
            }); /////// change /////////////
            
            
            
            //// 지도내용 초기화 ///
            $(".cn").hide();
            
            


        }); //////// jQB ///////////////////
