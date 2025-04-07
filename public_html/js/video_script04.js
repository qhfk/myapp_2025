
$(document).ready(function(){
    /* $(".slider").touchSlider({
        flexible: true,
        speed: 300,
        roll: false,
        page: 1
    }); */

    $(".video-slider").touchSlider({
        flexible: true,
        speed: 300,
        roll: false,
        page: 1
    });

    $("#touchSlider").touchSlider({
	
		btn_prev : $("#touchSlider").next().find(".btn_prev"),
		btn_next : $("#touchSlider").next().find(".btn_next"),
		counter : function (e) {
			$("#count").html("current : " + e.current + ", total : " + e.total);
		}
	});
	
	
	

	$("#touchSlider12").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider12_wrap").next(),
		btn_next : $(".touchSlider12_wrap").next()
	});


    

    var initialItems = 2; // 초기 상태에서 보여줄 리스트 개수
    var $listItems = $(".more-content-list li, .more-content-list div.none"); // 모든 <li> 요소 가져오기
    var $toggleButton = $(".btn-more"); // 버튼 가져오기

    // 초기 상태 설정: 처음 2개 항목만 표시
    $listItems.hide().slice(0, initialItems).show();

    // 버튼 클릭 이벤트 설정
    $toggleButton.click(function () {
        if ($toggleButton.text() === "더보기") {
            // 더보기 클릭 시 모든 항목 표시
            $listItems.fadeIn(); 
            $toggleButton.text("접기"); // 버튼 텍스트를 접기로 변경
        } else {
            // 접기 클릭 시 처음 2개만 표시
            $listItems.hide().slice(0, initialItems).show();
            $toggleButton.text("더보기"); // 버튼 텍스트를 더보기로 변경
        }
    });

});


